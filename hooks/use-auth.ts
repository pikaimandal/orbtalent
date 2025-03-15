"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import type { Profile } from '@/lib/supabase'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)

  // Debug function to log authentication state
  const logAuthState = (source: string, userData: User | null, profileData: Profile | null) => {
    console.log(`[Auth Debug - ${source}]`, {
      isAuthenticated: !!userData,
      user: userData ? { id: userData.id, email: userData.email } : null,
      profile: profileData
    });
  }

  useEffect(() => {
    // Check active session
    const checkSession = async () => {
      try {
        setLoading(true)
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          setUser(session.user)
          
          // Fetch user profile
          const { data: profileData, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
            
          if (error) {
            console.error('Error fetching profile:', error)
          } else {
            setProfile(profileData)
            logAuthState('checkSession', session.user, profileData)
          }
        } else {
          console.log('No active session found')
        }
      } catch (error) {
        console.error('Error checking auth session:', error)
      } finally {
        setLoading(false)
      }
    }

    checkSession()

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Auth state changed: ${event}`, session?.user?.id)
        
        if (session?.user) {
          setUser(session.user)
          
          // Fetch user profile
          const { data: profileData, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
            
          if (error) {
            console.error('Error fetching profile on auth change:', error)
          } else {
            setProfile(profileData)
            logAuthState('authStateChange', session.user, profileData)
          }
        } else {
          setUser(null)
          setProfile(null)
          logAuthState('authStateChange', null, null)
        }
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
    logAuthState('signOut', null, null)
  }

  return {
    user,
    profile,
    loading,
    signOut,
    isAuthenticated: !!user
  }
} 
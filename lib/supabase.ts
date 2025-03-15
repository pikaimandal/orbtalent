import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Initialize supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define types for your database tables
export type Profile = {
  id: string;
  user_type: 'client' | 'freelancer';
  full_name: string | null;
  bio: string | null;
  skills: string[] | null;
  hourly_rate: number | null;
  location: string | null;
  worldcoin_verified: boolean;
  worldcoin_hash: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  client_id: string;
  title: string;
  description: string;
  budget: number | null;
  deadline: string | null;
  skills_required: string[] | null;
  status: 'open' | 'in_progress' | 'completed';
  created_at: string;
  updated_at: string;
};

// Add more types as needed for other tables

// Add auth helper functions
export const signUp = async (email: string, password: string) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  return await supabase.auth.signOut();
};

export const createProfile = async (profileData: Partial<Profile>) => {
  try {
    // Use the API route to create the profile (bypasses RLS)
    const response = await fetch('/api/create-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Profile creation error:', result.error);
      return { error: { message: result.error || 'Failed to create profile' } };
    }
    
    return { data: result.data };
  } catch (error) {
    console.error('Profile creation error:', error);
    return { error: { message: 'Failed to create profile' } };
  }
};

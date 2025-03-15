"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function SupabaseTest() {
  const [isMounted, setIsMounted] = useState(false);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setIsMounted(true);
    
    // Only run the test if supabase client exists
    if (!supabase) {
      setStatus('Supabase client not available');
      return;
    }
    
    const testConnection = async () => {
      try {
        // Simple test query - use non-null assertion since we checked above
        const { error } = await supabase!.from('profiles').select('count', { 
          count: 'exact', 
          head: true 
        });
        
        if (error) {
          console.error('Supabase query error:', error);
          setStatus(`Error: ${error.message}`);
        } else {
          setStatus('Connected to Supabase successfully!');
        }
      } catch (err) {
        console.error('Error:', err);
        setStatus(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
      }
    };
    
    testConnection();
  }, []);

  // Return a loading state during server rendering and initial hydration
  if (!isMounted) {
    return <div className="p-4 border rounded">Loading...</div>;
  }

  // Client-side render after hydration is complete
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Supabase Connection Test</h2>
      <p>{status}</p>
    </div>
  );
}

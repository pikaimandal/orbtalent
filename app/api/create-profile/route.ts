import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import type { Profile } from '@/lib/supabase';

// Create a Supabase client with the service role key
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(request: Request) {
  try {
    const profileData = await request.json() as Partial<Profile>;
    
    // Validate the request
    if (!profileData.id || !profileData.user_type || !profileData.full_name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Insert the profile using the admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin
      .from('profiles')
      .insert([profileData])
      .select();
    
    if (error) {
      console.error('Error creating profile:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 
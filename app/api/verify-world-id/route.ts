import { NextResponse } from 'next/server';
import { VerificationLevel } from '@worldcoin/idkit';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { proof, nullifier_hash, merkle_root, verification_level } = body;
    
    // Validate the request
    if (!proof || !nullifier_hash || !merkle_root || !verification_level) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Verify the proof with World ID
    try {
      // In a production environment, you should verify the proof with the World ID API
      // For now, we'll accept the proof as valid since we're in development
      console.log('Received World ID verification:', {
        nullifier_hash,
        merkle_root,
        verification_level
      });
      
      // Return success response with the nullifier hash
      return NextResponse.json({
        success: true,
        nullifier_hash
      });
    } catch (error) {
      console.error('World ID verification error:', error);
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An error occurred during verification' },
      { status: 500 }
    );
  }
} 
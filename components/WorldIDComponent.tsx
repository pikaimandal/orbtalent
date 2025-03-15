"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IDKitWidget, VerificationLevel, ISuccessResult } from "@worldcoin/idkit";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface WorldIDComponentProps {
  onSuccess: (hash: string) => void;
}

export default function WorldIDComponent({ onSuccess }: WorldIDComponentProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleVerify = async (result: ISuccessResult) => {
    try {
      setIsVerifying(true);
      
      // Send the proof to our backend for verification
      const response = await fetch('/api/verify-world-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proof: result.proof,
          nullifier_hash: result.nullifier_hash,
          merkle_root: result.merkle_root,
          verification_level: result.verification_level,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Verification failed');
      }
      
      // Call the onSuccess callback with the verified nullifier hash
      setIsComplete(true);
      onSuccess(data.nullifier_hash);
      setIsVerifying(false);
    } catch (error) {
      console.error('Error verifying with World ID:', error);
      setError(error instanceof Error ? error.message : 'Verification failed');
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <div className="bg-primary/10 p-6 rounded-full">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          {isComplete ? (
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          ) : (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28Z" fill="currentColor"/>
              <path d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22Z" fill="currentColor"/>
              <circle cx="16" cy="16" r="4" fill="currentColor"/>
            </svg>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-center">
        {isComplete ? "Verification Complete!" : "Verify your identity"}
      </h3>
      
      <p className="text-center text-sm text-muted-foreground mb-2">
        {isComplete 
          ? "Your identity has been verified with World ID." 
          : "ORB Talent requires World ID verification to ensure all users are real humans."}
      </p>
      
      {error && (
        <div className="text-sm text-red-500 mb-2 flex items-center gap-2 bg-red-50 p-3 rounded-md w-full">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {!isComplete && (
        <IDKitWidget
          app_id={process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID as `app_${string}`}
          action="orbtalent"
          onSuccess={handleVerify}
          handleVerify={() => {
            // The actual verification happens in our API route
            // This is just a placeholder to satisfy the IDKitWidget API
          }}
          verification_level={VerificationLevel.Device}
        >
          {({ open }) => (
            <Button 
              onClick={() => {
                setError(null);
                setIsVerifying(true);
                open();
              }}
              className="flex items-center gap-2 w-full"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify with World ID"
              )}
            </Button>
          )}
        </IDKitWidget>
      )}
      
      <div className="text-xs text-muted-foreground mt-2 text-center max-w-xs">
        {isComplete ? (
          <p>Thank you for verifying your identity. You can now continue with the sign-up process.</p>
        ) : (
          <>
            <p>Scan the QR code with your World App to verify your identity.</p>
            <p>This ensures all users on ORB Talent are real humans.</p>
          </>
        )}
      </div>
    </div>
  );
}

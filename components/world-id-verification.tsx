"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

// Create a placeholder component to show while loading
const LoadingVerification = () => (
  <div className="w-full flex justify-center">
    <Button disabled className="flex items-center gap-2">
      <Loader2 className="h-4 w-4 animate-spin" />
      Loading verification...
    </Button>
  </div>
)

// Dynamically import the WorldID component with SSR disabled
const WorldIDComponent = dynamic(
  () => import("@/components/WorldIDComponent"),
  { 
    ssr: false,
    loading: () => <LoadingVerification />
  }
)

interface WorldIDVerificationProps {
  onSuccess: (hash: string) => void
}

export function WorldIDVerification({ onSuccess }: WorldIDVerificationProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <WorldIDComponent onSuccess={onSuccess} />
    </div>
  )
}


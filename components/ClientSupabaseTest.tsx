"use client";

import dynamic from 'next/dynamic';

// Import the component with SSR disabled
const SupabaseTest = dynamic(() => import('@/components/SupabaseTest'), {
  ssr: false
});

export default function ClientSupabaseTest() {
  return <SupabaseTest />;
}

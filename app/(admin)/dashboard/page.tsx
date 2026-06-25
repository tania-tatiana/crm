import React from 'react';
import MagicButton from '@/app/components/magic-button';

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}

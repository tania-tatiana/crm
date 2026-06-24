import React, { use } from 'react';
import Header from '@/app/components/header';

interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);
  return (
    <>
      <Header>Companies ({String(id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}

import React from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>; // Оголошуємо як Promise
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const companyId = Number.parseInt(id, 10);

  if (Number.isNaN(companyId)) {
    notFound();
  }

  return (
    <>
      <main className="p-10">
        <p className="text-gray-600">
          Детальна інформація про компанію з ID: {id}
        </p>
      </main>
    </>
  );
}

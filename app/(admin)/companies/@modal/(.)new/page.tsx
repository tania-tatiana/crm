'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';
import CompanyForm from '@/app/components/company-form';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()} size="xl">
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}

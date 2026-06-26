'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const { id } = use(params);
  return (
    <Modal show={true} onClose={() => router.back()}>
      <PromotionForm companyId={id} />
    </Modal>
  );
}

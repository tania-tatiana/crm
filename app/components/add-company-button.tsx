'use client';

import React, { useState } from 'react';
import { Button } from '@headlessui/react';
import dynamic from 'next/dynamic';
//import CompanyFormModal from '@/app/components/company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}

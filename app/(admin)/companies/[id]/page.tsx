import React from 'react';
import { notFound } from 'next/navigation';
import getQueryClient from '@/lib/utils/getQueryClient';
import { Company, getCompany, getPromotions } from '@/lib/api';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CompanyPromotions from '@/app/components/company-promotions';
import CompanyInfo from '@/app/components/company-info';

export interface PageProps {
  params: Promise<{ id: string }>; // Оголошуємо як Promise
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]) as Company;

  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <div className="py-6 px-10 grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <CompanyInfo companyId={id} />
          </div>
          <div className="col-span-9">
            <CompanyPromotions companyId={id} />
          </div>
        </div>
      </HydrationBoundary>
    </>
  );
}

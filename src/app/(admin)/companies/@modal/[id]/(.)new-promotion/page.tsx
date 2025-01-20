'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';
import { use } from 'react'

export interface PageProps {
  params: { id: string };
}
export default function Page({ params }: { params: Promise<{ id: string }>}) {
    const { id } = use(params);
    const router = useRouter();
  return (
    <PromotionFormModal
      companyId={id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
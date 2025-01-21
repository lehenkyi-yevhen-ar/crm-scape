import React from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: { id: string };
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
import { use } from 'react';
import Header from '@/app/components/header';
import {notFound} from 'next/navigation'

export default function Page({ params }: { params: Promise<{ id: string }>}) {
  const { id } =  use(params);
  
    const pId = Number.parseInt(id);
    if (Number.isNaN(pId)) {
      notFound();
    }
  return (
    <>
      <Header>Company ({id}) </Header>
    </>
  );
}
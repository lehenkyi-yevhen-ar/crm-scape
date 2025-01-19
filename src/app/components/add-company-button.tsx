'use client'

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
    ssr: false
})

export default function AddCompanyButton() {
    const [show, setShow] = useState(false);

    // eslint-disable-next-line
      const handleSubmit = (data: any) => {
    console.log('Submitted data:', data);
  };
  
    return (
        <>
            <Button onClick={() => setShow(true)}>Add Company</Button>
            <CompanyFormModal
                onSubmit={handleSubmit}
                show={show} 
                onClose={() => setShow(false)}
            />
        </>
)}
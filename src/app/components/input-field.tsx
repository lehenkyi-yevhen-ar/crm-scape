'use client'

import { Field } from 'formik';
import React from 'react';

export interface InputfieldProps {
    id: string,
    label?: string;
}

export default function Inputfield({label, id, ...rest}: InputfieldProps) {
    return (
        <div className='flex flex-col'>
            {label && (
                <label htmlFor={id} className="mb-2 text-base color-gray-900">
                    {label}
                </label>
            )}
            <Field
                {...rest}
                id={id}
                className='p-3 h-11 text-sm rounded border-gray-300 shadow'
            />
        </div>
  );
}
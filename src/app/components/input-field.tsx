'use client'

import { Field } from 'formik';
import React, {ReactNode} from 'react';

export interface InputfieldProps {
    name: string;
    label?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    as?: 'input' | 'select';
    required?: boolean;
    children?: ReactNode;
}

export default function Inputfield({label, id, as = 'input', children,  ...rest}: InputfieldProps) {
    return (
        <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      {as === 'select' ? (
        <Field
          as="select" 
          {...rest}
          id={id}
          className="p-3 h-11 text-sm rounded border-gray-300 shadow"
        >
          {children}
        </Field>
      ) : (
        <Field
          {...rest}
          id={id}
          className="p-3 h-11 text-sm rounded border-gray-300 shadow"
        />
      )}
    </div>
  );
}
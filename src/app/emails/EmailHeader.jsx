'use client'
import React from 'react'
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid'

export default function EmailHeader() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('vdhzs@inbox.testmail.app');
    // alert removed for conciseness
  };

  return (
    <div className='p-4 sm:p-5 bg-green-600 text-center text-sm sm:text-lg text-white'>
      <span>Test Emails </span>
      <span className="font-bold">vdhzs@inbox.testmail.app</span>
      <button onClick={copyToClipboard} className="ml-2 inline-flex items-center cursor-pointer">
        <DocumentDuplicateIcon className="h-4 w-4 sm:h-5 sm:w-5 hover:text-gray-200" aria-hidden="true" />
      </button>
    </div>
  );
}

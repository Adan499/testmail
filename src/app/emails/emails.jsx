'use client'
import React from 'react'
import { CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/20/solid'

export default function Emails({ data }) {
  return (
    <div className="p-4 min-h-screen w-full max-w-screen-lg mx-auto">
      <h1 className="text-base sm:text-xl font-bold mb-6 text-left">Emails</h1>
      {data ? (
        data.emails.map((email, index) => (
          <div key={index} className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 mb-6 pb-5">
            <dl className="flex flex-wrap">
              <div className="flex-auto pl-4 sm:pl-6 pt-4 sm:pt-6">
                <dt className="text-xs sm:text-sm font-semibold text-gray-900">From</dt>
                <dd className="mt-1 text-sm sm:text-base font-semibold text-gray-900">{email.from}</dd>
              </div>
              <div className="mt-4 sm:mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-4 sm:px-6 pt-4 sm:pt-6">
                <dt className="flex-none">
                  <span className="sr-only">Date & Time</span>
                  <CalendarDaysIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </dt>
                <dd className="text-xs sm:text-sm font-medium text-gray-900">
                  {`${new Date(email.date).toLocaleDateString()} ${new Date(email.date).toLocaleTimeString()}`}
                </dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-4 sm:px-6">
                <dt className="flex-none">
                  <span className="sr-only">Subject</span>
                  <UserCircleIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </dt>
                <dd className="text-xs sm:text-sm text-gray-500">{email.subject}</dd>
              </div>
              <div className="mt-4 flex w-full flex-none gap-x-4 px-4 sm:px-6">
                <dt className="flex-none">
                  <span className="sr-only">Message</span>
                </dt>
                <dd className="text-xs sm:text-sm text-gray-500 whitespace-pre-line line-clamp-3">
                  {email.text}
                </dd>
              </div>
            </dl>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-sm sm:text-base">Loading...</p>
      )}
    </div>
  );
}

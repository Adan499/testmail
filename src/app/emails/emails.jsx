'use client'
import React, { useState } from 'react'
import { CalendarDaysIcon, UserCircleIcon } from '@heroicons/react/20/solid'

// Helper function to convert URLs to clickable links
function linkify(text) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
    return part.match(/https?:\/\/[^\s]+/) ? (
      <a
        key={index}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {part}
      </a>
    ) : (
      part
    );
  });
}

export default function Emails({ data }) {
  const [pageSize, setPageSize] = useState(5)
  
  // Get subset of emails based on selected page size. Use slice length if pageSize is Infinity.
  const emailsToShow = data ? data.emails.slice(0, pageSize) : []

  return (
    <div className="p-4 min-h-screen w-full max-w-screen-lg mx-auto">
      <h1 className="text-sm sm:text-xl font-bold mb-6 text-left">Emails</h1>
      {data ? (
        <>
          {emailsToShow.map((email, index) => (
            <div key={index} className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 mb-6 pb-5">
              <dl className="flex flex-wrap">
                <div className="flex-auto pl-4 sm:pl-6 pt-4 sm:pt-6">
                  <dt className="text-xs sm:text-sm font-semibold text-gray-900">From</dt>
                  <dd className="mt-1 text-xs sm:text-base font-semibold text-gray-900">{email.from}</dd>
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
                    {linkify(email.text)}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
          <div className="flex items-center justify-end mt-4 px-4 sm:px-6">
            <label htmlFor="pageSize" className="text-xs sm:text-sm text-gray-700 mr-2">
              Items per page:
            </label>
            <select
              id="pageSize"
              value={pageSize === Infinity ? "all" : pageSize}
              onChange={(e) =>
                setPageSize(e.target.value === "all" ? Infinity : parseInt(e.target.value))
              }
              className="text-xs sm:text-sm p-1 border-gray-300 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={70}>70</option>
              <option value={100}>100</option>
              <option value="all">All</option>
            </select>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-sm sm:text-base">Loading...</p>
      )}
    </div>
  );
}

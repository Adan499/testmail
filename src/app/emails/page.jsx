// export const dynamic = 'force-dynamic';
export const revalidate = 10;

import React from 'react'
import axios from 'axios'
import EmailHeader from './EmailHeader'
import Emails from './emails'

async function fetchEmails() {
  const res = await axios.get('https://api.testmail.app/api/json', {
    params: {
      apikey: '4b6c7a40-17bb-4904-a2a6-e031480cf677',
      namespace: 'vdhzs',
      livequery: 'true'
    },
    headers: {
      'Authorization': 'Bearer 4b6c7a40-17bb-4904-a2a6-e031480cf677'
    }
  });
  return res.data;
}

export default async function Page() {
  const data = await fetchEmails();

  return (
    <div className=' bg-gray-100'>
      <EmailHeader />
     <div className='md:w-9/12 w-full  mx-auto mt-3'>
     <Emails data={data} />
     </div>
    </div>
  );
}

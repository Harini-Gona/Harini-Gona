'use client';
import React from 'react';
import QRCode from 'react-qr-code';

export default function Ticket({ ticketInfo }: { ticketInfo: any }) {
  const { name, branch, regNumber, college } = ticketInfo;

  return (
    <div className='border border-gray-300 p-4 mb-4 bg-white rounded shadow-md text-black'>
      <div className='flex items-center justify-between my-4'>
        <img src='/gdsc.webp' className='w-1/12' alt='GDSC Logo' />
        <h2 className='text-2xl font-semibold'>
          Google Developer Student Clubs | GITAM{' '}
        </h2>
      </div>

      <div className='flex justify-between items-center'>
        <div>
          <h3 className='text-xl font-bold mb-2'>Ticket Information</h3>
          <p className='mb-2'>Name: {name}</p>
          <p className='mb-2'>Branch: {branch}</p>
          <p className='mb-2'>Registration Number: {regNumber}</p>
          <p className='mb-2'>College: {college}</p>
        </div>
        <div id='qrcode'>
          <QRCode
            value={`Name: ${name}\nBranch: ${branch}\nRegistration Number: ${regNumber}\nCollege: ${college}`}
            size={128}
          />
        </div>
      </div>
    </div>
  );
}

'use client';
import React, { useState } from 'react';

export default function TicketForm({
  onGenerateTicket,
}: {
  onGenerateTicket: any;
}) {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [regNumber, setRegNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onGenerateTicket({ name, branch, regNumber });
  };

  return (
    <div>
      <h1 className='my-10 text-3xl font-semibold'>
        DevFest 2024 Recruitment Form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block text-sm font-semibold text-gray-600'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full border border-gray-300 p-2 rounded'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='branch'
            className='block text-sm font-semibold text-gray-600'
          >
            Branch
          </label>
          <input
            type='text'
            id='branch'
            name='branch'
            className='w-full border border-gray-300 p-2 rounded'
            required
            onChange={(e) => setBranch(e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='regNumber'
            className='block text-sm font-semibold text-gray-600'
          >
            Registration Number
          </label>
          <input
            type='text'
            id='regNumber'
            name='regNumber'
            className='w-full border border-gray-300 p-2 rounded'
            required
            onChange={(e) => setRegNumber(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='bg-green-700 hover:bg-white hover:text-black border hover:border-black transition duration-300 text-white w-full py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

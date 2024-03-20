'use client';
import React, { useState } from 'react';
import TicketForm from '@/components/TicketForm';
import TicketDisplay from '@/components/Ticket';

export default function TicketGenerator() {
  const [ticketInfo, setTicketInfo] = useState(null);

  const generateTicket = (info: any) => {
    setTicketInfo(info);
  };

  return (
    <div>
      <section className='flex justify-between items-start text-black'>
        <div className='py-20 bg-black w-1/2 md:visible'>
          <img src='/devfest.jpeg' alt='GDSC Image' className='bg-black' />
        </div>

        <div className='w-1/2 bg-white p-4 mx-8 my-10'>
          {ticketInfo ? (
            <TicketDisplay ticketInfo={ticketInfo} />
          ) : (
            <TicketForm onGenerateTicket={generateTicket} />
          )}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { RandomizedTextEffect } from '@/ui/text-randomized';

function Plume() {
  return (
    <>
      <div className=' py-8 rounded-md'>
        <h1 className='font-departure  font-(family-name:--font-karla) font-bold text-8xl relative z-10 text-center h-[120px] md:h-auto leading-tight'>
          <RandomizedTextEffect text='La plume vagabonde...' />
        </h1>
      </div>
    </>
  );
}

export default Plume;
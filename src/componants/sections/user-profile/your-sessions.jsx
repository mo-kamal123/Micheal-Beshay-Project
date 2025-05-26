import { useState } from 'react';
import NextSession from './next-session';
import LastSession from './last-session';
const YourSesstions = () => {
  const [active, setActive] = useState('next');
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10">
      <div className="bg-white h-fit md:w-1/4 p-6 flex md:flex-col items-center justify-between gap-5 rounded-4xl">
        <p
          onClick={() => setActive('next')}
          className={`${active === 'next' ? 'bg-main text-white' : ''}  w-[90%] text-center px-3 py-2 rounded-xl transition-all duration-300 md:rounded-4xl`}
        >
          Next sessions
        </p>
        <p
          onClick={() => setActive('last')}
          className={`${active === 'last' ? 'bg-main text-white' : ''}  w-[90%] text-center px-3 py-2 rounded-xl transition-all duration-300 md:rounded-4xl`}
        >
          Last sessions
        </p>
      </div>
      {active == 'next' && <NextSession />}
      {active == 'last' && <LastSession />}
    </div>
  );
};

export default YourSesstions;

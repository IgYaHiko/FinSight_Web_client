import React, { useEffect, useState } from 'react';
import { colors } from '../constant/color';
import { images } from '../constant/images';

const User = () => {
  const targetUsers = 100800; // 100.80k
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetUsers / steps;
    let current = 0;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      current += increment;
      if (frame >= steps) {
        setUserCount(targetUsers);
        clearInterval(interval);
      } else {
        setUserCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='absolute w-[290px] right-40 top-10 flex justify-evenly items-center py-4 rounded-4xl px-4 h-[100px]'
      style={{ border: `2px solid ${colors.grey}` }}
    >
      <div className='flex items-center gap-4'>
        <div className='w-[60px] h-[60px] rounded-full'>
          <img
            className='w-full h-full object-cover rounded-full'
            src={images.ALCE}
            alt="User 1"
          />
        </div>
        <div className='w-[60px] h-[60px] rounded-full'>
          <img
            className='w-full h-full object-cover rounded-full'
            src={images.LANA}
            alt="User 2"
          />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h1 style={{fontFamily: 'futura'}} className='font-[600] text-2xl'>
            {(userCount / 1000).toFixed(2)}k
          </h1>
          <h1 className='text-gray-500 font-xs'>
            Trusted Users
          </h1>
        </div>
      </div>
    </div>
  );
};

export default User;

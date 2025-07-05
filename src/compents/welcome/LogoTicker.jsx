import React from 'react';
import { logos } from '../../constant/images';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  // Duplicate logos to create seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className='py-15 md:py-28 px-0 md:px-48 overflow-x-clip'>
      <div className='container mx-auto text-center'>
        <h1
          style={{ fontFamily: 'futura' }}
          className='text-white opacity-60'
        >
          Already chosen by these market leaders
        </h1>
      </div>

      {/* Marquee container with gradient mask */}
      <div className='overflow-hidden mt-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <motion.div
          className='flex gap-10'
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        >
          {repeatedLogos.map((data, i) => (
            <img
              key={`${data.name}-${i}`}
              src={data.image}
              alt={data.name}
              className='w-36 h-auto'
              draggable="false"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;

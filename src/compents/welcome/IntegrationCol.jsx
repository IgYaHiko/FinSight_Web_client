import React from 'react';
import { motion } from 'framer-motion';

const IntegrationCol = ({ classNames = '', data, reverse = false }) => {
  const repeatedData = [...data, ...data];

  return (
    <div className={`relative h-full overflow-hidden ${classNames}`}>
      <motion.div
  className="flex flex-col gap-5"
  animate={{ y: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
  transition={{
    duration: 15, // Adjust speed here
    ease: 'linear',
    repeat: Infinity,
  }}
>
        {repeatedData.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="bg-neutral-900 rounded-xl border border-white/15 flex flex-col items-center p-6"
          >
            <img src={item.icons} className="w-24 h-24" alt={item.name} />
            <h1 className="text-white text-3xl mt-3" style={{ fontFamily: 'futura' }}>
              {item.name}
            </h1>
            <p
              style={{ fontFamily: 'poppins' }}
              className="text-white/40 text-xs text-center mt-2"
            >
              {item.describtion}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntegrationCol;

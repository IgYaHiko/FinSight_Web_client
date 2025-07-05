import React, { useEffect, useRef } from 'react';
import { GoNorthStar } from 'react-icons/go';
import { colors } from '../../constant/color';
import gsap from 'gsap';

const Try = () => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    // Infinite horizontal scroll
    tweenRef.current = gsap.to(marquee, {
      xPercent: -90,
      repeat: -1,
      ease: 'linear',
      duration: 20,
    });

    // Cleanup on unmount
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(marqueeRef.current, { opacity: 0.5, duration: 0.3 });
    tweenRef.current.timeScale(0.4); // slow down
  };

  const handleMouseLeave = () => {
    gsap.to(marqueeRef.current, { opacity: 1, duration: 0.3 });
    tweenRef.current.timeScale(1); // restore normal speed
  };

  return (
    <section className="py-10 overflow-hidden">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex whitespace-nowrap w-max" ref={marqueeRef}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-white text-8xl font-medium px-8"
              style={{ fontFamily: 'poppins' }}
            >
              <GoNorthStar color={colors.primary} />
              Try it for free
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Try;

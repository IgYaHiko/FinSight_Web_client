import React, { useEffect, useState } from 'react';
import { colors } from '../../constant/color';
import CustomButton from './CustomButton';
import { BsRocket } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimate } from 'framer-motion';
import { images } from '../../constant/images';
import Pointer from './Pointer';

const Hero = ({ darkMode }) => {
  const slogans = [
    'Automate with Finsight.',
    'Track every rupee.',
    'Smarter finance.',
    'Your wallet, your way.'
  ];

  const [text, setText] = useState('');
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const navigate = useNavigate();

  // Animation refs
  const [leftDiv, leftDivAni] = useAnimate();
  const [leftPoint, leftPointAni] = useAnimate();
  const [rightDiv, rightDivAni] = useAnimate();
  const [rightPoint, rightPointAni] = useAnimate();

  // Slogan typing logic
  useEffect(() => {
    const current = slogans[sloganIndex];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setSloganIndex((prev) => (prev + 1) % slogans.length);
      }, 1800);
      return () => clearTimeout(delay);
    }
  }, [charIndex, sloganIndex]);

  const handleWelcome = () => {
    navigate('/signup');
  };

  // Pointer and Div Animation Logic
  useEffect(() => {
    const animate = async () => {
      // Right pointer first

       await leftDivAni([
        [leftDiv.current, { opacity: 1, x: 0, y: 0 }, { duration: 0.5, ease: 'easeOut' }]
      ]);
      
      await rightPointAni([
        [rightPoint.current, { opacity: 1, x: -100, y: 0 }, { duration: 0.5  }],
        [rightPoint.current, {x: 0, y: [0, -20, 0] }, { duration: 0.5, ease: 'easeInOut' }],
        
      ]);
       

      // Then right image slides in
      await rightDivAni([
        [rightDiv.current, { opacity: 1, x: 0, y: 0 }, { duration: 0.6, ease: 'easeOut' }]
      ]);

      // Left pointer
      await leftPointAni([
        [leftPoint.current, { opacity: 1, x: 100, y: 0 }, { duration: 0.5 }],
        [leftPoint.current, { y: [0, 30, 0] }, { duration: 0.5, ease: 'easeInOut' }]
      ]);

      // Then left image slides in
    
    };

    animate();
  }, []);

  return (
    <section
      style={{ cursor: `url(${images.CursorYou}) 4 4, auto` }}
      className="py-20 relative overflow-x-clip"
    >
      {/* Left pointer (after image) */}
      <motion.div
        initial={{ opacity: 0, x: 200, y: 100 }}
        ref={leftPoint}
        className="absolute hidden lg:block z-50"
        style={{ left: '64%' }}
      >
        <Pointer text="Mojo_Rojo" style={colors.newGreen} />
      </motion.div>

      {/* Right pointer (before image) */}
      <motion.div
        initial={{ opacity: 0, x: -200, y: 100 }}
        ref={rightPoint}
        className="absolute hidden lg:block z-70"
        style={{ left: '27%', top: '90%' }}
      >
        <Pointer text="Yahiko" font="white" style={colors.rose} />
      </motion.div>

      {/* Left Image (comes after pointer) */}
      <motion.div
        drag
        initial={{ opacity: 0, x: -100, y: 100 }}
        ref={leftDiv}
        className="absolute -left-8 hidden lg:block top-44 z-30"
      >
        <img
          draggable="false"
          src={images.DESIGNONE}
          className="w-[450px]"
          alt=""
        />
      </motion.div>

      {/* Right Image */}
      <motion.div
        drag
        initial={{ opacity: 0, x: 100, y: 100 }}
        ref={rightDiv}
        className="absolute z-30 right-13 hidden lg:block top-14"
      >
        <img
          draggable="false"
          src={images.DESIGNTHREE}
          className="w-[300px]"
          alt=""
        />
      </motion.div>

      <div className="container mx-auto">
        {/* Tag line */}
        <div className="flex justify-center">
          <div
            className="inline-flex py-1 px-4 rounded-full text-white shadow-md"
            style={{
              background: 'linear-gradient(to right, #6366f1, #2563eb)',
              fontFamily: 'poppins',
              fontWeight: 500,
            }}
          >
            🚀 $100k seed round raised
          </div>
        </div>

        {/* Main Heading */}
        <div className="flex items-center mt-4 px-2 md:px-0 flex-col text-center">
          <h1
            className="text-5xl md:text-8xl text-white"
            style={{ fontFamily: 'poppins', fontWeight: 700 }}
          >
            Your{' '}
            <span style={{ color: colors.primary }}>Finances</span>
          </h1>
          <h1
            className="text-2xl md:text-6xl text-white"
            style={{ fontFamily: 'poppins', fontWeight: 700 }}
          >
            {text}|
          </h1>
          <p
            className="text-md md:text-md text-white opacity-60 mt-3"
            style={{ fontFamily: 'poppins' }}
          >
            FinSight simplifies your spending habits with intelligent tracking and real-time analysis.
          </p>
          <p
            className="text-md md:text-md text-white opacity-60"
            style={{ fontFamily: 'poppins' }}
          >
            From bill scanning to budget alerts, everything is automated — no manual input, no mess.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <CustomButton
            classNames="mt-3 cursor-pointer"
            title="Get Started"
            onClick={handleWelcome}
            icons={<BsRocket />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

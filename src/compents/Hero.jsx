import React, { useEffect, useState } from 'react';
import { colors } from '../constant/color';
import CustomButton from './CustomButton';
import { FiArchive, FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import { images } from '../constant/images';
import Balance from './Balance';
import User from './User';
import Track from './Track';
import ScheduleCard from './ScheduleCard';
import { useNavigate } from 'react-router-dom';
const Hero = ({darkMode}) => {
  const slogans = [
    'Automate with Finsight.',
    'Track every rupee. Effortlessly.',
    'Smarter finance. Smarter you.',
    'Your wallet, your way.'
  ];

  const [text, setText] = useState('');
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const navigate = useNavigate();
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
      }, 1800); // pause before switching to next slogan
      return () => clearTimeout(delay);
    }
  }, [charIndex, sloganIndex]);

  const handelWelcome = () => {
      navigate("/signup")
  }

  return (
    <div
  style={{ height: '90%' }}
  className={`px-5 py-5 w-full transition-all duration-300 ${darkMode ? 'bg-[#131313] text-white' : 'bg-[#FAF1E6] text-black'}`}
>

    <div  style={{height: "90%"}} className='px-5  py-5 w-full'  >
      <div className="flex justify-center">
        <div className="flex flex-col mt-0 items-center justify-center rounded-md">
          <h1 className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-black'} text-center`} style={{ fontFamily: 'poppins' }}>
            Your <span style={{ color: colors.primary }}>Finances</span>
          </h1>
          <h1 className={`text-6xl font-black ${darkMode ? 'text-white' : 'text-black'}  text-center`}>
            {text}
            <span className="animate-pulse" style={{color: colors.primary}}>|</span>
            <span style={{ color: colors.primary }}> 🚀</span>
          </h1>
          <div className='mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "grey" }}>
            <p>"Finsight simplifies your spending habits with intelligent tracking and real-time analysis. From bill scanning to budget alerts,</p>
            <p>everything is automated — no manual input, no mess."</p>
          </div>
        </div>
      </div>
      <CustomButton onClick={handelWelcome} title={"Get Started Buddy"} classNames="mt-2" icons={<FiArrowUpRight/>} darkmode={darkMode} />
      {/* iphone */}
      <div className='px-[13vw] flex  relative'>
        <Balance darkmode={darkMode}/>
        <ScheduleCard darkmode={darkMode}/>
        <div className='w-[350px] mt-3  m-auto'>
       <img src={images.Iphone} className='w-[100%] h-[100%] object-contain' alt="" />
      </div>
     
        <User/>
        <Track/>
     
      </div>
    </div>
    </div>
  );
};

export default Hero;

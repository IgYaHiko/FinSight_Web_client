import React from 'react';
import { colors } from '../../constant/color';
import { images } from '../../constant/images';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Authlayout = ({ children }) => {
  const router = useNavigate();

  return (
    <div className='flex flex-col md:flex-row w-full h-screen overflow-hidden'>
      
      {/* Left Auth Content */}
      <div
        style={{ backgroundColor: colors.myblack }}
        className='w-full md:w-1/2 h-full px-5 md:px-10 pb-12 overflow-y-auto no-scrollbar'
      >
        <div className='flex items-center justify-between gap-2 mt-4'>
          <div className='flex items-center gap-1'>
            <img src={images.logo} className='w-[50px] object-contain' alt="logo" />
            <h1 className='font-bold text-3xl text-white' style={{ fontFamily: 'futura' }}>
              FinSight
            </h1>
          </div>
          <div onClick={() => router('/welcome')} style={{ backgroundColor: colors.primary }} className='p-2 rounded-full cursor-pointer'>
            <IoMdArrowBack color='white' />
          </div>
        </div>
        {children}
      </div>

      {/* Right Side Image Section */}
      <div
        className='hidden md:flex w-1/2 h-full relative items-center justify-center overflow-hidden'
        style={{ backgroundColor: colors.secondColor }}
      >
        {/* Decorative Top Overlay */}
        <div
          style={{ backgroundColor: colors.primary }}
          className='w-[200px] h-[150px] rounded-br-3xl absolute top-0 left-0 z-10'
        />

        {/* Vector Images */}
        {[200, 100].map((w, i) => (
          <div key={i} className='absolute top-0 right-0'>
            <img src={images.Vector} style={{ width: `${w}px` }} className='object-contain' alt="" />
          </div>
        ))}
        {[200, 100].map((w, i) => (
          <div key={i + 2} className='absolute bottom-0 right-0'>
            <img src={images.Vector} style={{ width: `${w}px` }} className='object-contain' alt="" />
          </div>
        ))}

        {/* Main Image */}
        <div className='max-w-[90%] max-h-[90%] z-20'>
          <img src={images.LOGIN} className='w-full h-full object-contain' alt="login-illustration" />
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
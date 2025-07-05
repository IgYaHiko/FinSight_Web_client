import React from 'react';
import { images } from '../../constant/images';

const Footer = () => {
  return (
    <footer className="py-24 lg:py-16 ">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Title */}
          <div className="flex items-center ">
            <img
              src={images.logo}
              alt="Logo"
              className="w-14 h-auto object-contain"
            />
            <h1
              className="text-2xl text-white font-bold"
              style={{ fontFamily: 'Poppins' }}
            >
              FinSight
            </h1>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-white/50">
            <p className="hover:text-white cursor-pointer">Contact</p>
            <p className="hover:text-white cursor-pointer">Privacy & Policy</p>
            <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

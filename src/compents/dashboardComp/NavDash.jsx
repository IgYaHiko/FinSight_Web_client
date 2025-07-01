import React, { useContext, useState } from 'react';
import { HiOutlineX, HiOutlineMenuAlt1 } from "react-icons/hi";
import { UserContext } from '../../context/useContext';
import { colors } from '../../constant/color';
import { images } from '../../constant/images';
import SideMenu from './SideMenu';
import { useEffect } from 'react';
import AvatarWithEdit from '../avatar/AvatarWithEdit';

const NavDash = () => {
    const greetings = [
  'नमस्ते',       // Hindi
  'Bonjour',      // French
  'Hello',        // English
  'Hola',         // Spanish
  'Ciao',         // Italian
  'こんにちは',    // Japanese (Konnichiwa)
  '안녕하세요',     // Korean (Annyeonghaseyo)
  '你好',          // Chinese Mandarin (Nǐ hǎo)π
  'سلام',         // Persian / Arabic (Salaam)
  'Guten Tag',    // German
  /* 'Здравствуйте', */ // Russian (Zdravstvuyte)
  'สวัสดี',       // Thai (Sawasdee)
  'Merhaba',      // Turkish
  'Hej',          // Swedish / Danish
  'Olá',          // Portuguese
  'Selamat',      // Indonesian / Malay
  'שלום',         // Hebrew (Shalom)
  'Xin chào',     // Vietnamese
  'Halo',         // Indonesian (again)
]
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [typedGreeting, setTypedGreeting] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  const { user } = useContext(UserContext);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const closeSideMenu = () => setOpenSideMenu(false);
   useEffect(() => {
    const currentGreeting = greetings[greetingIndex]
    if (charIndex < currentGreeting.length) {
      const timeout = setTimeout(() => {
        setTypedGreeting(prev => prev + currentGreeting.charAt(charIndex))
        setCharIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        // Clear and move to next greeting
        setTypedGreeting('')
        setCharIndex(0)
        setGreetingIndex(prev => (prev + 1) % greetings.length)
      }, 1500)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, greetingIndex])

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div
        className="w-full flex items-center justify-between px-10 py-4 shadow-md"
        style={{ backgroundColor: colors.myblack }}
      >
        {/* Left: Menu + Greeting */}
        <div className="flex items-center gap-4">
          {/* <button
            className="text-white"
            onClick={() => setOpenSideMenu(!openSideMenu)}
          >
            {openSideMenu ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt1 size={28} />
            )}
          </button> */}

          <div className="hidden sm:flex flex-col text-white leading-5">
            <h1 className="text-lg opacity-50 font-bold" style={{ fontFamily: 'Poppins' }}>
              {typedGreeting},
            </h1>
            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'futura' }}>
              {user?.name || 'Guest'} ❤️
            </h1>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 overflow-hidden rounded-full border border-gray-400">
           <img
           src={user?.profilePic || images.logo}
           alt="User avatar"
           className="w-full h-full object-cover rounded-full"
/>
          </div>
        </div>
      </div>

      {/* Slide-in SideMenu */}
      <div className="relative z-50">
        {/* Overlay for closing on outside click */}
        {openSideMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeSideMenu}
          />
        )}

        {/* Actual side menu */}
        <div
          className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${
            openSideMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{
            width: '250px',
            backgroundColor: colors.myblack,
            boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default NavDash;

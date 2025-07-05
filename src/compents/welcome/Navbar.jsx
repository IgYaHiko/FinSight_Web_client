import React, { useState, useRef, useEffect } from 'react';
import { images } from '../../constant/images';
import { colors } from '../../constant/color';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = ({ title, styless, darkMode }) => {
  const [activeButton, setActiveButton] = useState('login');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const navItems = [
    { label: 'Overview' },
    { label: 'Feature' },
    { label: 'About' },
    { label: 'Contact' },
  ];

  const buttonStyle = (type) => ({
    backgroundColor: activeButton === type ? colors.primary : 'transparent',
    color: activeButton === type ? 'white' : colors.white,
    borderRadius: '100px',
    border: activeButton === type ? '' : '1px solid white',
    fontFamily: 'monospace',
    fontWeight: 500,
    padding: '7px 20px',
    cursor: 'pointer',
    transition: '0.2s ease',
  });

  const handleLogin = () => {
    setActiveButton('login');
    navigate('/signin');
  };

  const handleSignUp = () => {
    setActiveButton('signup');
    navigate('/signup');
  };

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  return (
    <section className="py-4 sticky top-0 z-50">
      <div className="container px-2 md:px-20 lg:px-44 mx-auto">
        <div className="flex items-center justify-between border border-white/15 rounded-full bg-neutral-950/10 backdrop-blur-md px-4 md:px-10">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="w-[70px]">
              <img
                src={images.logo}
                alt="Logo"
                className="w-auto object-contain"
              />
            </div>
            <h1
              className="text-2xl text-white font-bold"
              style={{ fontFamily: 'Poppins' }}
            >
              FinSight
            </h1>
          </div>

          {/* Center Nav (desktop) */}
          <div className="hidden xl:flex xl:text-xs gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white text-xs hover:text-blue-400 transition"
                style={{ fontFamily: 'monospace' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Mobile Menu Button */}
            <div onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-3">
              {isOpen ? (
                <RxCross2 color="white" size={20} />
              ) : (
                <FiMenu color="white" size={20} />
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex text-xs items-center gap-4 text-white">
              <button style={buttonStyle('login')} onClick={handleLogin}>
                SignIn
              </button>
              <button
                style={buttonStyle('signup')}
                onClick={handleSignUp}
                className="text-white"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
       {isOpen && (
  <div className="fixed inset-0 z-50 backdrop-blur-md bg-neutral-900/70 flex flex-col items-center justify-center gap-8">
    
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-6 right-6 text-white text-2xl hover:text-red-400 transition"
      aria-label="Close Menu"
    >
      <RxCross2 size={24} />
    </button>

    <div ref={menuRef} className="flex flex-col items-center gap-6">
      {navItems.map((data, i) => (
        <a
          key={i}
          href="#"
          style={{ fontFamily: 'monospace' }}
          className="text-white capitalize text-4xl z-50"
        >
          {data.label}
        </a>
      ))}

      <div className="flex flex-col text-lg items-center gap-4 text-white">
        <button style={buttonStyle('login')} onClick={handleLogin}>
          SignIn
        </button>
        <button
          style={buttonStyle('signup')}
          onClick={handleSignUp}
          className="text-white"
        >
          SignUp
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default Navbar;

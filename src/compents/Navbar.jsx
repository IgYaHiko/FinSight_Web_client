import React, { useState } from 'react';
import { images } from '../constant/images';
import { colors } from '../constant/color';
import { FiMenu } from 'react-icons/fi'; // Install react-icons if not installed
import { useNavigate } from 'react-router-dom';

const Navbar = ({ title, styless,darkMode }) => {
  const [activeButton, setActiveButton] = useState('login');
  const navigate = useNavigate();
  const buttonStyle = (type) => ({
    backgroundColor: activeButton === type ? colors.primary : 'transparent',
    color: activeButton === type ? 'white' : colors.white && darkMode ? 'white' : "black",
    borderRadius: '9999px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    padding: '8px 28px',
    cursor: 'pointer',
    transition: '0.2s ease',
  });
  const handleLogin = () => {
       setActiveButton('login');
       navigate("/signin")
  }
  const handelSingUp = () => {
     setActiveButton('signup');
     navigate("/signup")
  }
  return (
   
    <div
      style={{ border: darkMode ? `1px solid ${colors.white}` : `1px solid ${colors.myblack}`, borderRadius: 38 }}
      className={`flex text-white items-center justify-between px-3 py-4 md:py-0 ${
        styless || ''
      } md:border md:rounded-[38px] border-none`}
    >
      {/* Logo + Title */}
      <div className="flex items-center">
        <div className="w-[60px] h-[80px]">
          <img
            src={images.logo}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <h1
          className="text-3xl font-bold font-poppins"
          style={{ fontFamily: 'poppins',color: darkMode ? "white":"black" }}
        >
          {title}
        </h1>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-5">
        <button
          style={buttonStyle('login')}
          onClick={handleLogin}
        >
          Log in
        </button>
        <button
          style={buttonStyle('signup')}
          onClick={handelSingUp}
          
        >
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <FiMenu size={28} color={colors.black} />
      </div>
    </div>
   
  );
};

export default Navbar;

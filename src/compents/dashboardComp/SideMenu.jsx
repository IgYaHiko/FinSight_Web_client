import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SIDE_BAR_DATA } from '../../utils/sidebarData';
import { UserContext } from '../../context/useContext';
import { images } from '../../constant/images';
import { HiOutlineX, HiOutlineMenuAlt1 } from "react-icons/hi";

const SideMenu = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearUserData } = useContext(UserContext);

  const handleItemClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUserData();
    navigate("/signin");
  };

  return (
    <div className="h-full flex flex-col rounded-tr-2xl rounded-br-2xl text-white p-4 relative bg-[#111111]">
      {/* Toggle Button */}
      <div className='flex items-center'>
        {isOpen && (
          <div className='flex items-center'>
            <img src={images.logo} className='w-10 h-10' alt="" />
            <h1 className='text-white text-md' style={{ fontFamily: "poppins", fontWeight: 700 }}>FinSight</h1>
          </div>
        )}
        <div>
          <button
            onClick={toggle}
            className="text-white absolute top-4 right-5 focus:outline-none"
          >
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt1 size={30} />}
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className={`mt-22 ${isOpen ? "space-y-10" : "space-y-10"}`}>
        {SIDE_BAR_DATA.map((data, idx) => {
          const isActive = location.pathname === data.path;
          return (
            <div
              key={idx}
              onClick={() => handleItemClick(data.path)}
              className={`flex items-center ${isOpen ? "justify-start" : "justify-center"} py-2 px-4 gap-3 justify-center rounded-md cursor-pointer transition-colors ${
                isActive ? 'bg-[#0065F8]' : 'hover:bg-[#1c1c1c]'
              }`}
            >
              <div className="text-lg">{data.icon}</div>
              {isOpen && (
                <h1 className="text-base" style={{ fontFamily: 'futura', fontWeight: 500 }}>
                  {data.label}
                </h1>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;

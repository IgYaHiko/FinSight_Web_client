import React, { useState } from 'react';
import Navbar from '../../compents/Navbar';
import Hero from '../../compents/Hero';
import { FiSun, FiMoon } from 'react-icons/fi';

const Welcome = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-[#131313]  text-[#FAF1E6]' : 'bg-[#FAF1E6] text-black'} px-3 py-3 h-[100vh] transition-all overflow-hidden duration-300`}>
      {/* Toggle Button */}
      <div className="flex absolute right-10 top-28 justify-end pr-4">
        <button
          onClick={() => setDarkMode(prev => !prev)}
          className="p-2 rounded-full border mb-2"
          style={{ borderColor: darkMode ? '#555' : '#ccc' }}
        >
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>

      <Navbar title={"FinSight"} darkMode={darkMode} />
      <Hero darkMode={darkMode} />
    </div>
  );
};

export default Welcome;

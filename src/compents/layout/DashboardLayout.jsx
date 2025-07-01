import React, { useState } from 'react';
import NavDash from '../dashboardComp/NavDash';
import SideMenu from '../dashboardComp/SideMenu';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } h-full`}
        style={{ backgroundColor: '#111111' }}
      >
        <SideMenu isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 h-full">
        {/* Navbar */}
        <NavDash />

        {/* Scrollable Content with hidden scrollbar */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#1a1a1a] hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

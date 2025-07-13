import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';
import BottomTabbar from './BottomTabbar';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <TopNavbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <BottomTabbar />
    </div>
  );
};

export default DashboardLayout;

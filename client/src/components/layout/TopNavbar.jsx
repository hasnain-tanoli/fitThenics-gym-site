import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-secondary shadow-lg p-4 flex justify-between items-center text-foreground">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="md:hidden mr-4 text-secondary-foreground hover:text-foreground transition-colors duration-200">
          <Menu size={28} />
        </button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-foreground" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-border rounded-full bg-background text-foreground placeholder-secondary-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all duration-200"
          />
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <Bell className="text-secondary-foreground cursor-pointer hover:text-foreground transition-colors duration-200" size={24} />
        <User className="text-secondary-foreground cursor-pointer hover:text-foreground transition-colors duration-200" size={24} />
      </div>
    </header>
  );
};

export default TopNavbar;

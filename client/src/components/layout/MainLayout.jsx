import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AICoachChatbot from '../ui/AICoachChatbot';
import WhatsAppFloat from '../ui/WhatsAppFloat';

const MainLayout = () => {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AICoachChatbot />
      <WhatsAppFloat />
    </div>
  );
};

export default MainLayout;

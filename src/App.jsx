import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container bg-primary text-white min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
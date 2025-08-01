import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Components } from './components';

const { 
  Header, 
  HeroSection, 
  ServicesSection, 
  AboutSection, 
  StatsSection, 
  PartnersSection, 
  CTASection, 
  Footer 
} = Components;

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
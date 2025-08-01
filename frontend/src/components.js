import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Header Component
const Header = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="font-bold text-black text-lg">CS</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            CODE_SEC
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#solutions" className="text-gray-300 hover:text-blue-400 transition-colors">
            Solutions
          </Link>
          <Link to="#vision" className="text-gray-300 hover:text-blue-400 transition-colors">
            Vision
          </Link>
          <Link to="#programs" className="text-gray-300 hover:text-blue-400 transition-colors">
            Programs
          </Link>
          <Link to="#blog" className="text-gray-300 hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <Link to="#login" className="text-gray-300 hover:text-blue-400 transition-colors">
            Log In
          </Link>
          <Link 
            to="#get-started" 
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
            <span className="block h-0.5 w-full bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <nav className="px-6 py-4 space-y-4">
            <Link to="#solutions" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Solutions
            </Link>
            <Link to="#vision" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Vision
            </Link>
            <Link to="#programs" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Programs
            </Link>
            <Link to="#blog" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link to="#login" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Log In
            </Link>
            <Link 
              to="#get-started" 
              className="block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1660644808219-1f103401bc85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        {/* Animated particles/dots overlay with floating animation */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span 
            className={`block text-gray-200 mb-2 transition-all duration-1200 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            The New Standard
          </span>
          <span 
            className={`block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent transition-all duration-1200 transform ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            in Cyber Security
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 transform ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Protect Your Applications with Advanced Security Solutions
        </p>

        <button 
          className={`bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl btn-primary ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  
  const services = [
    {
      title: "Application Security Testing",
      description: "Comprehensive security assessment of your applications to identify vulnerabilities and security flaws before they can be exploited by attackers.",
      icon: "🛡️"
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks on your systems to identify security weaknesses and provide actionable recommendations for improvement.",
      icon: "🔍"
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic evaluation of your infrastructure to discover, classify, and prioritize security vulnerabilities across your environment.",
      icon: "⚡"
    },
    {
      title: "Security Code Review",
      description: "Expert analysis of your source code to identify security issues, coding flaws, and potential attack vectors in your applications.",
      icon: "💻"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header with animations */}
        <div className="text-center mb-16">
          <div className="mb-6 transform transition-all duration-1000 hover:scale-110">
            <img 
              src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85" 
              alt="Security Solutions" 
              className="w-20 h-20 mx-auto rounded-lg object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 animate-pulse"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in-up">
            Let Your Security Take Your Business to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
              Higher Grounds
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Our comprehensive cybersecurity solutions protect your applications and infrastructure 
            with cutting-edge technology and expert analysis.
          </p>
        </div>

        {/* Services Grid with staggered animations */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-index={index}
              className={`service-card group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl card-hover ${
                visibleCards.includes(index) ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-2">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with hover and scroll animations */}
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
          }`}>
            <div className="relative overflow-hidden rounded-xl shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85" 
                alt="Code Security" 
                className="w-full transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating code lines animation */}
              <div className="absolute top-4 left-4 text-green-400 text-xs font-mono opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-pulse">
                {'> securing_applications();'}
              </div>
              <div className="absolute bottom-4 right-4 text-blue-400 text-xs font-mono opacity-0 group-hover:opacity-80 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '300ms' }}>
                {'✓ vulnerability_scan_complete'}
              </div>
            </div>
          </div>

          {/* Content with typewriter effect */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
          }`} style={{ transitionDelay: '300ms' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="inline-block animate-fade-in-up">Unprecedented Security.</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Impeccable Reliability.
              </span>
            </h2>
            
            <p className={`text-gray-400 text-lg mb-6 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              At CODE_SEC, we specialize in comprehensive cybersecurity solutions that protect your 
              digital assets from evolving threats. Our team of expert security professionals combines 
              cutting-edge technology with proven methodologies to deliver unparalleled protection.
            </p>
            
            <p className={`text-gray-400 text-lg mb-8 leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '700ms' }}>
              From application security testing to advanced penetration testing, we provide the 
              strategic advantage your business needs to stay ahead of cyber threats. Our solutions 
              are designed to integrate seamlessly with your existing infrastructure while providing 
              maximum security coverage.
            </p>

            <button className={`bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl btn-primary ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '900ms' }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0, 0]);
  
  const stats = [
    { number: 8, label: "Years of Experience" },
    { number: 500, label: "Security Assessments" },
    { number: 50, label: "Million Vulnerabilities Found" },
    { number: 15, label: "Countries Worldwide" },
    { number: 12, label: "Industry Awards" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const increment = end / 60;
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = end;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(start);
                  return newCounters;
                });
              }
            }, 50);
          });
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className={`mb-6 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'
          }`}>
            <img 
              src="https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg" 
              alt="Our Achievements" 
              className="w-20 h-20 mx-auto rounded-lg object-cover hover:opacity-100 transition-all duration-500 animate-pulse hover:animate-glow"
            />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            We Take Pride in Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
              Numbers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-cyan-300 transition-all duration-300 transform group-hover:scale-110 animate-bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
                {index < 2 ? counters[index] : `${counters[index]}${index === 2 ? 'M+' : index === 4 ? '' : '+'}`}
                {index === 1 && '+'}
                {index === 3 && ''}
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partners Section Component
const PartnersSection = () => {
  const partners = [
    { name: "Microsoft", logo: "MS" },
    { name: "Amazon", logo: "AWS" },
    { name: "Google", logo: "GCP" },
    { name: "IBM", logo: "IBM" },
    { name: "Oracle", logo: "ORC" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                <span className="font-bold text-black text-sm">{partner.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Are You Ready to{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Secure Your Business?
          </span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards comprehensive cybersecurity. Our experts are ready to 
          assess your security posture and provide tailored solutions.
        </p>

        <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="font-bold text-black text-lg">CS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                CODE_SEC
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading cybersecurity solutions provider, protecting businesses worldwide with 
              advanced application security and penetration testing services.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Application Security</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Penetration Testing</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Vulnerability Assessment</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Code Review</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CODE_SEC. All rights reserved. Securing your digital future.</p>
        </div>
      </div>
    </footer>
  );
};

export const Components = {
  Header,
  HeroSection,
  ServicesSection,
  AboutSection,
  StatsSection,
  PartnersSection,
  CTASection,
  Footer
};
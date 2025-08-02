import React, { useState, useEffect } from 'react';
import { Components } from '../components';

const { 
  Header, 
  Footer, 
  ThreeDBackground, 
  AdvancedCursor, 
  MatrixRain, 
  ScrollProgress, 
  EnhancedParticles, 
  GlitchText 
} = Components;

const SolutionsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Application Security Testing",
      description: "Comprehensive security assessment of web and mobile applications using automated and manual testing techniques.",
      features: ["OWASP Top 10 Testing", "API Security Analysis", "Mobile App Security", "Code Review"],
      icon: "🛡️",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500"
    },
    {
      title: "Penetration Testing",
      description: "Simulate real-world attacks to identify vulnerabilities in your infrastructure and applications.",
      features: ["Network Penetration", "Web App Testing", "Social Engineering", "Red Team Exercises"],
      icon: "🎯",
      color: "from-red-500 to-pink-500",
      price: "Starting at $5,000"
    },
    {
      title: "Vulnerability Assessment",
      description: "Systematic evaluation of your systems to discover and prioritize security vulnerabilities.",
      features: ["Infrastructure Scanning", "Configuration Review", "Compliance Auditing", "Risk Assessment"],
      icon: "🔍",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $1,500"
    },
    {
      title: "Security Code Review",
      description: "Expert manual analysis of source code to identify security flaws and coding vulnerabilities.",
      features: ["Static Code Analysis", "Security Architecture Review", "Secure Development", "DevSecOps Integration"],
      icon: "💻",
      color: "from-green-500 to-teal-500",
      price: "Starting at $3,000"
    },
    {
      title: "Incident Response",
      description: "24/7 emergency response service for security breaches and cyber attacks.",
      features: ["Breach Investigation", "Forensic Analysis", "Threat Containment", "Recovery Planning"],
      icon: "🚨",
      color: "from-orange-500 to-red-500",
      price: "Contact for pricing"
    },
    {
      title: "Security Training",
      description: "Comprehensive cybersecurity training programs for your development and IT teams.",
      features: ["Secure Coding Training", "Security Awareness", "Phishing Simulations", "Custom Workshops"],
      icon: "🎓",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $500/person"
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

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header isScrolled={isScrolled} />
      <ScrollProgress />
      <AdvancedCursor />
      <MatrixRain />
      <EnhancedParticles />
      <ThreeDBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-3xl">🔐</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>Security Solutions</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>That Protect</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Comprehensive cybersecurity services designed to protect your business from evolving threats
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Solutions</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Choose from our comprehensive range of cybersecurity services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                data-index={index}
                className={`solution-card group glass-morphism rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover-lift ${
                  visibleCards.includes(index) ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 p-3 rounded-full bg-gradient-to-r ${solution.color} w-fit mx-auto group-hover:animate-pulse-ring`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                  <GlitchText>{solution.title}</GlitchText>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-400">{solution.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-cyan-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Secure Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free security consultation and discover how our solutions can protect your organization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
              Get Free Consultation
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
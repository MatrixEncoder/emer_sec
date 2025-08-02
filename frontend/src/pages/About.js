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

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      expertise: "Penetration Testing & Threat Intelligence",
      image: "https://images.unsplash.com/photo-1494790108755-2616b04e1b94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8YmxhY2t8MTc1NDA1NzUwNXww&ixlib=rb-4.1.0&q=85",
      description: "15+ years in cybersecurity with expertise in advanced persistent threats and zero-day exploits."
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Security Architect",
      expertise: "Enterprise Security & Cloud Protection",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fGJsYWNrfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Former CISO with deep expertise in securing large-scale enterprise environments and cloud infrastructures."
    },
    {
      name: "Elena Volkov",
      role: "Senior Researcher",
      expertise: "AI Security & Malware Analysis",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8YmxhY2t8MTc1NDA1NzUwNXww&ixlib=rb-4.1.0&q=85",
      description: "PhD in Computer Science specializing in AI-powered threat detection and advanced malware reverse engineering."
    },
    {
      name: "James Mitchell",
      role: "DevSecOps Director",
      expertise: "Secure Development & Automation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fGJsYWNrfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85",
      description: "Pioneering DevSecOps integration with 12+ years of experience in secure software development lifecycles."
    }
  ];

  const stats = [
    { number: "500+", label: "Security Assessments Completed" },
    { number: "50M+", label: "Vulnerabilities Discovered" },
    { number: "99.9%", label: "Client Satisfaction Rate" },
    { number: "24/7", label: "Incident Response Time" }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Security First",
      description: "Every decision we make prioritizes the security and protection of our clients' digital assets."
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "We provide clear, honest reporting and maintain open communication throughout every engagement."
    },
    {
      icon: "⚡",
      title: "Innovation",
      description: "Continuously evolving our methods and tools to stay ahead of emerging cyber threats."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "Building long-term relationships with clients as trusted cybersecurity advisors and partners."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.about-section');
    sections.forEach(section => observer.observe(section));

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
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-4xl">🏛️</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>About SHASTRA</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>Uncover. Analyze. Secure.</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Leading cybersecurity experts dedicated to protecting your digital future through innovative security solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-section" data-index="0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
                  <GlitchText>Story</GlitchText>
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Founded in 2019, SHASTRA emerged from a simple yet powerful vision: to create a world where businesses can innovate without fear of cyber threats. Our name, derived from the Sanskrit word meaning "knowledge" or "treatise," reflects our commitment to deep expertise and methodical approach to cybersecurity.
              </p>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                What started as a small team of passionate security researchers has grown into a globally recognized cybersecurity firm, trusted by Fortune 500 companies and emerging startups alike. We've uncovered critical vulnerabilities, prevented major breaches, and helped organizations build resilient security postures.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, SHASTRA stands at the forefront of cybersecurity innovation, combining traditional security wisdom with cutting-edge technology to deliver unparalleled protection for our clients.
              </p>
            </div>
            
            <div className="relative about-section" data-index="1">
              <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw2fHx0ZWFtJTIwd29ya2luZ3xlbnwwfHx8YmxhY2t8MTc1NDA1NzUwNXww&ixlib=rb-4.1.0&q=85" 
                  alt="SHASTRA Team" 
                  className="w-full transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Impact</GlitchText>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group about-section" data-index={index + 2}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-black/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Experts</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our team of world-class cybersecurity professionals brings decades of combined experience in protecting organizations from cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group about-section" data-index={index + 6}>
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-orange-500/30 group-hover:border-orange-400/60 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  <GlitchText>{member.name}</GlitchText>
                </h3>
                <p className="text-orange-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Values</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do at SHASTRA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group about-section" data-index={index + 10}>
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  <GlitchText>{value.title}</GlitchText>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-900/95 via-red-800/95 to-yellow-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              With Us?
            </span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust SHASTRA to protect their most valuable digital assets
          </p>

          <button className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
            Get In Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
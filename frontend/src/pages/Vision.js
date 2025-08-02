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

const VisionPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visionPoints = [
    {
      title: "Zero-Trust Architecture",
      description: "We envision a world where every connection, device, and user is verified before access is granted.",
      icon: "🔒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Defense",
      description: "Leveraging artificial intelligence to predict, detect, and neutralize threats before they impact your business.",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Proactive Security",
      description: "Moving beyond reactive measures to anticipate and prevent security incidents before they occur.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Seamless Integration",
      description: "Security solutions that integrate seamlessly into your workflow without disrupting productivity.",
      icon: "🔗",
      color: "from-green-500 to-teal-500"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Advanced Threat Detection",
      description: "Deploy next-generation AI systems for real-time threat analysis and response"
    },
    {
      year: "2026",
      title: "Quantum-Safe Encryption",
      description: "Implement quantum-resistant cryptographic protocols across all platforms"
    },
    {
      year: "2027",
      title: "Autonomous Security",
      description: "Fully autonomous security systems that adapt and evolve with emerging threats"
    },
    {
      year: "2028",
      title: "Global Security Network",
      description: "Establish worldwide collaborative threat intelligence and response network"
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

    const sections = document.querySelectorAll('.vision-section');
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-4xl">🔮</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>Our Vision</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>Future Secure</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Pioneering the future of cybersecurity through innovation, intelligence, and unwavering protection
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Our Mission</GlitchText>
              </span>
            </h2>
            <div className="glass-morphism rounded-2xl p-12 border border-blue-500/30">
              <p className="text-2xl text-gray-200 leading-relaxed mb-6">
                "To create a world where digital innovation thrives without compromise, where businesses can operate with complete confidence in their security posture, and where cyber threats are neutralized before they can cause harm."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-blue-400 font-semibold">CODE_SEC Leadership</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              The Future We're{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Building</GlitchText>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                data-index={index}
                className={`vision-section group glass-morphism rounded-xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  visibleSections.includes(index) ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className={`text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-125 p-4 rounded-full bg-gradient-to-r ${point.color} w-fit group-hover:animate-pulse-ring`}>
                  {point.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                  <GlitchText>{point.title}</GlitchText>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {point.description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Timeline */}
      <section className="py-20 px-6 bg-black/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Roadmap</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Key milestones in our journey to revolutionize cybersecurity
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass-morphism rounded-xl p-6 border border-blue-500/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      <GlitchText>{item.title}</GlitchText>
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/95 via-blue-800/95 to-cyan-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Shaping Tomorrow
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the cybersecurity revolution. Together, we can build a more secure digital future.
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
            Partner With Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionPage;
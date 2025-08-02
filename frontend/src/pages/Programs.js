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

const ProgramsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      category: "Training Programs",
      items: [
        {
          title: "Secure Development Bootcamp",
          duration: "4 Weeks",
          level: "Intermediate",
          description: "Comprehensive training on secure coding practices, OWASP guidelines, and defensive programming techniques.",
          features: ["Hands-on Labs", "Real-world Projects", "Certificate", "24/7 Support"],
          price: "$1,299",
          icon: "👨‍💻",
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Cybersecurity Awareness",
          duration: "2 Weeks",
          level: "Beginner",
          description: "Essential cybersecurity awareness training for all employees to recognize and prevent common threats.",
          features: ["Interactive Modules", "Phishing Simulations", "Progress Tracking", "Team Reports"],
          price: "$299",
          icon: "🎯",
          color: "from-green-500 to-teal-500"
        },
        {
          title: "Incident Response Training",
          duration: "3 Weeks",
          level: "Advanced",
          description: "Advanced training for security teams on incident detection, response, and recovery procedures.",
          features: ["Simulation Exercises", "Playbook Development", "Team Certification", "Expert Mentoring"],
          price: "$2,499",
          icon: "🚨",
          color: "from-red-500 to-pink-500"
        }
      ]
    },
    {
      category: "Certification Programs",
      items: [
        {
          title: "Certified Security Professional",
          duration: "8 Weeks",
          level: "Professional",
          description: "Industry-recognized certification program covering all aspects of enterprise cybersecurity.",
          features: ["Comprehensive Curriculum", "Practical Assessments", "Industry Recognition", "Career Support"],
          price: "$3,999",
          icon: "🏆",
          color: "from-purple-500 to-violet-500"
        },
        {
          title: "Ethical Hacker Certification",
          duration: "6 Weeks",
          level: "Advanced",
          description: "Learn ethical hacking techniques and penetration testing methodologies from industry experts.",
          features: ["Virtual Lab Access", "Capture The Flag", "Certification Exam", "Job Placement"],
          price: "$2,799",
          icon: "🔓",
          color: "from-orange-500 to-red-500"
        },
        {
          title: "Security Architect Certification",
          duration: "10 Weeks",
          level: "Expert",
          description: "Master-level program for designing and implementing enterprise security architectures.",
          features: ["Case Studies", "Architecture Reviews", "Mentorship", "Executive Briefings"],
          price: "$4,999",
          icon: "🏗️",
          color: "from-indigo-500 to-purple-500"
        }
      ]
    },
    {
      category: "Corporate Programs",
      items: [
        {
          title: "Enterprise Security Assessment",
          duration: "Custom",
          level: "Organization",
          description: "Comprehensive security evaluation and improvement program tailored for large enterprises.",
          features: ["Security Audit", "Risk Assessment", "Compliance Review", "Implementation Plan"],
          price: "Contact Us",
          icon: "🏢",
          color: "from-gray-500 to-slate-500"
        },
        {
          title: "DevSecOps Integration",
          duration: "12 Weeks",
          level: "Team",
          description: "Transform your development pipeline with integrated security practices and automation.",
          features: ["Pipeline Security", "Tool Integration", "Team Training", "Ongoing Support"],
          price: "$9,999",
          icon: "⚙️",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Security Culture Program",
          duration: "6 Months",
          level: "Organization",
          description: "Build a security-first culture across your organization with continuous education and engagement.",
          features: ["Culture Assessment", "Custom Content", "Engagement Campaigns", "Progress Metrics"],
          price: "$15,000",
          icon: "🌟",
          color: "from-yellow-500 to-orange-500"
        }
      ]
    }
  ];

  const tabs = ["All Programs", "Training", "Certification", "Corporate"];

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

    const cards = document.querySelectorAll('.program-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [activeTab]);

  const getFilteredPrograms = () => {
    if (activeTab === 0) return programs.flatMap(category => category.items);
    return programs[activeTab - 1]?.items || [];
  };

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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-3xl">🎓</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>Training Programs</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-teal-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>Build Expertise</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Advance your cybersecurity skills with our comprehensive training and certification programs
          </p>
        </div>
      </section>

      {/* Program Categories Tabs */}
      <section className="py-12 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-green-600 to-teal-500 text-white shadow-lg'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-8 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredPrograms().map((program, index) => (
              <div 
                key={`${activeTab}-${index}`}
                data-index={index}
                className={`program-card group glass-morphism rounded-xl p-8 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover-lift ${
                  visibleCards.includes(index) ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 p-3 rounded-full bg-gradient-to-r ${program.color} w-fit mx-auto group-hover:animate-pulse-ring`}>
                  {program.icon}
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${program.color} text-white`}>
                    {program.level}
                  </span>
                  <span className="text-sm text-gray-400">{program.duration}</span>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-300 group-hover:bg-clip-text transition-all duration-300">
                  <GlitchText>{program.title}</GlitchText>
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-300 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-400">{program.price}</span>
                    <button className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-black/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Programs?</GlitchText>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "👨‍🏫", title: "Expert Instructors", desc: "Learn from industry professionals with real-world experience" },
              { icon: "🛠️", title: "Hands-on Learning", desc: "Practice with real tools and scenarios used in the field" },
              { icon: "📜", title: "Industry Recognition", desc: "Certificates recognized by leading cybersecurity organizations" },
              { icon: "🚀", title: "Career Support", desc: "Job placement assistance and career guidance included" }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-900/95 via-teal-800/95 to-blue-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Cybersecurity Journey
            </span>
          </h2>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our training programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
              Browse All Programs
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
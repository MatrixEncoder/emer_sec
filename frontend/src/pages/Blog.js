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

const BlogPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "The Rise of AI-Powered Cyber Attacks in 2025",
      excerpt: "Exploring how artificial intelligence is being weaponized by cybercriminals and how organizations can defend against these sophisticated threats.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Threat Intelligence",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhaSUyMGN5YmVyc2VjdXJpdHl8ZW58MHx8fGJsYWNrfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Zero Trust Architecture: Implementation Guide",
      excerpt: "A comprehensive guide to implementing zero trust security models in enterprise environments, with real-world case studies and best practices.",
      author: "Marcus Rodriguez",
      date: "January 12, 2025",
      readTime: "12 min read",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx6ZXJvJTIwdHJ1c3R8ZW58MHx8fGJsYWNrfDE3NTQwNTc1MDV8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Securing Cloud-Native Applications",
      excerpt: "Best practices for securing containerized applications, Kubernetes clusters, and cloud infrastructure in modern DevOps environments.",
      author: "Elena Volkov",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlY3VyaXR5fGVufDB8fHxibGFja3wxNzU0MDU3NTA1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "The Psychology of Social Engineering",
      excerpt: "Understanding the human element in cybersecurity breaches and how to build effective security awareness programs.",
      author: "James Mitchell",
      date: "January 8, 2025",
      readTime: "6 min read",
      category: "Security Awareness",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBlbmdpbmVlcmluZ3xlbnwwfHx8YmxhY2t8MTc1NDA1NzUwNXww&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Quantum Computing and Cryptography",
      excerpt: "Preparing for the quantum computing revolution and its impact on current cryptographic standards and security protocols.",
      author: "Dr. Sarah Chen",
      date: "January 5, 2025",
      readTime: "15 min read",
      category: "Cryptography",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nfGVufDB8fHxibGFja3wxNzU0MDU3NTA1fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "API Security: Common Vulnerabilities and Fixes",
      excerpt: "A deep dive into API security vulnerabilities, including OWASP API Security Top 10 and practical remediation strategies.",
      author: "Marcus Rodriguez",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Application Security",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhcGklMjBzZWN1cml0eXxlbnwwfHx8YmxhY2t8MTc1NDA1NzUwNXww&ixlib=rb-4.1.0&q=85"
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

    const cards = document.querySelectorAll('.blog-card');
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-3xl">📰</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>Security Blog</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>Stay Informed</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Expert insights, threat intelligence, and cybersecurity best practices from the SHASTRA team
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Latest{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Articles</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Stay ahead of cyber threats with our expert analysis and industry insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                data-index={index}
                className={`blog-card group glass-morphism rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover-lift ${
                  visibleCards.includes(index) ? 'animate-slide-in-bottom opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-300">
                    <GlitchText>{post.title}</GlitchText>
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-purple-400 hover:text-pink-300 font-medium text-sm transition-colors duration-300 group-hover:translate-x-2 transform">
                    Read More 
                    <svg className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-morphism rounded-2xl p-8 border border-purple-500/30 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">📬</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  <GlitchText>Updated</GlitchText>
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest cybersecurity insights, threat alerts, and security best practices delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/95 via-pink-800/95 to-blue-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Expert{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Security Advice?
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Our cybersecurity experts are ready to help you assess and improve your organization's security posture
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
            Get Security Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
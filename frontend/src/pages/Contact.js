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

const ContactPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      details: "security@shastra.com",
      description: "Get in touch for general inquiries"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-SECURE",
      description: "Speak directly with our security experts"
    },
    {
      icon: "🚨",
      title: "Emergency Hotline",
      details: "+1 (555) 911-HACK",
      description: "24/7 incident response support"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Cyber Street, Security City, SC 12345",
      description: "Our headquarters and main office"
    }
  ];

  const services = [
    "Application Security Testing",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Security Code Review",
    "Incident Response",
    "Security Training",
    "Compliance Audit",
    "Other"
  ];

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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-400 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-green-600 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-3xl">📞</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-gray-100 mb-2 drop-shadow-2xl">
              <GlitchText>Contact Us</GlitchText>
            </span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              <GlitchText>Get Secure Today</GlitchText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Ready to enhance your cybersecurity posture? Let's discuss how SHASTRA can protect your business
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get in{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Touch</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Multiple ways to reach our cybersecurity experts - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group glass-morphism rounded-xl p-8 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105">
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  <GlitchText>{info.title}</GlitchText>
                </h3>
                <p className="text-green-400 font-medium mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Send Us a{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Message</GlitchText>
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and our security experts will get back to you within 24 hours
            </p>
          </div>

          <div className="glass-morphism rounded-2xl p-8 border border-green-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-vertical"
                  placeholder="Tell us about your security needs, current challenges, or any specific requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-black/95 backdrop-blur-md relative z-40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                <GlitchText>Questions</GlitchText>
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you respond to a security incident?",
                answer: "Our emergency response team is available 24/7 and can begin incident response within 2 hours of initial contact. For critical breaches, we can have experts on-site or connected remotely within 4 hours."
              },
              {
                question: "What types of security assessments do you offer?",
                answer: "We provide comprehensive security services including penetration testing, vulnerability assessments, application security testing, code reviews, compliance audits, and ongoing security monitoring."
              },
              {
                question: "Do you work with small businesses or only large enterprises?",
                answer: "We work with organizations of all sizes, from startups to Fortune 500 companies. Our service offerings are scalable and can be tailored to meet your specific needs and budget."
              },
              {
                question: "How long does a typical security assessment take?",
                answer: "Timeline varies based on scope and complexity. A basic vulnerability assessment typically takes 1-2 weeks, while comprehensive penetration testing can take 2-4 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing security support after the assessment?",
                answer: "Yes, we offer ongoing security support including managed security services, regular re-assessments, security awareness training, and incident response retainer services to ensure continuous protection."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-morphism rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">
                  <GlitchText>{faq.question}</GlitchText>
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-900/95 via-orange-800/95 to-yellow-800/95 backdrop-blur-md relative overflow-hidden z-50">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚨</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              Emergency?
            </span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            If you're experiencing an active security incident or breach, contact our emergency response team immediately
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl animate-pulse">
              Call Emergency Hotline
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              Email Incident Response
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
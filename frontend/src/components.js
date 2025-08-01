import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

// Advanced Cursor Effect Component
const AdvancedCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = [];

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Add trail effect
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        if (trail.length > 10) trail.shift();
      }
    };

    const animateTrail = () => {
      const now = Date.now();
      trail.forEach((point, index) => {
        const age = now - point.time;
        if (age < 500) {
          const trailElement = document.getElementById(`trail-${index}`);
          if (trailElement) {
            trailElement.style.left = point.x + 'px';
            trailElement.style.top = point.y + 'px';
            trailElement.style.opacity = Math.max(0, 1 - age / 500);
          }
        }
      });
      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', moveCursor);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-80"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          id={`trail-${i}`}
          className="fixed w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[9998] opacity-0"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      ))}
    </>
  );
};

// Matrix Rain Effect Component
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F4';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// Enhanced Particle System
const EnhancedParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `hsl(${200 + Math.random() * 60}, 70%, 60%)`;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[2] pointer-events-none"
    />
  );
};

// Glitch Text Effect Component
const GlitchText = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative ${className}`}>
      <span className={`${isGlitching ? 'animate-glitch' : ''}`}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch-1">
            {children}
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch-2">
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// 3D Background Component
const ThreeDBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const meshesRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create cybersecurity-themed 3D objects
    const meshes = [];

    // Main rotating cube with wireframe
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6, 
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-3, 0, -5);
    scene.add(cube);
    meshes.push({ mesh: cube, type: 'cube' });

    // Floating geometric shapes
    for (let i = 0; i < 12; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.TetrahedronGeometry(0.5, 0)
        : new THREE.OctahedronGeometry(0.5, 0);
      
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5),
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20
      );
      
      scene.add(mesh);
      meshes.push({ 
        mesh, 
        type: 'float',
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      });
    }

    // Network connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x06b6d4, 
      transparent: true, 
      opacity: 0.3 
    });
    
    const linePoints = [];
    for (let i = 0; i < 20; i++) {
      linePoints.push(new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30
      ));
    }
    lineGeometry.setFromPoints(linePoints);
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
    meshes.push({ mesh: line, type: 'line' });

    // Particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 50;
      particlePositions[i + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i + 2] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.1,
      transparent: true,
      opacity: 0.6
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    meshes.push({ mesh: particles, type: 'particles' });

    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    meshesRef.current = meshes;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Get scroll position
      const scrollY = window.scrollY;
      const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight);

      // Animate based on scroll
      meshes.forEach((item, index) => {
        const { mesh, type, rotationSpeed } = item;
        
        switch (type) {
          case 'cube':
            mesh.rotation.x = scrollProgress * Math.PI * 4;
            mesh.rotation.y = scrollProgress * Math.PI * 6;
            mesh.position.y = Math.sin(scrollProgress * Math.PI * 8) * 2;
            break;
            
          case 'float':
            mesh.rotation.x += rotationSpeed.x;
            mesh.rotation.y += rotationSpeed.y;
            mesh.rotation.z += rotationSpeed.z;
            mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
            
            // Scroll-based movement
            mesh.rotation.x += scrollProgress * 0.1;
            mesh.rotation.y += scrollProgress * 0.15;
            break;
            
          case 'line':
            mesh.rotation.z = scrollProgress * Math.PI * 2;
            mesh.material.opacity = 0.3 + Math.sin(scrollProgress * Math.PI * 4) * 0.2;
            break;
            
          case 'particles':
            mesh.rotation.y = scrollProgress * Math.PI * 3;
            mesh.rotation.x = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
            break;
        }
      });

      // Camera movement based on scroll
      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 2;
      camera.position.y = Math.cos(scrollProgress * Math.PI * 1.5) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0" 
      style={{ 
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)'
      }}
    />
  );
};

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

// Hero Section Component with Enhanced Effects
const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Visual Effects */}
      <MatrixRain />
      <EnhancedParticles />
      <ScrollProgress />
      <AdvancedCursor />
      
      {/* 3D Animated Background */}
      <ThreeDBackground />
      
      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 z-10 animate-pulse"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 z-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-float"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Content with Enhanced Effects */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-spin-slow opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-3xl">🛡️</span>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span 
            className={`block text-gray-100 mb-2 transition-all duration-1200 transform drop-shadow-2xl ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <GlitchText>The New Standard</GlitchText>
          </span>
          <span 
            className={`block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent transition-all duration-1200 transform drop-shadow-2xl animate-gradient-x ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <GlitchText>in Cyber Security</GlitchText>
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-1000 transform drop-shadow-lg ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <GlitchText>Protect Your Applications with Advanced Security Solutions</GlitchText>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className={`group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl btn-3d shadow-2xl overflow-hidden ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button 
            className={`group relative bg-transparent border-2 border-blue-500 hover:border-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:bg-blue-500/10 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Watch Demo
            </span>
          </button>
        </div>
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
    <section className="py-20 px-6 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-md relative z-40">
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
              className={`service-card group bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl card-hover ${
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
    <section id="about-section" className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-40">
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
    <section id="stats-section" className="py-20 px-6 bg-black/95 backdrop-blur-md relative z-50">
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
    <section className="py-20 px-6 bg-gray-900/95 backdrop-blur-md relative z-50">
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
              className="flex items-center justify-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
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

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 px-6 bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-cyan-800/95 backdrop-blur-md relative overflow-hidden z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className={`mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-glow">
              <span className="text-4xl animate-bounce">🚀</span>
            </div>
          </div>
        </div>

        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Are You Ready to{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
            Secure Your Business?
          </span>
        </h2>
        
        <p className={`text-xl text-blue-100 mb-8 max-w-2xl mx-auto transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          Take the first step towards comprehensive cybersecurity. Our experts are ready to 
          assess your security posture and provide tailored solutions.
        </p>

        <button className={`bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl btn-primary animate-bounce-in ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-md py-16 px-6 border-t border-gray-800 relative z-50">
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
              <div className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
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
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 relative z-10">
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
  Footer,
  ThreeDBackground
};
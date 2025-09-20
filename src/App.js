import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Download, Code, Database, Server, Briefcase, GraduationCap, User, Menu, X } from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiMongodb, 
  SiFirebase, 
  SiExpress, 
  SiNextdotjs, 
  SiTypescript, 
  SiSocketdotio, 
  SiMysql, 
  SiVercel, 
  SiRazorpay, 
  SiShopify,
  SiGo,
  SiHuggingface,
  SiCplusplus, 
  SiJavascript, 
  SiPython, 
  SiJquery, 
  SiBootstrap, 
  SiDotnet, 
  SiMicrosoftazure,
  SiPowerbi, 
  SiTableau,
  SiWasmcloud, SiSqlite,
  SiDjango
} from 'react-icons/si';

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver(0.3);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);
      
      setCount(currentCount);
      
      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// Floating Animation Component
const FloatingElement = ({ children, delay = 0, duration = 6 }) => {
  return (
    <div 
      className="animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};

// Updated techIcons with enhanced styling
const techIcons = {
  'React.js': { icon: <FaReact className="w-5 h-5" />, color: 'text-blue-400', title: 'React.js' },
  'Node.js': { icon: <FaNodeJs className="w-5 h-5" />, color: 'text-green-500', title: 'Node.js' },
  'MongoDB': { icon: <SiMongodb className="w-5 h-5" />, color: 'text-green-400', title: 'MongoDB' },
  'Firebase': { icon: <SiFirebase className="w-5 h-5" />, color: 'text-yellow-500', title: 'Firebase' },
  'Express.js': { icon: <SiExpress className="w-5 h-5" />, color: 'text-gray-400', title: 'Express.js' },
  'Next.js': { icon: <SiNextdotjs className="w-5 h-5" />, color: 'text-white', title: 'Next.js' },
  'TypeScript': { icon: <SiTypescript className="w-5 h-5" />, color: 'text-blue-500', title: 'TypeScript' },
  'Socket.io': { icon: <SiSocketdotio className="w-5 h-5" />, color: 'text-gray-300', title: 'Socket.io' },
  'MySQL': { icon: <SiMysql className="w-5 h-5" />, color: 'text-blue-300', title: 'MySQL' },
  'PostgreSQL': { icon: <SiMysql className="w-5 h-5" />, color: 'text-blue-400', title: 'PostgreSQL' },
  'C++': { icon: <SiCplusplus className="w-5 h-5" />, color: 'text-blue-500', title: 'C++' },
  'C#': { icon: <SiDotnet className="w-5 h-5" />, color: 'text-purple-600', title: 'C#' },
  'JavaScript': { icon: <SiJavascript className="w-5 h-5" />, color: 'text-yellow-400', title: 'JavaScript' },
  'Python': { icon: <SiPython className="w-5 h-5" />, color: 'text-blue-300', title: 'Python' },
  'HTML': { icon: <FaHtml5 className="w-5 h-5" />, color: 'text-orange-500', title: 'HTML' },
  'CSS': { icon: <FaCss3Alt className="w-5 h-5" />, color: 'text-blue-500', title: 'CSS' },
  'jQuery': { icon: <SiJquery className="w-5 h-5" />, color: 'text-blue-600', title: 'jQuery' },
  'Bootstrap': { icon: <SiBootstrap className="w-5 h-5" />, color: 'text-purple-500', title: 'Bootstrap' },
  '.NET (C#)': { icon: <SiDotnet className="w-5 h-5" />, color: 'text-purple-600', title: '.NET' },
  'Docker': { icon: <FaDocker className="w-5 h-5" />, color: 'text-blue-400', title: 'Docker' },
  'Linux': { icon: <FaLinux className="w-5 h-5" />, color: 'text-yellow-200', title: 'Linux' },
  'Git': { icon: <FaGitAlt className="w-5 h-5" />, color: 'text-orange-500', title: 'Git' },
  'Tableau': { icon: <SiTableau className="w-5 h-5" />, color: 'text-blue-500', title: 'Tableau' },
  'Power BI': { icon: <Database className="w-5 h-5" />, color: 'text-yellow-500', title: 'Power BI' },
  'Hugging Face': { icon: <SiHuggingface className="w-5 h-5" />, color: 'text-yellow-400', title: 'Hugging Face' },
  'Vercel': { icon: <SiVercel className="w-5 h-5" />, color: 'text-white', title: 'Vercel' },
  'Razorpay': { icon: <SiRazorpay className="w-5 h-5" />, color: 'text-blue-500', title: 'Razorpay' },
  'AWS-S3': { icon: <SiWasmcloud className="w-5 h-5" />, color: 'text-orange-400', title: 'AWS-S3' },
  'SQL': { icon: <SiSqlite className="w-5 h-5" />, color: 'text-blue-400', title: 'SQL' },
  'Redux': { icon: <FaReact className="w-5 h-5" />, color: 'text-purple-500', title: 'Redux' },
  'Go': { icon: <SiGo className="w-5 h-5" />, color: 'text-blue-300', title: 'Go' },
  'Redis': { icon: <Database className="w-5 h-5" />, color: 'text-red-500', title: 'Redis' },
  'REST API': { icon: <Server className="w-5 h-5" />, color: 'text-green-400', title: 'REST API' },
  'Spring Boot': { icon: <Server className="w-5 h-5" />, color: 'text-green-500', title: 'Spring Boot' },
  'Django': {icon:<SiDjango className="w-5 h-5" />, color: 'text-green-600', title: 'Django' },
  'Shopify':{icon:<SiShopify className="w-5 h-5" />, color: 'text-green-600', title: 'Shopify' }
};

// Portfolio data remains the same
const portfolioData = {
  personal: {
    name: "Tanmay Sabharwal",
    title: "Software Engineer",
    subtitle: "Software Developer specializing in .NET, React & Cloud Technologies",
    email: "tanmaysabharwal76@gmail.com",
    phone: "8470816414",
    location: "Gurugram, Haryana",
    bio:"I'm Tanmay Sabharwal, a passionate software developer and Computer Science and Engineering graduate from VIT Vellore (CGPA: 9.05). Currently working as a Software Developer at Sparrow Risk Management, I specialize in .NET (C#), React, and cloud technologies, with proven expertise in automated reporting solutions that have contributed to significant revenue increases and operational efficiency improvements. My technical expertise spans backend development, full-stack solutions, and AI-driven systems, working with technologies like Node.js, Express, PostgreSQL, AWS-S3, and modern web frameworks. With a strong foundation in data structures, algorithms, and software design principles, I aim to create solutions that are efficient, reliable, and impactful. I thrive in environments that challenge me to innovate and continuously learn, leveraging technology to make meaningful real-world impact.",
    github: "https://github.com/Tanmay410",
    linkedin: "https://www.linkedin.com/in/tanmay-sabharwal/"
  },
  
  skills: {
    languages: ["C++", "C#", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    frontend: ["React.js", "Next.js", "jQuery", "Bootstrap", "TypeScript"],
    backend: [".NET (C#)", "Node.js", "Express.js", "Django", "Go"],
    databases: ["MongoDB", "MySQL", "Firebase"],
    tools: ["Azure", "Docker", "Linux", "Firebase", "Tableau", "Power BI", "Git"]
  },
  
  experience: [
    {
      company: "Sparrow Risk Management",
      position: "Software Developer",
      duration: "Jan 2025 – Present",
      location: "Gurugram, Haryana",
      description: "Developed backend operations with .NET (C#), React, SQL, and AWS. Implemented automated PDF & Word generation, reducing manual effort by 40% and contributing 5% increase in revenue.",
      technologies: [".NET (C#)", "React.js", "MySQL", "AWS-S3"]
    },
    {
      company: "Valtorus Tech Pvt Ltd",
      position: "Full Stack Developer",
      duration: "Oct 2023 – Dec 2023",
      location: "Pune, Maharashtra",
      description: "Built a Reddit-like platform with authentication, real-time messaging, video calls, and polls. Increased user-generated content by 35% and reduced API response times by 25%.",
      technologies: ["Node.js", "Express.js", "React.js", "MySQL"]
    },
    {
      company: "ZingBus",
      position: "Software Development Intern",
      duration: "Dec 2022 – Jan 2023",
      location: "Gurugram, Haryana",
      description: "Optimized code efficiency and fixed critical errors in JavaScript web application, improving user experience and system reliability.",
      technologies: ["React.js", "JavaScript", "MySQL"]
    }
  ],
  
  projects: [
    {
      title: "WERITE",
      description: "Reddit-like platform with real-time messaging, video calls, polls, and user-generated content management.",
      technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Socket.io"],
      github: "https://github.com/Tanmay410/Werite",
      demo: "https://www.werite.in/login",
      image: "/Werite.png"
    },
        {
      title: "HONEREVIEW - Review Platform",
      description: "Anonymous review platform with AI-powered suggestions using Hugging Face. Increased feedback completion rates by 20%.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Hugging Face", "Vercel"],
      github: "https://github.com/Tanmay410/HoneReview",
      demo: "https://honereview.vercel.app/",
      image: "/HoneReview.png"
    },
    {
      title: "SEVENSEVEN - E-commerce Platform",
      description: "Developed a minimal-themed Shopify webstore for sevn7sevn7 clothing line",
      technologies: ["Shopify","React.js","Razorpay"],
      github: "https://www.sevenseven.co.in/",
      demo: "https://www.sevenseven.co.in/",
      image: "/seven.png"
    },
    {
      title: "CA HELPER",
      description:"Web-based CA solution for client management, document sharing, and seamless file exchange between chartered accountants and their clients.",
      technologies: ["Node.js", "Express.js", "React.js", "Firebase", "Socket.io"],
      github: "https://cahelpere.web.app/",
      demo: "https://cahelpere.web.app/",
      image: "/ca.png"
    },
    {
      title: "DROP IT",
      description:"Developed a chatbot-based delivery coordination app for VIT Vellore, enabling users to request and offer pickup services within the campus. Integrated Firebase for authentication and real-time communication, with plans to enhance navigation using maps.",
      technologies: ["Node.js", "Express.js", "React.js", "Firebase", "Socket.io"],
      github: "https://github.com/Tanmay410/DropIt",
      demo: "https://github.com/Tanmay410/DropIt",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&h=300&fit=crop"
    },
    {
      title: "CLOUDFILER",
      description: "AWS-S3-based backend with scalable architecture for secure and efficient file management. Features JWT authentication, Redis caching, advanced file operations, and intelligent search functionality with Docker containerization for consistent deployment across diverse platforms.",
      technologies: ["Go", "PostgreSQL", "REST API", "AWS-S3", "Redis"],
      github: "https://github.com/Tanmay410/CloudFiler",
      demo: "https://github.com/Tanmay410/CloudFiler",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&h=300&fit=crop"
    }
  ],
  
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Vellore Institute of Technology, Vellore",
    duration: "June 2021 - June 2025",
    cgpa: "9.05",
    school: "Delhi Public School, Azaad Nagar",
    grade12: "96%",
    grade10: "97.2%"
  }
};

// Smooth scroll utility
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

// Enhanced Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              TS
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
          {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsOpen(false);
              }}
              className={`text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-all duration-300 transform hover:translate-x-2`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Enhanced Hero Section
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = portfolioData.personal.name;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={8}>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={2} duration={10}>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        </FloatingElement>
        <FloatingElement delay={4} duration={12}>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/15 rounded-full mix-blend-multiply filter blur-xl"></div>
        </FloatingElement>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white animate-slide-in-left">
                Hello
                <img 
                  src="/Hello.gif" 
                  alt="Hello" 
                  className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-15 lg:h-15 mx-2 align-middle animate-wave"
                />
                ,I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient min-h-[1.2em]">
                {text}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light animate-slide-in-right">
              {portfolioData.personal.title}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Explore My Work
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <a
              href="/Tanmay_resume.pdf"
              download
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-medium hover:border-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Enhanced About Section
const About = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);
  
  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages, icon: <Code className="w-5 h-5" /> },
    { title: 'Frontend', skills: portfolioData.skills.frontend, icon: <User className="w-5 h-5" /> },
    { title: 'Backend', skills: portfolioData.skills.backend, icon: <Server className="w-5 h-5" /> },
    { title: 'Databases', skills: portfolioData.skills.databases, icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <FloatingElement delay={1} duration={15}>
          <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={3} duration={12}>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            About Me
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-700 ${isVisible ? 'animate-expand' : 'w-0'}`}></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Profile Image */}
          <div className={`flex justify-center lg:justify-start transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-1 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/Tanmay_image.jpeg"
                  alt="Tanmay Sabharwal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full group-hover:rotate-12 transition-transform duration-500">
                <Code className="w-6 h-6" />
              </div>
              {/* Floating icons around image */}
              <FloatingElement delay={0} duration={6}>
                <div className="absolute -top-4 -left-4 text-blue-400">
                  <FaReact className="w-8 h-8" />
                </div>
              </FloatingElement>
              <FloatingElement delay={2} duration={8}>
                <div className="absolute top-1/4 -right-8 text-yellow-400">
                  <SiJavascript className="w-6 h-6" />
                </div>
              </FloatingElement>
              <FloatingElement delay={4} duration={10}>
                <div className="absolute -bottom-8 left-1/4 text-green-400">
                  <FaNodeJs className="w-7 h-7" />
                </div>
              </FloatingElement>
            </div>
          </div>

          {/* Enhanced About Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Software Engineer
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">
                  <AnimatedCounter end={3} suffix="+" />
                </div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold text-white text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-gray-700/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-700/70 hover:scale-105 hover:-translate-y-2 transition-all duration-500 transform ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{category.title}</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                      title={skill}
                    >
                      <div className="flex items-center justify-center bg-gray-600/50 p-3 rounded-lg hover:bg-gray-600/70 hover:scale-110 transition-all duration-300 cursor-pointer">
                        <span className={`${techIcons[skill]?.color || 'text-gray-300'} group-hover/skill:animate-pulse`}>
                          {techIcons[skill]?.icon}
                        </span>
                      </div>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/skill:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Experience Section
const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={20}>
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={5} duration={25}>
          <div className="absolute top-1/4 right-20 w-3 h-3 bg-purple-400/20 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={10} duration={18}>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-400/25 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Professional Experience
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-700 ${isVisible ? 'animate-expand' : 'w-0'}`}></div>
        </div>

        <div ref={ref} className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Enhanced Timeline Line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-blue-400 via-purple-500 to-transparent animate-pulse"></div>
              )}
              
              <div className={`flex gap-8 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Enhanced Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Enhanced Experience Card */}
                <div className="flex-1 group bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{exp.position}</h3>
                      <p className="text-blue-400 font-medium group-hover:text-purple-400 transition-colors duration-300">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                      <p className="group-hover:text-gray-300 transition-colors duration-300">{exp.duration}</p>
                      <p className="group-hover:text-gray-300 transition-colors duration-300">{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech relative"
                        title={tech}
                      >
                        <span className="inline-flex items-center justify-center bg-gray-700/50 p-2 rounded-lg hover:bg-gray-600/70 hover:scale-110 transition-all duration-300 cursor-pointer">
                          <span className={`${techIcons[tech]?.color || 'text-gray-300'} group-hover/tech:animate-pulse`}>
                            {techIcons[tech]?.icon}
                          </span>
                        </span>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/tech:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Education Section */}
        <div className="mt-20">
          <h3 className={`text-2xl font-bold text-white text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.8s' }}>
            Education
          </h3>
          <div className={`bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/70 transition-all duration-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '1s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Bachelor's Degree</h4>
                </div>
                <p className="text-blue-400 font-medium mb-2 group-hover:text-purple-400 transition-colors duration-300">{portfolioData.education.degree}</p>
                <p className="text-gray-300 mb-2 group-hover:text-gray-200 transition-colors duration-300">{portfolioData.education.university}</p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{portfolioData.education.duration}</p>
                <p className="text-green-400 font-semibold mt-2 group-hover:text-green-300 transition-colors duration-300">CGPA: {portfolioData.education.cgpa}</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">Secondary Education</h4>
                </div>
                <p className="text-blue-400 font-medium mb-2 group-hover:text-purple-400 transition-colors duration-300">{portfolioData.education.school}</p>
                <div className="space-y-1">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Class XII: <span className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">{portfolioData.education.grade12}</span></p>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Class X: <span className="text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">{portfolioData.education.grade10}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Projects Section
const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <FloatingElement delay={2} duration={16}>
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={6} duration={14}>
          <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-purple-500/5 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-700 ${isVisible ? 'animate-expand' : 'w-0'}`}></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className={`group h-full transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-700/50 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl h-full flex flex-col border border-gray-600/50 hover:border-gray-500/50">
                {/* Enhanced Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                  
                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="group/tech bg-gray-600/50 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 hover:bg-gray-600/70 hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {techIcons[tech] ? (
                          <>
                            <span className={`${techIcons[tech].color} group-hover/tech:animate-pulse`}>
                              {techIcons[tech].icon}
                            </span>
                            <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-300">{tech}</span>
                          </>
                        ) : (
                          <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-300">{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-gray-300 rounded-full hover:border-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Contact Section
const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <FloatingElement delay={0} duration={20}>
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={5} duration={18}>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={10} duration={22}>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-500/10 rounded-full"></div>
        </FloatingElement>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={ref} className="space-y-8">
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 transition-all duration-700 ${isVisible ? 'animate-expand' : 'w-0'}`}></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
            </p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.3s' }}>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50"
            >
              <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Email</span>
            </a>
            
            <a
              href={`${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50"
            >
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">LinkedIn</span>
            </a>
            
            <a
              href={`${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50 sm:col-span-2 lg:col-span-1"
            >
              <Github className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-white transition-colors duration-300">GitHub</span>
            </a>
          </div>

          <div className={`pt-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '0.6s' }}>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © {currentYear} {portfolioData.personal.name}. Built with React <FaReact className="inline-block w-4 h-4 text-blue-400 animate-spin-slow" />
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component with enhanced styling
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <style jsx global>{`
        /* Custom CSS for enhanced animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 5rem; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
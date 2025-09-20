import React, { useState, useEffect } from 'react';
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

// Updated techIcons without missing icons
// Updated techIcons without missing icons
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
  'Go': { icon: <Code className="w-5 h-5" />, color: 'text-blue-300', title: 'Go' },
  'Redis': { icon: <Database className="w-5 h-5" />, color: 'text-red-500', title: 'Redis' },
  'REST API': { icon: <Server className="w-5 h-5" />, color: 'text-green-400', title: 'REST API' },
  'Spring Boot': { icon: <Server className="w-5 h-5" />, color: 'text-green-500', title: 'Spring Boot' },
  'Django': {icon:<SiDjango className="w-5 h-5" />, color: 'text-blue-500', title: 'Django' },
};
// Data object containing all portfolio information
const portfolioData = {
  personal: {
    name: "Tanmay Sabharwal",
    title: "Software Engineer",
    subtitle: "Software Developer specializing in .NET, React & Cloud Technologies",
    email: "tanmaysabharwal76@gmail.com",
    phone: "8470816414",
    location: "Gurugram, Haryana",
    // bio: "Passionate Full Stack Developer with 2+ years of experience building scalable web applications. Currently working at Sparrow Risk Management, I specialize in .NET (C#), React, and cloud technologies. I've successfully increased revenue by ₹2 lakhs through automated reporting solutions and have a proven track record of optimizing performance and enhancing user experience.",
    linkedin: "linkedin.com/tanmay-sabharwal",
    bio:"I’m Tanmay Sabharwal, a passionate software developer and Computer Science and Engineering graduate from VIT Vellore (CGPA: 9.05). Skilled in C++, C#, JavaScript, SQL, and modern web frameworks, I enjoy building scalable and user-friendly applications that blend creativity with problem-solving. My expertise spans backend development, full-stack solutions, and AI-driven systems, working with technologies like .NET, React, Node.js, Express, and cloud platforms. With a strong foundation in data structures, algorithms, and software design principles, I aim to create solutions that are efficient, reliable, and impactful. I thrive in environments that challenge me to innovate and continuously learn, and I value teamwork, adaptability, and curiosity as much as technical skill. Beyond just coding, I see myself as a problem solver and innovator, eager to leverage technology to make a meaningful real-world impact.",
    github: "github.com/Tanmay410"
  },
  
  skills: {
    languages: ["C++", "C#", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    frontend: ["React.js", "Next.js", "jQuery", "Bootstrap", "TypeScript"],
    backend: [".NET (C#)", "Node.js", "Express.js", "Django"],
    databases: ["MongoDB", "MySQL", "Firebase"],
    tools: ["Azure", "Docker", "Linux", "Firebase", "Tableau", "Power BI", "Git"]
  },
  
  experience: [
    {
      company: "Sparrow Risk Management",
      position: "Software Developer",
      duration: "Jan 2025 – Present",
      location: "Gurugram, Haryana",
      description: "Developed backend operations with .NET (C#), React, SQL, and AWS. Implemented automated PDF & Word generation, reducing manual effort by 40% and contributing ₹2 lakhs increase in revenue.",
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
      title: "DIODE - E-commerce Platform",
      description: "Full-featured e-commerce platform with secure authentication, payment integration, and admin analytics. Improved operational efficiency by 20%.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
      github: "https://github.com/Tanmay410",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "HONEREVIEW - Review Platform",
      description: "Anonymous review platform with AI-powered suggestions using Hugging Face. Increased feedback completion rates by 20%.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Hugging Face", "Vercel"],
      github: "https://github.com/Tanmay410",
      demo: "#",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop"
    },
    {
      title: "WERITE",
      description: "Reddit-like platform with real-time messaging, video calls, polls, and user-generated content management.",
      technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Socket.io"],
      github: "https://github.com/Tanmay410",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "DROP IT",
      description:"Developed a chatbot-based delivery coordination app for VIT Vellore, enabling users to request and offer pickup services within the campus. Integrated Firebase for authentication and real-time communication, with plans to enhance navigation using maps.",
      technologies: ["Node.js", "Express.js", "React.js", "Firebase", "Socket.io"],
      github: "https://github.com/Tanmay410",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
        {
      title: "CA HELPER",
      description:"Web-based CA solution for client management, document sharing, and seamless file exchange between chartered accountants and their clients.",
      technologies: ["Node.js", "Express.js", "React.js", "Firebase", "Socket.io"],
      github: "https://github.com/Tanmay410",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
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

// Navbar Component
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TS
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white">
                Hello
                <img 
                  src="/Hello.gif" 
                  alt="Hello" 
                  className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-15 lg:h-15 mx-2 align-middle"
                />
                ,I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              {portfolioData.personal.title}
            </p>
            {/* <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {portfolioData.personal.subtitle}
            </p> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              Explore My Work
              <ChevronDown className="w-4 h-4" />
            </button>
            <a
              href="/Tanmay_resume.pdf"
              download
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-medium hover:border-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages, icon: <Code className="w-5 h-5" /> },
    { title: 'Frontend', skills: portfolioData.skills.frontend, icon: <User className="w-5 h-5" /> },
    { title: 'Backend', skills: portfolioData.skills.backend, icon: <Server className="w-5 h-5" /> },
    { title: 'Databases', skills: portfolioData.skills.databases, icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-500 p-1">
                <img
                  src="/Tanmay_image.jpeg"
                  alt="Tanmay Sabharwal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full">
                <Code className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{portfolioData.personal.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>CGPA: {portfolioData.education.cgpa}</span>
              </div> */}
            {/* </div> */}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-400">{category.icon}</div>
                  <h4 className="text-lg font-semibold text-white">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group relative"
                      title={skill}
                    >
                      <span className="inline-flex items-center justify-center bg-gray-600/50 p-2 rounded-lg hover:bg-gray-600/70 transition-all duration-200">
                        <span className={techIcons[skill]?.color || 'text-gray-300'}>
                          {techIcons[skill]?.icon}
                        </span>
                      </span>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

// Experience Section Component
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
              )}
              
              <div className="flex gap-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group relative"
                      title={tech}
                    >
                      <span className="inline-flex items-center justify-center bg-gray-700/50 p-2 rounded-lg hover:bg-gray-600/70 transition-all duration-200">
                        <span className={techIcons[tech]?.color || 'text-gray-300'}>
                          {techIcons[tech]?.icon}
                        </span>
                      </span>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Education</h3>
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xl font-semibold text-white">Bachelor's Degree</h4>
                </div>
                <p className="text-blue-400 font-medium mb-2">{portfolioData.education.degree}</p>
                <p className="text-gray-300 mb-2">{portfolioData.education.university}</p>
                <p className="text-gray-400 text-sm">{portfolioData.education.duration}</p>
                <p className="text-green-400 font-semibold mt-2">CGPA: {portfolioData.education.cgpa}</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xl font-semibold text-white">Secondary Education</h4>
                </div>
                <p className="text-blue-400 font-medium mb-2">{portfolioData.education.school}</p>
                <div className="space-y-1">
                  <p className="text-gray-300">Class XII: <span className="text-green-400 font-semibold">{portfolioData.education.grade12}</span></p>
                  <p className="text-gray-300">Class X: <span className="text-green-400 font-semibold">{portfolioData.education.grade10}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
// Projects Section Component
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="group h-full">
              <div className="bg-gray-700/50 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                  
                  {/* Technologies with Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-600/50 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                      >
                        {techIcons[tech] ? (
                          <>
                            <span className={techIcons[tech].color}>
                              {techIcons[tech].icon}
                            </span>
                            <span className="text-gray-300">{tech}</span>
                          </>
                        ) : (
                          <span className="text-gray-300">{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-500 text-gray-300 rounded-full hover:border-gray-400 hover:text-white transition-all duration-200 transform hover:scale-105"
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

// Contact Section Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">Email</span>
            </a>
            
            <a
              href={`https://${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">LinkedIn</span>
            </a>
            
            <a
              href={`https://${portfolioData.personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-200 transform hover:scale-105"
            >
              <Github className="w-6 h-6 text-blue-400" />
              <span className="text-gray-300">GitHub</span>
            </a>
          </div>

          <div className="pt-8">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} {portfolioData.personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
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
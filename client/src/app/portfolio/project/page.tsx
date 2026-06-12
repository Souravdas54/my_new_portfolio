'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { WebPage, WithContext } from "schema-dts";
import { 
  FiExternalLink, FiGithub, FiFilter, FiGrid, FiList, FiStar,
  FiCode, FiServer, FiDatabase, FiCloud, FiSmartphone, FiTrendingUp,
  FiChevronRight, FiAward, FiClock, FiUsers, FiGitBranch
} from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiRedux,
  SiPostman, SiVercel, SiNetlify, SiHeroku, SiFirebase
} from 'react-icons/si';
import { FaNodeJs, FaReact, FaDatabase, FaCloud, FaCode } from 'react-icons/fa';

const jsonLdProjects: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Projects - Sourav Das Portfolio",
  url: "https://sdportfolio.com/projects",
  description:
    "Explore the projects of Sourav Das, a MERN Stack Developer. View live demos and source code of web applications built with React, Node.js, Express.js, and MongoDB.",
  publisher: {
    "@type": "Person",
    name: "Sourav Das",
  },
};

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image: string;
  icon: React.ReactNode;
  stats?: {
    stars?: number;
    forks?: number;
    contributors?: number;
  };
};

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Updated projects with your actual 5 projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'React Portfolio Website',
      description: 'A modern, responsive portfolio website built with React.js and Tailwind CSS. Features smooth animations, dark mode, and fully responsive design for all devices.',
      category: 'react',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/souravdas/react-portfolio',
      liveUrl: 'https://react-portfolio-demo.com',
      featured: true,
      image: '/projects/react-portfolio.jpg',
      icon: <SiReact className="text-cyan-500" />,
      stats: { stars: 12, forks: 5, contributors: 1 }
    },
    {
      id: 2,
      title: 'MERN Stack Blog Application',
      description: 'Full-stack blog platform with user authentication, CRUD operations, and admin dashboard. Built with MongoDB, Express.js, React.js, and Node.js.',
      category: 'mern',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Bootstrap'],
      githubUrl: 'https://github.com/souravdas/mern-blog',
      liveUrl: 'https://mern-blog-demo.com',
      featured: true,
      image: '/projects/mern-blog.jpg',
      icon: <SiNodedotjs className="text-green-600" />,
      stats: { stars: 15, forks: 7, contributors: 2 }
    },
    {
      id: 3,
      title: 'RESTful API - Task Manager',
      description: 'A complete RESTful API for task management with user authentication, JWT tokens, and MongoDB integration. Includes CRUD operations and request validation.',
      category: 'node-api',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mongoose', 'Postman'],
      githubUrl: 'https://github.com/souravdas/task-api',
      liveUrl: 'https://task-api-demo.herokuapp.com',
      featured: false,
      image: '/projects/task-api.jpg',
      icon: <SiNodedotjs className="text-green-600" />,
      stats: { stars: 8, forks: 3, contributors: 1 }
    },
    {
      id: 4,
      title: 'E-Commerce API with Express',
      description: 'Backend API for an e-commerce platform with product management, shopping cart, order processing, and payment integration using Stripe.',
      category: 'node-api',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'JWT', 'Redis'],
      githubUrl: 'https://github.com/souravdas/ecommerce-api',
      liveUrl: 'https://ecommerce-api-demo.com',
      featured: true,
      image: '/projects/ecommerce-api.jpg',
      icon: <FaCloud className="text-blue-500" />,
      stats: { stars: 10, forks: 4, contributors: 1 }
    },
    {
      id: 5,
      title: 'Weather API Integration Service',
      description: 'A Node.js service that integrates with OpenWeatherMap API, provides caching, rate limiting, and returns formatted weather data for cities worldwide.',
      category: 'node-api',
      technologies: ['Node.js', 'Express.js', 'Axios', 'Redis Cache', 'Joi Validation'],
      githubUrl: 'https://github.com/souravdas/weather-api',
      liveUrl: 'https://weather-api-demo.com',
      featured: false,
      image: '/projects/weather-api.jpg',
      icon: <FiCloud className="text-blue-400" />,
      stats: { stars: 6, forks: 2, contributors: 1 }
    },
  ];

  // Categories for filter
  const categories = [
    { id: 'all', label: 'All Projects', icon: <FiCode />, count: projects.length },
    { id: 'react', label: 'React.js', icon: <SiReact />, count: projects.filter(p => p.category === 'react').length },
    { id: 'mern', label: 'MERN Stack', icon: <SiNodedotjs />, count: projects.filter(p => p.category === 'mern').length },
    { id: 'node-api', label: 'Node.js APIs', icon: <FiServer />, count: projects.filter(p => p.category === 'node-api').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  // Technology icons mapping
  const techIcons: Record<string, React.ReactNode> = {
    'React.js': <SiReact className="text-cyan-500" />,
    'Node.js': <SiNodedotjs className="text-green-600" />,
    'Express.js': <SiExpress className="text-gray-600" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'JavaScript': <SiJavascript className="text-yellow-500" />,
    'HTML5': <SiHtml5 className="text-orange-500" />,
    'CSS3': <SiCss3 className="text-blue-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-teal-500" />,
    'Bootstrap': <SiBootstrap className="text-purple-600" />,
    'JWT': <FaCode className="text-red-500" />,
    'Mongoose': <SiMongodb className="text-green-600" />,
    'Postman': <SiPostman className="text-orange-600" />,
    'Stripe API': <FaCloud className="text-indigo-500" />,
    'Redis': <FaDatabase className="text-red-500" />,
    'Axios': <FiCloud className="text-blue-500" />,
    'Redux': <SiRedux className="text-purple-500" />,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProjects) }}
      />

      <Head>
        <title>Projects | Sourav Das - MERN Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Explore the projects of Sourav Das including React applications, MERN stack projects, and Node.js APIs. View live demos and source code." />
        <meta name="keywords" content="React Projects, MERN Stack Projects, Node.js APIs, Web Development Portfolio" />
        <meta name="author" content="Sourav Das" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="min-h-screen py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-down">
            <div className="inline-block relative">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 animate-gradient-x">
                My Projects
              </h1>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-ping opacity-50"></div>
            </div>
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-4xl mx-auto font-light animate-fade-in-up">
              Showcasing my work with <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">React, MERN Stack,</span> and <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">modern web technologies</span>
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 mb-8 xs:mb-10 md:mb-12 animate-fade-in-up">
            {[
              { icon: FiCode, value: projects.length, label: 'Total Projects', color: 'from-blue-500 to-cyan-500' },
              { icon: FiStar, value: featuredProjects.length, label: 'Featured', color: 'from-yellow-500 to-orange-500' },
              { icon: FiGitBranch, value: '15+', label: 'Technologies', color: 'from-green-500 to-teal-500' },
              { icon: FiTrendingUp, value: '5+', label: 'APIs Built', color: 'from-purple-500 to-pink-500' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg rounded-xl xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105"
                style={{ animation: `bounceIn 0.6s ease ${index * 0.1}s both` }}
              >
                <div className={`w-8 xs:w-10 h-8 xs:h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white mb-2 group-hover:rotate-12 transition-transform duration-300`}>
                  <stat.icon className="text-sm xs:text-base sm:text-lg" />
                </div>
                <div className={`text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs xs:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <div className="mb-12 xs:mb-14 sm:mb-16 md:mb-20">
              <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8 animate-slide-in-left">
                <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white">
                  <FiAward className="text-lg xs:text-xl sm:text-2xl" />
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Featured Projects
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project Header with Icon */}
                    <div className="relative h-40 xs:h-44 sm:h-48 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                          <div className="text-5xl xs:text-6xl sm:text-7xl text-white mb-2">
                            {project.icon}
                          </div>
                          <div className="text-white font-bold text-sm xs:text-base bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            {project.category === 'react' ? 'React App' : 
                             project.category === 'mern' ? 'MERN Stack' : 'Node.js API'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md animate-pulse"></div>
                          <div className="relative bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs xs:text-sm font-bold flex items-center gap-1">
                            <FiStar className="animate-spin-slow" />
                            Featured
                          </div>
                        </div>
                      </div>

                      {/* Stats overlay on hover */}
                      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                        {project.stats && (
                          <>
                            <div className="text-center">
                              <div className="text-white font-bold">{project.stats.stars}</div>
                              <div className="text-xs text-gray-300">Stars</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-bold">{project.stats.forks}</div>
                              <div className="text-xs text-gray-300">Forks</div>
                            </div>
                            <div className="text-center">
                              <div className="text-white font-bold">{project.stats.contributors}</div>
                              <div className="text-xs text-gray-300">Contributors</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 xs:p-5 sm:p-6">
                      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3 xs:mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 xs:gap-2 mb-4 xs:mb-5">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <div
                            key={i}
                            className="group/tech relative px-2 xs:px-2.5 py-1 bg-gray-100 rounded-lg flex items-center gap-1 hover:bg-indigo-50 transition-colors duration-300"
                          >
                            <span className="text-xs xs:text-sm">{techIcons[tech] || <FaCode className="text-gray-500" />}</span>
                            <span className="text-[10px] xs:text-xs text-gray-700">{tech}</span>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                              {tech}
                            </div>
                          </div>
                        ))}
                        {project.technologies.length > 4 && (
                          <div className="px-2 xs:px-2.5 py-1 bg-gray-100 rounded-lg">
                            <span className="text-[10px] xs:text-xs text-gray-600">+{project.technologies.length - 4}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 xs:gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 xs:gap-2 px-2 xs:px-3 py-2 xs:py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-all duration-300 hover:scale-105 text-xs xs:text-sm group/btn"
                        >
                          <FiGithub className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 xs:gap-2 px-2 xs:px-3 py-2 xs:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-xs xs:text-sm group/btn"
                        >
                          <FiExternalLink className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Filter Controls */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 mb-8 xs:mb-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 xs:gap-5">
              <div className="flex items-center gap-3 xs:gap-4 w-full md:w-auto">
                <div className="p-2 xs:p-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white">
                  <FiFilter className="text-sm xs:text-base" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      className={`group relative px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg text-xs xs:text-sm font-medium transition-all duration-300 flex items-center gap-1 xs:gap-2 ${
                        filter === category.id
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                      }`}
                    >
                      <span className={`text-sm ${filter === category.id ? 'text-white' : 'text-gray-500'}`}>
                        {category.icon}
                      </span>
                      {category.label}
                      <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                        filter === category.id ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* View Toggle */}
              <div className="flex gap-2 self-end md:self-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 xs:p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <FiGrid className="text-sm xs:text-base" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 xs:p-2.5 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <FiList className="text-sm xs:text-base" />
                </button>
              </div>
            </div>
          </div>

          {/* All Projects - Grid View */}
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white/80 backdrop-blur-lg rounded-xl xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Project Header */}
                  <div className="relative h-28 xs:h-32 sm:h-36 bg-gradient-to-r from-indigo-500 to-purple-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl xs:text-4xl sm:text-5xl text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        {project.icon}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-2 right-2">
                        <FiStar className="text-yellow-400 text-sm xs:text-base" />
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-3 xs:p-4">
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 xs:mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs xs:text-sm text-gray-600 mb-2 xs:mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3 xs:mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] xs:text-xs px-1.5 xs:px-2 py-0.5 xs:py-1 bg-gray-100 text-gray-700 rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-[10px] xs:text-xs py-1.5 xs:py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
                      >
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center text-[10px] xs:text-xs py-1.5 xs:py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3 xs:space-y-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white/80 backdrop-blur-lg rounded-xl xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 xs:gap-5">
                    {/* Project Icon */}
                    <div className="md:w-16 lg:w-20">
                      <div className="w-12 xs:w-14 h-12 xs:h-14 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl xs:text-3xl">{project.icon}</span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[10px] xs:text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                          {project.category === 'react' ? 'React' : 
                           project.category === 'mern' ? 'MERN' : 'Node.js API'}
                        </span>
                      </div>
                      <p className="text-xs xs:text-sm text-gray-600 mb-3">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 xs:gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-[10px] xs:text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-lg flex items-center gap-1">
                            {techIcons[tech]}
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex md:flex-col gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-[10px] xs:text-xs flex items-center gap-1 justify-center"
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-[10px] xs:text-xs flex items-center gap-1 justify-center"
                      >
                        <FiExternalLink /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 xs:py-16 animate-fade-in">
              <div className="text-5xl xs:text-6xl mb-4 animate-bounce">📁</div>
              <h3 className="text-xl xs:text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-sm xs:text-base text-gray-600 max-w-md mx-auto">
                No projects match the selected filter. Try selecting a different category.
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-4 xs:px-6 py-2 xs:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm xs:text-base"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 xs:mt-14 sm:mt-16 md:mt-20 text-center animate-fade-in-up animation-delay-400">
            <div className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl xs:rounded-2xl sm:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 xs:mb-4">
                  Like What You See?
                </h2>
                <p className="text-blue-100 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 max-w-2xl mx-auto">
                  I'm currently available for freelance work and full-time opportunities. 
                  Let's discuss your next project!
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-xl text-xs xs:text-sm sm:text-base"
                  >
                    Hire Me
                  </a>
                  <a
                    href="https://github.com/souravdas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s ease;
        }
        
        .animate-gradient-x {
          background: linear-gradient(270deg, #4f46e5, #9333ea, #db2777, #4f46e5);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Projects;
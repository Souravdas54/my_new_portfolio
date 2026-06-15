'use client';

import React, { useEffect, useState } from 'react';
import {
  FiAward, FiCode, FiUsers, FiBookOpen, FiCalendar, FiMapPin,
  FiMail, FiGithub, FiLinkedin, FiTwitter, FiDownload
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTypescript,
  SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiBootstrap, SiGit, SiRedux, SiFirebase, SiMysql
} from 'react-icons/si';
import { FaGraduationCap, FaLaptopCode, FaHeart, FaStar, FaCertificate } from 'react-icons/fa';

import { WebPage, WithContext } from "schema-dts";
import Script from 'next/script';

const jsonLdAbout: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sourav Das Portfolio",
  url: "https://sdportfolio.com",
  description:
    "Explore the portfolio of Sourav Das, a MERN Stack Developer skilled in React.js, Next.js, MongoDB, Express.js and modern web technologies.",
  publisher: {
    "@type": "Person",
    name: "Sourav Das",
  },
};

// Skeleton Loader Component
const SkeletonLoader = ({ type = "text", className = "" }: { type?: string; className?: string }) => {
  if (type === "card") {
    return (
      <div className={`animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl ${className}`}></div>
    );
  }
  if (type === "circle") {
    return (
      <div className={`animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-full ${className}`}></div>
    );
  }
  if (type === "button") {
    return (
      <div className={`animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg ${className}`}></div>
    );
  }
  if (type === "icon") {
    return (
      <div className={`animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg ${className}`}></div>
    );
  }
  return (
    <div className={`animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded ${className}`}></div>
  );
};


const About = () => {

  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Check internet connection
  useEffect(() => {
    const updateOnlinestatus = () => {
      const online = navigator.onLine;
      setIsOnline(online)
    };
    updateOnlinestatus();

    window.addEventListener('online', updateOnlinestatus);
    window.addEventListener('offline', updateOnlinestatus);

    return () => {
      window.addEventListener('online', updateOnlinestatus);
      window.addEventListener('offline', updateOnlinestatus);
    };
  }, []);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setDataLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  // Technical Skills with realistic fresher levels
  const skills = [
    { icon: <SiHtml5 />, name: 'HTML5', level: '55%', color: 'from-orange-500 to-orange-600', category: 'Frontend' },
    { icon: <SiCss3 />, name: 'CSS3', level: '50%', color: 'from-blue-500 to-blue-600', category: 'Frontend' },
    { icon: <SiBootstrap />, name: 'Bootstrap', level: '50%', color: 'from-purple-500 to-purple-600', category: 'Frontend' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', level: '50%', color: 'from-teal-500 to-teal-600', category: 'Frontend' },
    { icon: <SiJavascript />, name: 'JavaScript', level: '55%', color: 'from-yellow-500 to-yellow-600', category: 'Frontend' },
    { icon: <SiTypescript />, name: 'TypeScript', level: '15%', color: 'from-blue-600 to-blue-700', category: 'Frontend' },
    { icon: <SiReact />, name: 'React.js', level: '55%', color: 'from-cyan-500 to-cyan-600', category: 'Frontend' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: '30%', color: 'from-gray-800 to-gray-900', category: 'Frontend' },
    { icon: <SiRedux />, name: 'Redux', level: '30%', color: 'from-purple-600 to-purple-700', category: 'Frontend' },
    { icon: <SiNodedotjs />, name: 'Node.js', level: '50%', color: 'from-green-500 to-green-600', category: 'Backend' },
    { icon: <SiExpress />, name: 'Express.js', level: '50%', color: 'from-gray-600 to-gray-700', category: 'Backend' },
    { icon: <SiMongodb />, name: 'MongoDB', level: '40%', color: 'from-green-600 to-green-700', category: 'Database' },
    { icon: <SiMysql />, name: 'MySQL', level: '75%', color: 'from-blue-700 to-blue-800', category: 'Database' },
    // { icon: <SiFirebase />, name: 'Firebase', level: '70%', color: 'from-yellow-600 to-yellow-700', category: 'Backend' },
    // { icon: <SiGit />, name: 'Git', level: '85%', color: 'from-orange-600 to-orange-700', category: 'Tools' },
  ];

  // Education details based on your information
  const education = [
    {
      degree: 'MERN Stack Development',
      institute: 'Webskitter Academy',
      year: '2025',
      grade: 'Certification',
      description: '',
      // description: 'Completed comprehensive training in MongoDB, Express.js, React.js, Node.js with hands-on projects.',
      icon: <FaCertificate />
    },
    {
      degree: 'Diploma in Electrical Engineering',
      institute: 'Saroj Mohan Institute of Technology',
      year: '2020 - 2023',
      grade: 'CGPA: 76.7',
      // description: '',
      icon: <FaGraduationCap />
    }]

    // {
      // degree: 'Higher Secondary (12th)',
      // institute: 'West Bengal Council of Higher Secondary Education',
      // year: '2021',
      // grade: 'Percentage: 57.4%',
      // description: '',
      // icon: <FaGraduationCap />
    // },
    // {
      // degree: 'Secondary (10th)',
      // institute: 'West Bengal Board of Secondary Education',
      // year: '2019',
      // grade: 'Percentage: 44.3%',
      // description: '',
      // icon: <FaGraduationCap />
    // },
  // ];

  // Stats for fresher
  const stats = [
    { icon: FiCode, value: '', label: 'Projects Built', color: 'from-blue-500 to-cyan-500' },
    { icon: FaStar, value: '', label: 'Technologies', color: 'from-yellow-500 to-orange-500' },
    { icon: FiUsers, value: '', label: 'Team Projects', color: 'from-green-500 to-teal-500' },
    { icon: FaCertificate, value: '', label: 'Certifications', color: 'from-purple-500 to-pink-500' },
  ];

  // Hobbies/Interests
  const interests = [
    { icon: FaLaptopCode, name: 'Coding Challenges', color: 'bg-blue-500' },
    { icon: FiBookOpen, name: 'Learning New Tech', color: 'bg-green-500' },
    { icon: FiUsers, name: 'Open Source', color: 'bg-purple-500' },
    { icon: FaHeart, name: 'Problem Solving', color: 'bg-red-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fill-progress');
          }
        });
      },
      { threshold: 0.5 }
    );

    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, [dataLoaded]);

  const handleDownloadResume = () => {
    // Create a PDF link or use actual resume file
    const link = document.createElement('a');
    link.href = '/files/Sourav_Das_Resume.pdf'; // Make sure you have a resume.pdf file in your public folder
    link.download = 'Sourav_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // OffLine Notification
  if (!isOnline) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20'>
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center py-20">
            <div className="text-6xl mb-6 animate-bounce"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No Internet Connection</h2>
            <p className="text-gray-600 mb-8">Please check your connection and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              Retry
            </button>
          </div>

        </div>


      </div>
    )
  }
  return (
    <>
      <Script
        id="About-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 xs:px- sm:px- md:px- lg:px- xl:px- relative z-10">

          {/* Header Section */}
          {
            loading ? (
              <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                <SkeletonLoader className="h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 mx-auto mb-4" />
                <SkeletonLoader className="h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 w-96 xs:w-112 sm:w-128 md:w-144 lg:w-160 mx-auto mb-4" />
                <div className="flex flex-wrap gap-3 xs:gap-4 justify-center mt-4 xs:mt-6">
                  {[1, 2, 3, 4].map((i) => (
                    <SkeletonLoader key={i} className="h-8 xs:h-9 w-20 xs:w-24 rounded-full" />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center ">
                <div className="inline-block relative">
                  <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 animate-gradient-x">
                    About Me
                  </h1>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-50"></div>
                </div>
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-4xl mx-auto font-light animate-fade-in-up">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                    MERN Stack Developer
                  </span>{" "}
                  passionate about building web applications
                </p>
                <div className="flex flex-wrap gap-3 xs:gap-4 justify-center mt-4 xs:mt-6 animate-fade-in">
                  {['Kolkata, India', 'Webskitter Academy', 'Fresher', 'MERN Stack'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700 rounded-full text-xs xs:text-sm sm:text-base font-medium border border-blue-200 hover:scale-105 transition-transform duration-300 cursor-default"
                      style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s both` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* Main Content Grid */}

          <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 md:gap-10 lg:gap-12">

            {/* Left Column - Introduction & Education (7 columns) */}
            <div className="lg:col-span-7 space-y-6 xs:space-y-8 md:space-y-10">

              {/* My Story Section */}
              {loading ? (
                <SkeletonLoader type="card" className="h-96 xs:h-104 sm:h-112 md:h-128 lg:h-144 w-full" />
              ) : (
                <div className="group bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-left">
                  <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                      <FiBookOpen className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      My Journey
                    </h2>
                  </div>

                  <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in">
                      Hello! I&apos;m Sourav Das, an aspiring <span className="font-semibold text-blue-600">MERN Stack Developer</span> based in Kolkata, India.
                      I recently completed my MERN Stack Development course from <span className="font-semibold text-purple-600">Webskitters Academy</span>,
                      and I am currently looking for an opportunity to start my career in the IT industry.
                    </p>

                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in animation-delay-200">
                      During this course, I learned technologies such as <span className="font-semibold text-blue-600">HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, and MongoDB</span>.
                      Through this learning journey, I gained experience in building responsive and dynamic web applications.
                    </p>

                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in animation-delay-400">
                      As a fresher, I am highly motivated to learn, improve my skills, and contribute to real-world projects.
                      I enjoy writing clean, maintainable code and continuously exploring new technologies to become a better developer.
                    </p>

                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in animation-delay-500">
                      I am currently looking for an opportunity where I can start my professional journey,
                      grow as a developer, and contribute to innovative projects.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mt-5 xs:mt-6 sm:mt-8">
                    {[
                      { icon: FiGithub, link: 'https://github.com/', color: 'hover:text-gray-900', label: 'GitHub' },
                      { icon: FiLinkedin, link: 'https://linkedin.com/', color: 'hover:text-blue-600', label: 'LinkedIn' },
                      { icon: FiTwitter, link: 'https://twitter.com/', color: 'hover:text-blue-400', label: 'Twitter' },
                      { icon: FiMail, link: 'mailto:sourav@example.com', color: 'hover:text-red-500', label: 'Email' },
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 xs:p-2.5 sm:p-3 bg-gray-100 text-gray-600 ${social.color} rounded-lg hover:scale-110 transition-all duration-300 relative group`}
                        style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s both` }}
                        aria-label={social.label}
                      >
                        <social.icon className="text-sm xs:text-base sm:text-lg md:text-xl" />
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Section */}
              {loading ? (
                <SkeletonLoader type="card" className="h-96 xs:h-104 sm:h-112 md:h-128 lg:h-144 w-full" />
              ) : (
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-left animation-delay-200">
                  <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                      <FaGraduationCap className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                    </div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Education
                    </h2>
                  </div>

                  <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="group relative p-4 xs:p-5 sm:p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl xs:rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-500 border border-gray-100 hover:scale-[1.02]"
                        style={{ animation: `slideInUp 0.5s ease ${index * 0.1}s both` }}
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-bl-full"></div>
                        <div className="flex items-start gap-3 xs:gap-4">
                          <div className="p-2 xs:p-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                            {edu.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2">
                              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                {edu.degree}
                              </h3>
                              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                                <FiCalendar className="text-xs xs:text-sm" />
                                <span className="text-xs xs:text-sm sm:text-base">{edu.year}</span>
                              </div>
                            </div>
                            <p className="text-purple-600 font-medium text-sm xs:text-base sm:text-lg mb-2">
                              {edu.institute}
                            </p>
                            <p className="text-gray-600 text-xs xs:text-sm sm:text-base mb-2">
                              {edu.description}
                            </p>
                            <div className="inline-block px-3 xs:px-4 py-1 xs:py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-xs xs:text-sm font-semibold">
                              {edu.grade}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Stats, Skills & Interests (5 columns) */}
            <div className="lg:col-span-5 space-y-6 xs:space-y-8 md:space-y-10">

              {/* Stats Cards */}
              {loading ? (
                <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5">
                  {[1, 2, 3, 4].map((i) => (
                    <SkeletonLoader key={i} type="card" className="h-32 xs:h-36 sm:h-40 w-full" />
                  ))}
                </div>
              ) : (
              <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 animate-slide-in-right">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-lg rounded-xl xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105"
                    style={{ animation: `bounceIn 0.6s ease ${index * 0.1}s both` }}
                  >
                    <div className={`w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 bg-gradient-to-r ${stat.color} rounded-lg xs:rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-2 xs:mb-3 group-hover:rotate-12 transition-transform duration-300`}>
                      <stat.icon className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                    </div>
                    <div className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              )}

              {/* Technical Skills Section */}
              {loading ? (
                <SkeletonLoader type="card" className="h-96 xs:h-104 sm:h-112 w-full" />
              ) : (
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-right animation-delay-200">
                <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                  <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                    <FiCode className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Technical Skills
                  </h2>
                </div>

                <div className="space-y-4 xs:space-y-5">
                  {/* Frontend Skills */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-700 mb-2 xs:mb-3">Frontend</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
                      {skills.filter(s => s.category === 'Frontend').map((skill, index) => (
                        <div
                          key={index}
                          className="group relative p-2 xs:p-2.5 sm:p-3 bg-gray-50 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-500"
                          style={{ animation: `fadeInScale 0.5s ease ${index * 0.05}s both` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-1 xs:mb-2">
                              <div className="flex items-center gap-1 xs:gap-2">
                                <span className={`text-sm xs:text-base sm:text-lg md:text-xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                  {skill.icon}
                                </span>
                                <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-800">
                                  {skill.name}
                                </span>
                              </div>
                              <span className={`text-[10px] xs:text-xs sm:text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className="h-1.5 xs:h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`skill-progress h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: '0%' }}
                                data-level={skill.level}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-700 mb-2 xs:mb-3">Backend & Database</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
                      {skills.filter(s => s.category === 'Backend' || s.category === 'Database').map((skill, index) => (
                        <div
                          key={index}
                          className="group relative p-2 xs:p-2.5 sm:p-3 bg-gray-50 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-500"
                          style={{ animation: `fadeInScale 0.5s ease ${index * 0.05 + 0.8}s both` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-1 xs:mb-2">
                              <div className="flex items-center gap-1 xs:gap-2">
                                <span className={`text-sm xs:text-base sm:text-lg md:text-xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                  {skill.icon}
                                </span>
                                <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-800">
                                  {skill.name}
                                </span>
                              </div>
                              <span className={`text-[10px] xs:text-xs sm:text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className="h-1.5 xs:h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`skill-progress h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: '0%' }}
                                data-level={skill.level}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    {/* <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-gray-700 mb-2 xs:mb-3">Tools</h3> */}
                    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
                      {skills.filter(s => s.category === 'Tools').map((skill, index) => (
                        <div
                          key={index}
                          className="group relative p-2 xs:p-2.5 sm:p-3 bg-gray-50 rounded-lg xs:rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-500"
                          style={{ animation: `fadeInScale 0.5s ease ${index * 0.05 + 1.2}s both` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-1 xs:mb-2">
                              <div className="flex items-center gap-1 xs:gap-2">
                                <span className={`text-sm xs:text-base sm:text-lg md:text-xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                  {skill.icon}
                                </span>
                                <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-800">
                                  {skill.name}
                                </span>
                              </div>
                              <span className={`text-[10px] xs:text-xs sm:text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className="h-1.5 xs:h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`skill-progress h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: '0%' }}
                                data-level={skill.level}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )}

              {/* Interests/Hobbies */}
                {loading ? (
                <SkeletonLoader type="card" className="h-40 xs:h-44 sm:h-48 w-full" />
              ) : (
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-right animation-delay-400">
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
                  When I&apos;m not coding...
                </h3>
                <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 bg-gray-100 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                      style={{ animation: `bounceIn 0.5s ease ${index * 0.1 + 0.5}s both` }}
                    >
                      <interest.icon className={`text-xs xs:text-sm sm:text-base md:text-lg text-white p-1 ${interest.color} rounded-full`} />
                      <span className="text-xs xs:text-sm sm:text-base font-medium text-gray-700">
                        {interest.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Location & Contact */}
                  {loading ? (
                <SkeletonLoader type="card" className="h-48 xs:h-52 sm:h-56 w-full" />
              ) : (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-2xl animate-slide-in-right animation-delay-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 xs:gap-4 text-white mb-3 xs:mb-4">
                    <FiMapPin className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-bounce" />
                    <span className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold">Kolkata, India</span>
                  </div>
                  <p className="text-blue-100 text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-6">
                    Open to entry-level opportunities and freelance projects in web development.
                  </p>
                  <div className="flex flex-wrap gap-3 xs:gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-white text-blue-600 font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg text-xs xs:text-sm sm:text-base"
                    >
                      Let&apos;s Connect
                      <FiMail className="text-sm xs:text-base" />
                    </a>
                    <button
                      onClick={handleDownloadResume}
                      className="inline-flex items-center gap-2 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base"
                    >
                      Resume
                      <FiDownload className="text-sm xs:text-base" />
                    </button>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
             {loading ? (
            <div className="mt-10 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24">
              <SkeletonLoader type="card" className="h-48 xs:h-52 sm:h-56 md:h-64 w-full" />
            </div>
          ) : (
          <div className="mt-10 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center animate-fade-in-up animation-delay-800">
            <div className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl xs:rounded-2xl sm:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 xs:mb-4">
                  Ready to Start a Project?
                </h2>
                <p className="text-blue-100 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 max-w-2xl mx-auto">
                  I&and;m currently seeking entry-level opportunities in web development. Feel free to reach out if you&apos;d like to discuss how I can contribute to your team.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl text-xs xs:text-sm sm:text-base"
                  >
                    Contact Me
                  </a>
                  <a
                    href="/portfolio/project"
                    className="px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-xs xs:text-sm sm:text-base"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
          )}
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
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.5s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s ease;
        }
        
        .animate-gradient-x {
          background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .skill-progress {
          --target-width: 0%;
        }
        
        .animate-fill-progress {
          width: var(--target-width) !important;
        }
      `}</style>

        {/* JavaScript for progress bar animation */}
        <script dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const level = entry.target.getAttribute('data-level');
                  entry.target.style.setProperty('--target-width', level);
                  entry.target.classList.add('animate-fill-progress');
                }
              });
            }, { threshold: 0.5 });

            document.querySelectorAll('.skill-progress').forEach(bar => {
              observer.observe(bar);
            });
          });
        `
        }} />
      </div>

    </>
  );
};

export default About;
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { WebPage, WithContext } from "schema-dts";
import { FaLinkedin, FaGithub, FaTwitter, FaCode, FaReact, FaJs, FaCss3Alt, FaNodeJs, FaDownload, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiExpress } from "react-icons/si";

const jsonLdHome: WithContext<WebPage> = {
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

interface AboutDatafild {
  title: string;
  description: string;
  name: string;
  image: string;
}

// Mock data since we're not using Sanity
const mockData: AboutDatafild = {
  title: "Hello, I'm",
  description: "A passionate MERN Stack Developer currently training at Webskitter Academy. I build modern, responsive web applications using React.js, Next.js, Node.js, MongoDB, and Express.js. I'm dedicated to creating efficient and scalable web solutions.",
  name: "Sourav Das",
  image: "/image/sd.jpg",
};

// Tech stack icons - Updated with MERN stack
const techStack = [
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaBootstrap, name: "Bootstrap", color: "text-purple-600" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: FaReact, name: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-black" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
];

// Move SkeletonLoader outside the component to fix the render error
const SkeletonLoader = ({ type = "text", className = "" }: { type?: string; className?: string }) => {
  if (type === "avatar") {
    return (
      <div className={`animate-pulse bg-gray-300 rounded-full ${className}`}></div>
    );
  }
  if (type === "button") {
    return (
      <div className={`animate-pulse bg-gray-300 rounded-lg ${className}`}></div>
    );
  }
  if (type === "icon") {
    return (
      <div className={`animate-pulse bg-gray-300 rounded-full ${className}`}></div>
    );
  }
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
};

const Home: React.FC = () => {
  const [username, setUsername] = useState<AboutDatafild | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setUsername(mockData);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Check internet connection
  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
      if (online) {
        setLoading(false);
      }
    };

    updateOnlineStatus();

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  // Function to handle resume download
const handleDownloadResume = () => {
    // Create a PDF link or use actual resume file
    const link = document.createElement('a');
    link.href = '/files/SOURAV_DAS_CV.pdf'; // Make sure you have a resume.pdf file in your public folder
    link.download = 'SOURAV_DAS_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Script
        id="Home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHome) }}
      />

      <Head>
        <title>Portfolio | Sourav Das - MERN Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Sourav Das, a passionate MERN Stack Developer trained at Webskitter Academy. Specializing in React.js, Next.js, Node.js, MongoDB, Express.js and modern web technologies." />
        <meta name="keywords" content="MERN Stack Developer, React, Next.js, Node.js, MongoDB, Express.js, JavaScript, HTML5, CSS, Bootstrap, TypeScript, Web Development" />
        <meta name="author" content="Sourav Das" />
      </Head>

      {/* Offline Notification */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-2 z-50 animate-pulse">
          ⚠️ You are offline. Some content may not load properly.
        </div>
      )}

      {/* Hero Section - Only background image */}
      <div
        className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/image/image1.jpg')",
        }}
      >
        {/* Content */}
        <div className="container mx-auto relative z-10 py-8 md:py-15">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-10">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 pt-5">
              {/* Title */}
              {loading ? (
                <div className="space-y-4">
                  <SkeletonLoader className="h-8 md:h-10 w-48 mx-auto lg:mx-0" />
                  <SkeletonLoader className="h-12 md:h-16 w-64 mx-auto lg:mx-0" />
                  <SkeletonLoader className="h-32 md:h-40 w-full" />
                  <SkeletonLoader type="button" className="h-12 w-48 mx-auto lg:mx-0" />
                </div>
              ) : (
                <>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl text-black mb-2">
                    {username?.title.split("I'm")[0]}
                    <span className="text-red-500 font-bold"> I&apos;m </span>
                  </h1>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-2">
                    {username?.name}
                  </h2>

                  {/* MERN Stack Developer Text */}
                  <div className="mb-6">
                    <span className="inline-block bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-lg text-lg md:text-xl font-semibold animate-pulse">
                      MERN Stack Developer
                    </span>
                  </div>

                  {/* Small Description */}
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
                    {username?.description}
                  </p>

                  {/* Tech Stack with MERN highlighted */}
                  {/* Tech Stack with MERN highlighted and animations */}
                  <div className="mb-8">
                    <h3 className="text-xl text-gray-700 mb-4 font-semibold" style={{
                      animation: 'fadeIn 1s ease-out'
                    }}>My Tech Stack</h3>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center group cursor-pointer"
                          title={tech.name}
                          style={{
                            animation: `bounceIn 0.6s ease ${index * 0.1}s both`
                          }}
                        >
                          <div
                            className={`p-3 rounded-full bg-gray-800 ${tech.color} text-2xl hover:scale-110 transition-all duration-300 hover:bg-gray-700 border border-gray-700 hover:rotate-12`}
                            style={{
                              animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                            }}
                          >
                            <tech.icon />
                          </div>
                          <span className="text-gray-700 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4" style={{
                      animation: 'slideUp 0.8s ease-out 0.5s both'
                    }}>
                      <p className="text-gray-700 text-md">
                        <span className="text-red-400 font-semibold">Frontend:</span> HTML5, CSS3, Bootstrap, JavaScript, React, Next.js
                      </p>
                      <p className="text-gray-700 text-md mt-1">
                        <span className="text-green-400 font-semibold">Backend:</span> Node.js, Express.js, MongoDB (MERN Stack)
                      </p>
                    </div>
                  </div>

                  <style jsx global>{`
                    @keyframes fadeIn {
                      from { opacity: 0; }
                      to { opacity: 1; }
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
                    
                    @keyframes float {
                      0%, 100% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-5px);
                      }
                    }
                    
                    @keyframes slideUp {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                    <Link href="/portfolio/project">
                      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View My Projects
                      </button>
                    </Link>
                    <button
                      onClick={handleDownloadResume}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <FaDownload /> Download Resume
                    </button>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl bg-gray-800 p-3 rounded-full hover:bg-gray-700 border border-gray-700"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-100 transition-colors duration-300 text-2xl bg-gray-800 p-3 rounded-full hover:bg-gray-700 border border-gray-700"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                    {/* <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-300 text-2xl bg-gray-800 p-3 rounded-full hover:bg-gray-700 border border-gray-700"
                      title="Twitter"
                    >
                      <FaTwitter />
                    </a> */}
                  </div>
                </>
              )}
            </div>

            {/* Right Side - Avatar */}
            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center-safe items-start pt-4 lg:pt-0">
              {loading ? (
                <SkeletonLoader type="avatar" className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" />
              ) : (
                <div className="relative group">
                  <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-red-00 to-blue-00 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <img
                      src={username?.image}
                      alt="Sourav Das - MERN Stack Developer"
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* MERN Stack badge - Responsive positioning */}
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm">
                      <FaCode className="inline mr-1 sm:mr-2" />
                      MERN Stack
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

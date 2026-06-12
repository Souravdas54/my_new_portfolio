'use client';

import Link from 'next/link';
import React from 'react';
import { FaDownload, FaHeart, FaCode, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
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

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/portfolio/about' },
    { name: 'Projects', path: '/portfolio/project' },
    { name: 'Contact', path: '/portfolio/contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/souravdas', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/souravdas', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/souravdas', label: 'Twitter' },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-6 mt-0 shadow-2xl border-t border-gray-700/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sourav Das
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              MERN Stack Developer crafting modern, responsive web applications with cutting-edge technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:sd.sourav54@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <FiMail className="text-lg group-hover:scale-110 transition-transform" />
                <span>sd.sourav54@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMapPin className="text-lg" />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                <FaReact className="text-blue-400" /> React
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                <SiNextdotjs /> Next.js
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                <FaNodeJs className="text-green-500" /> Node.js
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                <SiTailwindcss className="text-teal-400" /> Tailwind
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1">
                <FaCode /> MERN
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            {/* <span className="px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 text-sm">
              <FaHeart className="inline text-red-500 animate-pulse mx-1" />
              Crafted with passion
              <FaHeart className="inline text-red-500 animate-pulse mx-1" />
            </span> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sourav Das. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with <FaReact className="inline text-blue-400 mx-1" /> React, 
              <SiNextdotjs className="inline mx-1" /> Next.js & 
              <SiTailwindcss className="inline text-teal-400 mx-1" /> Tailwind CSS
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </button>
            <Link href="/portfolio/contact">
              <button className="group relative overflow-hidden bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                Get In Touch
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="flex gap-4 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <span className="text-gray-600">•</span>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms
            </a>
            <span className="text-gray-600">•</span>
            <a href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">
            Designed & Developed by Sourav Das with <FaHeart className="inline text-red-500 animate-pulse mx-1" /> 
            using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .hover\\:translate-x-1:hover {
          transform: translateX(0.25rem);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
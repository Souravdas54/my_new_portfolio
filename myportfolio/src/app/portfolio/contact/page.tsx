'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { WebPage, WithContext } from "schema-dts";
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle,
  FiLinkedin, FiGithub, FiTwitter, FiClock, FiMessageCircle,
  FiUser, FiBriefcase, FiGlobe, FiStar
} from 'react-icons/fi';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const jsonLdContact: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact Sourav Das - MERN Stack Developer",
  url: "https://sdportfolio.com/contact",
  description:
    "Get in touch with Sourav Das, a passionate MERN Stack Developer. Contact for freelance opportunities, collaboration, or project inquiries.",
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


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  // Check internet connection
  useEffect(() => {
    const updateOnlinestatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);
    };
    updateOnlinestatus();

    window.addEventListener('online', updateOnlinestatus);
    window.addEventListener('OffLine', updateOnlinestatus);

    return () => {
      window.addEventListener('online', updateOnlinestatus)
      window.addEventListener('OffLine', updateOnlinestatus)
    }
  }, []);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false)
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'sd.sourav54@gamil.com',
      link: 'mailto:sourav.das@example.com',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Kuntighat , Nayasarai , Hooghly',
      link: 'https://maps.google.com/?q=Kolkata',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin />,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/souravdas',
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      delay: 0.4
    },
    {
      icon: <FiGithub />,
      name: 'GitHub',
      href: 'https://github.com/souravdas',
      color: 'bg-gradient-to-r from-gray-800 to-gray-900',
      hoverColor: 'hover:from-gray-900 hover:to-black',
      delay: 0.5
    },

    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210',
      color: 'bg-gradient-to-r from-green-600 to-green-700',
      hoverColor: 'hover:from-green-700 hover:to-green-800',
      delay: 0.7
    },
    {
      icon: <FaTelegramPlane />,
      name: 'Telegram',
      href: 'https://t.me/souravdas',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      delay: 0.8
    },
  ];

  const quickResponses = [
    { icon: <FiClock />, text: 'Response within 24 hours' },
    { icon: <FiMessageCircle />, text: 'Available for freelance' },
    { icon: <FiBriefcase />, text: 'Open to opportunities' },
    { icon: <FiStar />, text: 'Let\'s collaborate' },
  ];

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

  // Offline Notification
  if (!isOnline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center py-20">
            <div className="text-6xl mb-6 animate-bounce">📡</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No Internet Connection</h2>
            <p className="text-gray-600 mb-8">Please check your connection and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />

      <Head>
        <title>Contact | Sourav Das - MERN Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Get in touch with Sourav Das, a passionate MERN Stack Developer. Contact for freelance opportunities, collaboration, or project inquiries." />
        <meta name="keywords" content="Contact MERN Developer, Freelance Developer, Hire React Developer, Kolkata Developer" />
        <meta name="author" content="Sourav Das" />
      </Head>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="min-h-screen py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-full mx-auto">

          {/* Header */}
          {pageLoading ? (
            <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20">
              <SkeletonLoader className="h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 mx-auto mb-4" />
              <SkeletonLoader className="h-6 xs:h-7 sm:h-8 md:h-9 lg:h-10 w-96 xs:w-112 sm:w-128 md:w-144 lg:w-160 mx-auto mb-4" />
              <div className="flex flex-wrap gap-2 xs:gap-3 justify-center mt-4 xs:mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonLoader key={i} className="h-8 xs:h-9 w-24 xs:w-28 rounded-full" />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 animate-fade-in-down lg:mt-5 md:mt-4 sm:mt-4 xs:mt-4">
              <div className="inline-block relative">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 animate-gradient-x">
                  Get In Touch
                </h1>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-50"></div>
              </div>
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 max-w-4xl mx-auto font-light animate-fade-in-up">
                Have a project in mind? Let&apos;s discuss how we can work together
              </p>
              <div className="flex flex-wrap gap-2 xs:gap-3 justify-center mt-4 xs:mt-6 animate-fade-in">
                {quickResponses.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full text-xs xs:text-sm text-gray-700 border border-purple-200"
                    style={{ animation: `fadeIn 0.5s ease ${i * 0.1}s both` }}
                  >
                    <span className="text-purple-600">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 md:gap-10 lg:gap-12">

            {/* Contact Form */}
            {pageLoading ? (
              <SkeletonLoader type="card" className="h-96 xs:h-104 sm:h-112 md:h-128 lg:h-144 w-full" />
            ) : (
              <div className="h-a group bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-left">
                <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                  <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                    <FiSend className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 xs:py-10 sm:py-12 animate-scale-in">
                    <div className="relative inline-block">
                      <FiCheckCircle className="text-5xl xs:text-6xl sm:text-7xl text-green-600 mx-auto mb-4 xs:mb-6 animate-bounce-in" />
                      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-3 xs:mb-4 animate-fade-in-up">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-md mx-auto animate-fade-in-up animation-delay-200">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
                    <div className="group/field relative">
                      <label className="block text-gray-800 font-semibold mb-1 xs:mb-2 text-sm xs:text-base" htmlFor="name">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within/field:text-purple-600 transition-colors duration-300 text-base xs:text-lg" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full pl-10 xs:pl-10 sm:pl-12 pr-4 py-2.5 xs:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500 text-sm xs:text-base font-medium"
                          placeholder="Enter your full name"
                        />
                      </div>
                      {activeField === 'name' && (
                        <div className="absolute -bottom-5 left-0 text-xs text-red-600 font-medium animate-fade-in">
                          Please enter your full name
                        </div>
                      )}
                    </div>

                    <div className="group/field relative">
                      <label className="block text-gray-800 font-semibold mb-1 xs:mb-2 text-sm xs:text-base" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within/field:text-purple-600 transition-colors duration-300 text-base xs:text-lg" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full pl-10 xs:pl-10 sm:pl-12 pr-4 py-2.5 xs:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500 text-sm xs:text-base font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                      {activeField === 'email' && (
                        <div className="absolute -bottom-5 left-0 text-xs text-red-600 font-medium animate-fade-in">
                          Please enter a valid email address
                        </div>
                      )}
                    </div>

                    <div className="group/field relative">
                      <label className="block text-gray-800 font-semibold mb-1 xs:mb-2 text-sm xs:text-base" htmlFor="subject">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 group-focus-within/field:text-purple-600 transition-colors duration-300 text-base xs:text-lg" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setActiveField('subject')}
                          onBlur={() => setActiveField(null)}
                          required
                          className="w-full pl-10 xs:pl-10 sm:pl-12 pr-4 py-2.5 xs:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500 text-sm xs:text-base font-medium"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      {activeField === 'subject' && (
                        <div className="absolute -bottom-5 left-0 text-xs text-red-600 font-medium animate-fade-in">
                          Please enter a subject
                        </div>
                      )}
                    </div>

                    <div className="group/field relative">
                      <label className="block text-gray-800 font-semibold mb-1 xs:mb-2 text-sm xs:text-base" htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FiMessageCircle className="absolute left-3 top-4 text-gray-600 group-focus-within/field:text-purple-600 transition-colors duration-300 text-base xs:text-lg" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          required
                          rows={5}
                          className="w-full pl-10 xs:pl-10 sm:pl-12 pr-4 py-2.5 xs:py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white text-gray-800 placeholder-gray-500 resize-none text-sm xs:text-base font-medium"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      {activeField === 'message' && (
                        <div className="absolute -bottom-5 left-0 text-xs text-red-600 font-medium animate-fade-in">
                          Please enter your message
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`relative w-full py-3 xs:py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm xs:text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 xs:gap-3 overflow-hidden group/btn ${isLoading
                        ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 shadow-lg'
                        }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover/btn:skew-y-12 transition-transform duration-700"></div>
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 xs:w-6 xs:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300 text-white" />
                          <span className="relative z-10">Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Contact Information */}
            <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">

              {/* Contact Cards */}
              {pageLoading ? (
                <div className="space-y-3 xs:space-y-4">
                  {[1, 2, 3].map((i) => (
                    <SkeletonLoader key={i} type="card" className="h-20 xs:h-24 sm:h-28 w-full" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3 xs:space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white/80 backdrop-blur-lg rounded-xl xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105 animate-slide-in-right"
                      style={{ animationDelay: `${info.delay}s` }}
                    >
                      <div className="flex items-center gap-3 xs:gap-4">
                        <div className={`w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 bg-gradient-to-r ${info.color} rounded-lg xs:rounded-lg sm:rounded-xl flex items-center justify-center text-white text-xl xs:text-2xl sm:text-3xl group-hover:rotate-12 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                            {info.title}
                          </h3>
                          <p className="text-xs xs:text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Social Links */}
              {pageLoading ? (
                <SkeletonLoader type="card" className="h-64 xs:h-72 sm:h-80 w-full" />
              ) : (
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-slide-in-right animation-delay-400">
                  <div className="flex items-center gap-3 xs:gap-4 mb-4 xs:mb-6">
                    <div className="p-2 xs:p-2.5 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
                      <FiGlobe className="text-lg xs:text-xl sm:text-2xl md:text-3xl" />
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Connect With Me
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden ${social.color} ${social.hoverColor} text-white rounded-xl p-3 xs:p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-fade-in-scale`}
                        style={{ animationDelay: `${social.delay}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2 xs:gap-3">
                            <span className="text-lg xs:text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300">
                              {social.icon}
                            </span>
                            <span className="text-xs xs:text-sm sm:text-base font-medium">{social.name}</span>
                          </div>
                          <span className="text-xs opacity-80 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Availability Status */}
              {pageLoading ? (
                <SkeletonLoader type="card" className="h-40 xs:h-44 sm:h-48 w-full" />
              ) : (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-2xl animate-slide-in-right animation-delay-600 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 xs:gap-4 text-white mb-3 xs:mb-4">
                      <FiClock className="text-lg xs:text-xl sm:text-2xl md:text-3xl animate-pulse" />
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold">Quick Response</h3>
                    </div>
                    <p className="text-blue-100 text-xs xs:text-sm sm:text-base mb-4">
                      I typically respond within 24 hours. Let&apos;s discuss your project ideas!
                    </p>
                    <div className="flex flex-wrap gap-2 xs:gap-3">
                      <span className="px-3 xs:px-4 py-1 xs:py-1.5 bg-white/20 rounded-full text-white text-xs xs:text-sm border border-white/30">
                        Available for freelance
                      </span>
                      <span className="px-3 xs:px-4 py-1 xs:py-1.5 bg-white/20 rounded-full text-white text-xs xs:text-sm border border-white/30">
                        Open to opportunities
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Map Section */}
              {pageLoading ? (
                <SkeletonLoader type="card" className="h-64 xs:h-72 sm:h-80 w-full" />
              ) : (
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl xs:rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-8 shadow-2xl animate-slide-in-right animation-delay-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-y-12 group-hover:skew-y-12 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 xs:gap-4 mb-4">
                      <div className="w-8 xs:w-10 h-8 xs:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                        <FiMapPin className="text-lg xs:text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">Based in Kolkata</h3>
                        <p className="text-xs xs:text-sm text-gray-300">📍 Kuntighat, Nayasarai, Hooghly</p>
                      </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="relative h-48 xs:h-52 sm:h-56 md:h-64 rounded-xl overflow-hidden group/map shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235963.91225896093!2d88.26372795!3d22.53556495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db482f8851%3A0x1b7e5a2b8c3b0a0d!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1699876543210!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl hover:scale-105 transition-transform duration-500"
                        title="Kolkata Location Map"
                      ></iframe>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                      {/* Location Marker Overlay */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="relative">
                          <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg animate-ping opacity-50"></div>
                          <div className="absolute top-0 left-0 w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Location Details */}
                    <div className="mt-4 flex flex-wrap gap-2 xs:gap-3 justify-center">
                      <div className="px-3 xs:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs xs:text-sm border border-white/20">
                        <span className="font-semibold">📍 Kuntighat</span>
                      </div>
                      <div className="px-3 xs:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs xs:text-sm border border-white/20">
                        <span className="font-semibold">🏠 Nayasarai</span>
                      </div>
                      <div className="px-3 xs:px-4 py-1.5 xs:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-xs xs:text-sm border border-white/20">
                        <span className="font-semibold">📍 Hooghly</span>
                      </div>
                    </div>

                    {/* Open in Google Maps Button */}
                    <a
                      href="https://maps.google.com/?q=Kuntighat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 text-sm xs:text-base font-semibold group/btn"
                    >
                      <FiMapPin className="group-hover/btn:animate-bounce" />
                      Open in Google Maps
                      <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              )}
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
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        
        .animate-bounce-in {
          animation: bounceIn 0.6s ease;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease;
        }
        
        .animate-gradient-x {
          background: linear-gradient(270deg, #a855f7, #ec4899, #a855f7);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x 3s ease infinite;
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
      `}</style>
    </>
  );
};

export default Contact;
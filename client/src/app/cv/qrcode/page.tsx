'use client';

import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
    FiDownload, FiShare2, FiCopy, FiCheck, FiGithub, FiLinkedin, FiMail, FiBriefcase, FiPhone, FiGlobe, FiTwitter, FiInstagram, FiFacebook,
    FiSearch
} from 'react-icons/fi';
import Link from 'next/link';

interface QRCodeOption {
    id: string;
    name: string;
    value: string;
    icon: React.ElementType;
    description: string;
    color: string;
}

const qrOptions: QRCodeOption[] = [
    {
        id: 'portfolio',
        name: 'Portfolio',
        value: 'https://my-new-portfolio-nu-bice.vercel.app/cv',
        icon: FiGlobe,
        description: 'View my portfolio website',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'github',
        name: 'GitHub',
        value: 'https://github.com/Souravdas54',
        icon: FiGithub,
        description: 'Check out my code repositories',
        color: 'from-gray-700 to-gray-900'
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        value: 'www.linkedin.com/in/sourav-das-26753b358',
        icon: FiLinkedin,
        description: 'Connect professionally',
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 'email',
        name: 'Email',
        value: 'sd.sourav.54@gmail.com',
        icon: FiMail,
        description: 'Send me an email',
        color: 'from-red-500 to-red-600'
    },
    //     {
    //         id: 'whatsapp',
    //         name: 'WhatsApp',
    //         value: 'https://wa.me/1234567890',
    //         icon: FiPhone,
    //         description: 'Chat on WhatsApp',
    //         color: 'from-green-500 to-green-600'
    //     },
    //     {
    //         id: 'twitter',
    //         name: 'Twitter',
    //         value: 'https://twitter.com/souravdas',
    //         icon: FiTwitter,
    //         description: 'Follow me on Twitter',
    //         color: 'from-sky-500 to-sky-600'
    //     },
    //     {
    //         id: 'instagram',
    //         name: 'Instagram',
    //         value: 'https://instagram.com/souravdas',
    //         icon: FiInstagram,
    //         description: 'Follow on Instagram',
    //         color: 'from-pink-500 to-purple-600'
    //     },
    //     {
    //         id: 'facebook',
    //         name: 'Facebook',
    //         value: 'https://facebook.com/souravdas',
    //         icon: FiFacebook,
    //         description: 'Connect on Facebook',
    //         color: 'from-blue-700 to-blue-800'
    //     },
    //     {
    //         id: 'vcard',
    //         name: 'Business Card',
    //         value: `BEGIN:VCARD
    // VERSION:3.0
    // FN:Sourav Das
    // ORG:MERN Developer
    // TITLE:Full Stack Developer
    // TEL:+1234567890
    // EMAIL:sourav.das@example.com
    // URL:https://souravdas.dev
    // ADR:;;City;State;PIN;Country
    // END:VCARD`,
    //         icon: FiBriefcase,
    //         description: 'Save my contact info',
    //         color: 'from-purple-500 to-purple-700'
    //     }
];

const QRCodePage: React.FC = () => {
    const [selectedQR, setSelectedQR] = useState<QRCodeOption>(qrOptions[0]);
    const [qrSize, setQrSize] = useState<number>(200);
    const [copied, setCopied] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500);
    }, []);

    const filteredOptions = qrOptions.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDownload = () => {
        const element = document.querySelector('#qr-code-canvas');
        if (element) {
            const svg = element.querySelector('svg');
            if (svg) {
                const svgData = new XMLSerializer().serializeToString(svg);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();

                img.onload = () => {
                    canvas.width = qrSize;
                    canvas.height = qrSize;
                    ctx?.drawImage(img, 0, 0, qrSize, qrSize);
                    const pngFile = canvas.toDataURL('image/png');
                    const downloadLink = document.createElement('a');
                    downloadLink.download = `${selectedQR.id}-qrcode.png`;
                    downloadLink.href = pngFile;
                    downloadLink.click();
                };

                img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
            }
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(selectedQR.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${selectedQR.name} QR Code`,
                    text: `Scan this QR code to ${selectedQR.description}`,
                    url: selectedQR.value,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            handleCopyLink();
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                    <p className="mt-4 text-gray-600">Loading QR Codes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 pt-20 pb-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
            <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto">
                {/* Header - Responsive */}
                <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 mt-5">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 xs:mb-3 sm:mb-4 px-2">
                        QR Code Generator
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4">
                        Scan QR codes to connect with me across different platforms
                    </p>
                </div>

                {/* Main Grid - Responsive */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 xs:gap-5 sm:gap-6 md:gap-8">

                    {/* Left Sidebar - QR Options - Responsive */}
                    <div className="lg:col-span-4 xl:col-span-3 w-full">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl sticky top-24 p-3 xs:p-4 sm:p-5 md:p-6">
                            {/* Search Box */}
                            <div className="mb-4 xs:mb-5 sm:mb-6">
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs xs:text-sm sm:text-base" />
                                    <input
                                        type="text"
                                        placeholder="Search QR codes..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-8 xs:pl-9 sm:pl-10 pr-3 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50"
                                    />
                                </div>
                            </div>

                            {/* Options List - Responsive Height */}
                            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 max-h-[400px] xs:max-h-[450px] sm:max-h-[500px] md:max-h-[550px] lg:max-h-[600px] overflow-y-auto custom-scrollbar">
                                {filteredOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedQR(option)}
                                        className={`w-full text-left p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-lg xs:rounded-xl transition-all duration-300 flex items-center gap-2 xs:gap-3 ${selectedQR.id === option.id
                                                ? `bg-gradient-to-r ${option.color} text-white shadow-lg transform scale-[1.02]`
                                                : `${option.color} hover:shadow-md text-gray-700`
                                            }`}
                                    >
                                        <option.icon className={`text-base xs:text-lg sm:text-xl flex-shrink-0 ${selectedQR.id === option.id ? 'text-white' : 'text-gray-600'}`} />
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-semibold text-xs xs:text-sm sm:text-base truncate ${selectedQR.id === option.id ? 'text-white' : 'text-gray-800'}`}>
                                                {option.name}
                                            </p>
                                            <p className={`text-[10px] xs:text-xs hidden sm:block truncate ${selectedQR.id === option.id ? 'text-white/80' : 'text-gray-500'}`}>
                                                {option.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - QR Code Display - Responsive */}
                    <div className="lg:col-span-8 xl:col-span-9 w-full">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl xs:rounded-2xl shadow-xl p-4 xs:p-5 sm:p-6 md:p-8">

                            {/* QR Code Display Area */}
                            <div className="flex flex-col items-center justify-center mb-6 xs:mb-8 sm:mb-10">
                                <div
                                    id="qr-code-canvas"
                                    className="bg-white p-4 xs:p-5 sm:p-6 md:p-8 rounded-xl xs:rounded-2xl shadow-lg inline-block"
                                    style={{
                                        boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <QRCodeSVG
                                        value={selectedQR.value}
                                        size={qrSize}
                                        bgColor={"#ffffff"}
                                        // fgColor={"#4F46E5"}
                                        level={"H"}
                                        includeMargin={true}
                                    />
                                </div>

                                {/* Size Slider - Responsive */}
                                <div className="mt-5 xs:mt-6 sm:mt-8 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-xs xs:text-sm sm:text-base font-medium text-gray-700">
                                            QR Code Size
                                        </label>
                                        <span className="text-xs xs:text-sm sm:text-base font-semibold text-blue-600">
                                            {qrSize}px
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="140"
                                        max="280"
                                        value={qrSize}
                                        onChange={(e) => setQrSize(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        style={{
                                            background: `linear-gradient(to right, #4F46E5 0%, #4F46E5 ${((qrSize - 140) / 140) * 100}%, #e5e7eb ${((qrSize - 140) / 140) * 100}%, #e5e7eb 100%)`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Selected QR Info - Responsive */}
                            <div className="text-center mb-6 xs:mb-8">
                                <div className="flex items-center justify-center gap-2 xs:gap-3 mb-2">
                                    <selectedQR.icon className="text-xl xs:text-2xl sm:text-3xl text-blue-500" />
                                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                                        {selectedQR.name} QR Code
                                    </h2>
                                </div>
                                <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-3">
                                    {selectedQR.description}
                                </p>

                                {/* Link Display - Responsive */}
                                <div className="flex items-center justify-center gap-1 xs:gap-2 max-w-full overflow-hidden">
                                    <div className="bg-gray-50 px-2 xs:px-3 py-1 xs:py-1.5 rounded-lg border border-gray-200 flex-1 max-w-[200px] xs:max-w-[300px] sm:max-w-[400px] md:max-w-[500px] overflow-hidden">
                                        <code className="text-[9px] xs:text-[10px] sm:text-[15px] lg:text-[16px] text-gray-600 truncate block">
                                            {selectedQR.value.length > 40
                                                ? `${selectedQR.value.substring(0, 40)}...`
                                                : selectedQR.value}
                                        </code>
                                    </div>
                                    <button
                                        onClick={handleCopyLink}
                                        className="p-1.5 xs:p-2 hover:bg-gray-100 rounded-lg transition flex-shrink-0"
                                        title="Copy link"
                                    >
                                        {copied ? <FiCheck className="text-green-500 text-sm xs:text-base" /> : <FiCopy className="text-gray-500 text-sm xs:text-base" />}
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons - Responsive Grid */}
                            <div className="flex xs:flex-col gap-3 xs:gap-4 justify-center mb-8 xs:mb-10">
                                <button
                                    onClick={handleDownload}
                                    className="w-60 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg xs:rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base"
                                >
                                    <FiDownload className="text-sm xs:text-base" />
                                    <span>Download QR Code</span>
                                </button>
                                <button
                                    onClick={handleShare}
                                    className="w-50 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg xs:rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-xs xs:text-sm sm:text-base"
                                >
                                    <FiShare2 className="text-sm xs:text-base" />
                                    <span>Share QR Code</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        
        @media (min-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
        }
      `}</style>
        </div>
    );
};

export default QRCodePage;
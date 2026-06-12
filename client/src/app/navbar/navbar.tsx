'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiUser, FiBell, FiChevronDown, FiMenu, FiX, FiHome, FiInfo, FiMail, FiCode, FiLogOut, FiSettings, FiUserCheck, FiGrid } from 'react-icons/fi';

interface NavigationItem {
    name: string;
    path: string;
    icon: React.ElementType;
}

const navigation: NavigationItem[] = [
    { name: 'Home', path: '/', icon: FiHome },
    { name: 'About', path: '../portfolio/about', icon: FiInfo },
    { name: 'Projects', path: '../portfolio/project', icon: FiCode },
    { name: 'Contact', path: '../portfolio/contact', icon: FiMail },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
    }, [pathname]);

    const isActive = (path: string): boolean => pathname === path;

    // Direct navigation to QR code page
    const handleQRCodeClick = () => {
        router.push('/cv/qrcode');
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl'
            : 'bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900'
            }`}>
            <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 max-w-full mx-auto">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 2xl:h-24">
                    {/* Logo & Name - Responsive sizing */}
                    <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
                        {/* Logo Image - Responsive sizes */}
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-300 shadow-lg">
                            <Image
                                src="/image/sd.jpg"
                                alt="Sourav Das Logo"
                                fill
                                sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 44px, (max-width: 1280px) 48px, (max-width: 1536px) 56px, 64px"
                                className="object-cover"
                            />
                        </div>

                        {/* Name & Title - Hidden on xs, visible sm and up */}
                        <div className="hidden xs:flex flex-col">
                            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300 leading-tight">
                                Sourav Das
                            </span>
                            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-blue-300 font-medium">
                                MERN Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Hidden on mobile, visible from md */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3 2xl:space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`px-3 lg:px-4 xl:px-5 2xl:px-6 py-2 lg:py-2.5 xl:py-3 2xl:py-4 rounded-xl text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 ${isActive(item.path)
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <item.icon className="text-sm lg:text-base xl:text-lg 2xl:text-xl" />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right side items - Responsive sizing */}
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
                        {/* Notification Button - Hidden on xs, visible sm and up */}
                        <button
                            className="hidden sm:flex relative p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4 rounded-full text-blue-200 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                            aria-label="Notifications"
                        >
                            <FiBell className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                            <span className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                        {/* QR CODE BUTTON - Direct Navigation (No Dropdown) */}
                        <button
                            onClick={handleQRCodeClick}
                            className="hidden sm:flex items-center space-x-2 lg:space-x-3 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl shadow-lg">
                                QR
                            </div>
                            <div className="hidden lg:flex flex-col items-start">
                                <span className="text-white font-semibold text-xs xl:text-sm 2xl:text-base">QR Code</span>
                                <span className="text-blue-300 text-[10px] xl:text-xs 2xl:text-sm">Generator</span>
                            </div>
                        </button>


                        {/* Profile Dropdown - Visible from sm */}
                        <div className="relative hidden sm:block">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center space-x-2 lg:space-x-3 p-1.5 sm:p-2 md:p-2.5 lg:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl shadow-lg">
                                    SD
                                </div>
                                <div className="hidden lg:flex flex-col items-start">
                                    <span className="text-white font-semibold text-xs xl:text-sm 2xl:text-base">Sourav Das</span>
                                    <span className="text-blue-300 text-[10px] xl:text-xs 2xl:text-sm">Premium</span>
                                </div>
                                <FiChevronDown className={`hidden lg:block text-blue-300 text-sm xl:text-base 2xl:text-lg transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu - Responsive */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 py-2 z-50">
                                    <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-200/30">
                                        <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 font-medium truncate">sourav.das@example.com</p>
                                    </div>
                                    <Link href="/profile" className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <FiUserCheck className="text-sm sm:text-base" />
                                        My Profile
                                    </Link>
                                    <Link href="/settings" className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                        <FiSettings className="text-sm sm:text-base" />
                                        Settings
                                    </Link>
                                    <div className="border-t border-gray-200/30 mt-2 pt-2">
                                        <button className="flex items-center gap-2 sm:gap-3 w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm lg:text-base xl:text-lg text-red-600 hover:bg-red-50 transition-colors">
                                            <FiLogOut className="text-sm sm:text-base" />
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button - Visible on xs and sm, hidden from md */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden inline-flex items-center justify-center p-1.5 sm:p-2 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? (
                                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                            ) : (
                                <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - Responsive for xs to sm */}
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-b from-blue-900 to-indigo-900 border-t border-blue-800/50">
                    <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${isActive(item.path)
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <item.icon className="text-base sm:text-lg" />
                                {item.name}
                            </Link>
                        ))}
                        {/* Mobile QR Code Link */}
                        <Link
                            href="/cv/qrcode"
                            className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 text-blue-100 hover:text-white hover:bg-white/10"
                        >
                            <FiGrid className="text-base sm:text-lg" />
                            QR Code Generator
                        </Link>
                        {/* Mobile Profile Section */}
                        <div className="pt-4 sm:pt-6 border-t border-blue-800/50 mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                                    SD
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base">Sourav Das</p>
                                    {/* <p className="text-blue-300 text-xs sm:text-sm">sourav.das@example.com</p> */}
                                </div>
                            </div>

                            {/* Mobile Notification */}
                            <button className="flex items-center gap-3 sm:gap-4 w-full px-3 sm:px-4 py-3 sm:py-4 text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                                <div className="relative">
                                    <FiBell className="text-base sm:text-lg" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                                        3
                                    </span>
                                </div>
                                <span className="text-sm sm:text-base">Notifications</span>
                            </button>

                            {/* Mobile Action Buttons */}
                            {/* <div className="grid grid-cols-2 gap-2 px-3 sm:px-4">
                                <Link href="/profile" className="text-center px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 text-blue-100 rounded-xl hover:bg-white/20 transition-colors text-xs sm:text-sm">
                                    Profile
                                </Link>
                                <Link href="/settings" className="text-center px-3 py-2.5 sm:px-4 sm:py-3 bg-white/10 text-blue-100 rounded-xl hover:bg-white/20 transition-colors text-xs sm:text-sm">
                                    Settings
                                </Link>
                            </div> */}

                            <button className="flex items-center gap-3 sm:gap-4 w-full px-3 sm:px-4 py-3 sm:py-4 text-red-300 hover:text-red-200 hover:bg-red-500/10 rounded-xl transition-colors">
                                <FiLogOut className="text-base sm:text-lg" />
                                <span className="text-sm sm:text-base">Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
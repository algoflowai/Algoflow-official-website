"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons-react";
import ContactPopup from "./ContactPopup";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when the menu is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
      <nav
        className={`fixed flex justify-center items-center top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "shadow-[0_8px_32px_rgba(0,0,0,0.1)] bg-white/96 backdrop-blur-xl border-b border-green-500/10"
          : "bg-white/98 border-b border-transparent"
          }`}
      >
        <div className="flex justify-between items-center py-4 px-6 lg:px-8 h-20 w-full max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group text-2xl font-bold font-logo focus:outline-none flex items-center gap-1">
              <span className="text-green-500 group-hover:text-green-400 transition-colors duration-300">Algo</span>
              <span className="text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Flow</span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5 ml-0.5 group-hover:bg-green-100 transition-all duration-300">AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <NavLink href="#" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="/#services" onClick={closeMenu}>
              Services
            </NavLink>
            <NavLink href="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink href="/blog" onClick={closeMenu}>
              Blogs
            </NavLink>
          </div>

          {/* Desktop CTA + Theme Toggle */}
          <div className="items-center hidden lg:flex gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="theme-toggle"
              >
                <span className="theme-toggle-knob">
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
                  )}
                </span>
              </button>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-semibold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 ease-out hover:scale-[1.03] flex-1 sm:flex-none min-w-[140px] sm:min-w-[180px]"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative mb-6 w-10 h-10 flex items-center justify-center text-gray-700 hover:text-green-500 focus:outline-none transition-colors duration-300"
            >
              <div className="relative">
                <IconMenu2
                  size={30}
                  className={`absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                />
                <IconX
                  size={30}
                  className={`absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-screen bg-[var(--nav-bg)] z-[100] transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-[var(--border)] bg-[var(--nav-bg)] sticky top-0 z-50">
              <Link href="/" className="text-xl font-bold focus:outline-none flex items-center gap-1">
                <span className="text-green-500">Algo</span><span className="text-[var(--text-primary)]">Flow</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded px-1.5 py-0.5 ml-0.5">AI</span>
              </Link>
              <button
                onClick={closeMenu}
                className="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] hover:text-green-500 transition-colors"
              >
                <IconX size={30} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col px-6 py-4 space-y-4 border-b border-[var(--border)] bg-[var(--nav-bg)]">
              <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
              <MobileNavLink href="/#services" onClick={closeMenu}>Services</MobileNavLink>
              <MobileNavLink href="/projects" onClick={closeMenu}>Projects</MobileNavLink>
              <MobileNavLink href="/blog" onClick={closeMenu}>Blogs</MobileNavLink>
            </div>

            {/* Social Media Icons */}
            <div className="px-6 py-8 mb-14 border-t border-[var(--border)]">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-4 mb-6">
                <SocialIcon icon={IconBrandGithub} href="#" />
                <SocialIcon icon={IconBrandLinkedin} href="#" />
                <SocialIcon icon={IconBrandTwitter} href="#" />
                <SocialIcon icon={IconBrandInstagram} href="#" />
              </div>

              {/* Connect Now Button */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  closeMenu();
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-[var(--text-secondary)] hover:text-green-500 transition-all duration-300 font-medium group text-sm tracking-wide"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block text-[var(--text-secondary)] hover:text-green-500 transition-all duration-300 text-lg font-medium py-2 border-b border-transparent hover:border-green-200 transform hover:translate-x-2"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-green-500 transition-colors duration-300"
    >
      <Icon size={24} />
    </a>
  );
}
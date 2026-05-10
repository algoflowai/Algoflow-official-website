"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconX,
  IconMenu2,
  IconChevronDown,
  IconPhone,
  IconMail,
  IconStar,
} from "@tabler/icons-react";
import ContactPopup from "./ContactPopup";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

// ─── Top Contact Bar ──────────────────────────────────────────────
function TopBar({ hidden }) {
  const { theme } = useTheme();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-9 text-[11px] font-medium"
      animate={{ y: hidden ? -40 : 0 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: theme === "dark"
          ? "linear-gradient(90deg, #050d1a 0%, #0a1628 50%, #050d1a 100%)"
          : "linear-gradient(90deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)",
        borderBottom: "1px solid rgba(34,197,94,0.15)",
      }}
    >
      {/* Left: trust badge */}
      <div className="hidden md:flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
        <IconStar size={11} className="text-yellow-400 fill-yellow-400" />
        <span>Trusted by <strong style={{ color: "var(--text-primary)" }}>50+ companies</strong> worldwide</span>
      </div>

      {/* Right: contact links */}
      <div className="flex items-center gap-4 ml-auto">
        <a
          href="tel:+917452833648"
          className="flex items-center gap-1.5 hover:text-green-500 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <IconPhone size={12} />
          <span className="hidden sm:inline">+91-7452833648</span>
          <span className="sm:hidden font-semibold text-green-500">Call Now</span>
        </a>
        <span className="opacity-20 hidden sm:inline">|</span>
        <a
          href="mailto:info@algoflowai.com"
          className="hidden sm:flex items-center gap-1.5 hover:text-green-500 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <IconMail size={12} />
          info@algoflowai.com
        </a>
      </div>
    </motion.div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about-us" },
  {
    label: "Services",
    href: "/#services",
    dropdown: [
      { label: "Mobile App Development", href: "/#services", icon: "M" },
      { label: "Web Design & Development", href: "/#services", icon: "W" },
      { label: "AI & Computer Vision", href: "/#services", icon: "A" },
      { label: "NLP & LLMs", href: "/#services", icon: "N" },
      { label: "Workflow Automation", href: "/#services", icon: "W" },
      { label: "Agentic AI", href: "/agentic-ai", icon: "G" },
    ],
  },
  {
    label: "Industries",
    href: "/#services",
    dropdown: [
      { label: "Agentic AI", href: "/agentic-ai", icon: "🧠" },
      { label: "Manufacturing & Industry 4.0", href: "/industries/manufacturing", icon: "⚙️" },
      { label: "Healthcare & ABDM", href: "/industries/healthcare", icon: "🏥" },
      { label: "FinTech & Banking", href: "/#agentic-ai", icon: "🏦" },
      { label: "Oil & Gas", href: "/industries/manufacturing#oil-gas", icon: "⛽" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme, mounted } = useTheme();
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const dropdownRef = useRef(null);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    if (y > lastY.current && y > 120) setHidden(true);
    else setHidden(false);
    lastY.current = y;
  });

  // Active section detection
  useEffect(() => {
    const sections = ["hero", "agentic-ai", "about-us", "development", "services", "clients", "recognitions"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}

      {/* Top utility bar */}
      <TopBar hidden={hidden} />

      <motion.header
        className="fixed left-0 right-0 z-50 flex justify-center px-4"
        style={{ top: "36px", paddingTop: "6px" }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.nav
          className="w-[90%] max-w-[1400px] flex items-center justify-between px-4 sm:px-6 h-16 rounded-2xl"
          animate={{
            background: scrolled
              ? theme === "dark"
                ? "rgba(6,13,27,0.88)"
                : "rgba(255,255,255,0.88)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
            boxShadow: scrolled
              ? "0 4px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(34,197,94,0.1)"
              : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group select-none">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 12px rgba(34,197,94,0.4)" }}>
              <span className="text-white font-black text-sm">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center">
                <motion.span
                  className="text-lg font-extrabold text-green-500"
                  whileHover={{ scale: 1.03 }}
                >
                  Algo
                </motion.span>
                <span className="text-lg font-extrabold" style={{ color: "var(--text-primary)" }}>Flow AI</span>
              </div>
              <span className="text-[9px] font-medium tracking-widest uppercase hidden sm:block" style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}>
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span className="group-hover:text-green-500 transition-colors">{link.label}</span>
                      <motion.span
                        animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconChevronDown size={14} className="group-hover:text-green-500 transition-colors" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl p-2 shadow-2xl border"
                          style={{
                            background: theme === "dark" ? "rgba(6,13,27,0.97)" : "rgba(255,255,255,0.97)",
                            backdropFilter: "blur(24px)",
                            borderColor: "rgba(34,197,94,0.15)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(34,197,94,0.1)",
                          }}
                        >
                          {link.dropdown.map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04 }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group/item"
                                style={{ color: "var(--text-secondary)" }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(34,197,94,0.08)";
                                  e.currentTarget.style.color = "var(--text-primary)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "var(--text-secondary)";
                                }}
                              >
                                <span className="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold flex-shrink-0">
                                  {item.icon}
                                </span>
                                <span className="font-medium leading-tight">{item.label}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Call Now — desktop */}
            <motion.a
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors"
              style={{
                borderColor: "rgba(34,197,94,0.3)",
                color: "#22c55e",
                background: "rgba(34,197,94,0.06)",
              }}
              whileHover={{ scale: 1.04, background: "rgba(34,197,94,0.12)" }}
              whileTap={{ scale: 0.97 }}
            >
              <IconPhone size={13} />
              Call Now
            </motion.a>
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative w-9 h-9 rounded-xl flex items-center justify-center border transition-colors duration-200"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  borderColor: "rgba(34,197,94,0.2)",
                  color: "#4ade80",
                }}
                whileHover={{ scale: 1.08, background: "rgba(34,197,94,0.15)" }}
                whileTap={{ scale: 0.93 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    {theme === "dark" ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </svg>
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            )}

            {/* CTA — desktop */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                boxShadow: "0 0 20px rgba(34,197,94,0.25)",
              }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 32px rgba(34,197,94,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Free Consultation
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.span>
            </motion.button>

            {/* Hamburger — mobile */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center border"
              style={{
                borderColor: "rgba(34,197,94,0.2)",
                background: "rgba(34,197,94,0.06)",
                color: "var(--text-primary)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute"
                >
                  {isOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] lg:hidden flex flex-col"
              style={{
                background: theme === "dark" ? "rgba(6,13,27,0.98)" : "rgba(255,255,255,0.98)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(34,197,94,0.12)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "rgba(34,197,94,0.1)" }}>
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                    <span className="text-white font-black text-xs">A</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-base font-extrabold text-green-500">Algo</span>
                      <span className="text-base font-extrabold" style={{ color: "var(--text-primary)" }}>Flow AI</span>
                    </div>
                    <span className="text-[8px] font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>Private Limited</span>
                  </div>
                </Link>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.08)", color: "var(--text-secondary)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconX size={16} />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                    >
                      {link.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {link.label}
                            <motion.span animate={{ rotate: activeDropdown === link.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <IconChevronDown size={14} />
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden ml-2"
                              >
                                {link.dropdown.map((item, j) => (
                                  <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.04 }}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors mb-0.5"
                                      style={{ color: "var(--text-secondary)" }}
                                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34,197,94,0.08)"; e.currentTarget.style.color = "#22c55e"; }}
                                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                                    >
                                      <span className="w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-[10px] font-bold">
                                        {item.icon}
                                      </span>
                                      {item.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                          style={{ color: "var(--text-primary)" }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34,197,94,0.08)"; e.currentTarget.style.color = "#22c55e"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-primary)"; }}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 pb-8 pt-4 border-t space-y-3" style={{ borderColor: "rgba(34,197,94,0.1)" }}>
                {/* Quick contact */}
                <div className="grid grid-cols-2 gap-2">
                  <motion.a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border"
                    style={{ borderColor: "rgba(34,197,94,0.3)", color: "#22c55e", background: "rgba(34,197,94,0.06)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <IconPhone size={13} /> Call Now
                  </motion.a>
                  <motion.a
                    href="mailto:info@algoflowai.com"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border"
                    style={{ borderColor: "rgba(34,197,94,0.3)", color: "#22c55e", background: "rgba(34,197,94,0.06)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <IconMail size={13} /> Email Us
                  </motion.a>
                </div>
                <motion.button
                  onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 24px rgba(34,197,94,0.3)" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation
                </motion.button>
                <div className="flex justify-center gap-4">
                  {[
                    { icon: IconBrandLinkedin, href: "https://linkedin.com/company/algoflowai" },
                    { icon: IconBrandTwitter, href: "https://twitter.com/algoflowai" },
                    { icon: IconBrandInstagram, href: "https://instagram.com/algoflowai" },
                  ].map(({ icon: Icon, href }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl flex items-center justify-center border transition-colors"
                      style={{ borderColor: "rgba(34,197,94,0.2)", color: "var(--text-secondary)" }}
                      whileHover={{ scale: 1.12, color: "#22c55e", borderColor: "rgba(34,197,94,0.5)" }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

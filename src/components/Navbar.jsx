import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import logoSrc from "../assets/vbss-logo.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleMobileLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 text-white shadow-xl bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 border-b border-blue-800/30">
      {/* Top accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2 sm:gap-3"
            >
              <img
                src={logoSrc}
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-10 object-contain"
              />
              <h1 className="text-sm sm:text-lg lg:text-2xl font-bold truncate">
                <span className="hidden sm:inline">
                  Vishwa Bharati Shiksha Sadan
                </span>
                <span className="sm:hidden">VBSS</span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1 lg:gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/student", label: "Student" },
              { to: "/registration", label: "Register" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm lg:text-base relative overflow-hidden group ${
                    isActive(link.to)
                      ? "text-white"
                      : "text-gray-200 hover:text-white hover:bg-blue-700/50"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.to) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:to-purple-400/20 rounded-lg transition-all duration-300"></div>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-6 h-0.5 bg-white block transition-all duration-300 origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300 origin-center"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 mb-4 border border-gray-700/50">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/facilities", label: "Facilities" },
                  { to: "/student", label: "Student" },
                  { to: "/registration", label: "Register" },
                  { to: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <motion.div
                    key={link.to}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={handleMobileLinkClick}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive(link.to)
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-300 hover:bg-blue-700/50 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

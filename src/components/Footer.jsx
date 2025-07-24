import { NavLink } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 mt-8 sm:mt-12 pt-8 sm:pt-12 pb-6 text-gray-300 text-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Address */}
          <motion.div
            variants={itemVariants}
            className="text-center sm:text-left"
          >
            <motion.img
              src="https://tse4.mm.bing.net/th/id/OIP.dYYZuUl1R4RwUTtFMrCitgAAAA?pid=Api&P=0&h=180"
              width="50"
              alt="logo"
              className="mb-3 sm:mb-4 mx-auto sm:mx-0 rounded-lg shadow-md"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3
              className="text-lg font-bold text-white mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Vishwa Bharati Shiksha Sadan
            </motion.h3>
            <p className="text-gray-400 mb-2 leading-relaxed">
              Bihiya Chaurasta Bhojpur Bihar (802154)
            </p>
            <motion.a
              href="mailto:info@vishwabharati.com"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              info@vishwabharati.com
            </motion.a>
          </motion.div>

          {/* Explore Section */}
          <motion.div variants={itemVariants}>
            <h6 className="font-bold mb-3 sm:mb-4 text-white text-base">
              Explore
            </h6>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/welcome"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Welcome
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/school-profile"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  School Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Gallery
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* General Pages */}
          <motion.div variants={itemVariants}>
            <h6 className="font-bold mb-3 sm:mb-4 text-white text-base">
              General Pages
            </h6>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/teacher-data"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Teacher Data
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/registration"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  New Student Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/facilities"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Facilities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div variants={itemVariants}>
            <h6 className="font-bold mb-3 sm:mb-4 text-white text-base">
              Connect With Us
            </h6>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {/* Twitter */}
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56c-.89.39-1.85.66-2.86.78a5.03 5.03 0 0 0 2.21-2.78c-.96.57-2.01.98-3.14 1.2a5.03 5.03 0 0 0-8.56 4.58A14.26 14.26 0 0 1 1.67 3.15a5.02 5.02 0 0 0 1.56 6.7A5.01 5.01 0 0 1 .96 9.1v.06a5.02 5.02 0 0 0 4.03 4.92 5.04 5.04 0 0 1-2.27.09 5.02 5.02 0 0 0 4.69 3.48A10.1 10.1 0 0 1 0 20.54a14.23 14.23 0 0 0 7.71 2.26c9.26 0 14.32-7.67 14.32-14.32 0-.22 0-.44-.02-.66A10.24 10.24 0 0 0 24 4.56z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.5.3.9.7 1.2 1.2.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.5-.7.9-1.2 1.2-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.5-.3-.9-.7-1.2-1.2-.3-.5-.5-1.2-.6-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.5.7-.9 1.2-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.5.2 4.4.5 3.6 1 .8 1.9 0 3.5 0 7c0 1.3 0 1.7.1 5s.1 3.6.1 5c0 3.5.8 5.1 3.6 6 1 .4 2.2.7 3.6.8 1.3.1 1.7.1 5 .1s3.6 0 5-.1c1.4-.1 2.6-.4 3.6-.8 2.8-.9 3.6-2.5 3.6-6 0-1.3 0-1.7-.1-5s-.1-3.6-.1-5c0-3.5-.8-5.1-3.6-6-1-.4-2.2-.7-3.6-.8C15.7 0 15.3 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.6c0 .8-.6 1.4-1.4 1.4S15.6 5.2 15.6 4.4 16.2 3 17 3s1.4.6 1.4 1.4z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Vishwa Bharati Shiksha Sadan. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ExamSchedule from "../components/ExamSchedule";
import Announcements from "../components/Announcements";
import StudyMaterial from "../components/StudyMaterial";
import {
  FaBook,
  FaBullhorn,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const Section = ({ title, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="mb-4 sm:mb-6 bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden border border-gray-100 no-focus-outline"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -1 }}
    >
      <motion.button
        className="flex items-center w-full text-left text-gray-800 font-bold text-lg sm:text-xl p-4 sm:p-5 focus:outline-none focus:ring-0 focus:border-none hover:bg-gray-50 transition-colors duration-200 border-none outline-none"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
        whileTap={{ scale: 0.98 }}
        style={{ outline: "none", border: "none" }}
      >
        <motion.span
          className="mr-3 text-blue-600 text-xl sm:text-2xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
        <span className="flex-1">{title}</span>
        <motion.span
          className="ml-auto text-gray-500"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FaChevronDown />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const QuickLinks = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const links = [
    {
      href: "#announcements",
      icon: FaBullhorn,
      label: "Announcements",
      bgClass:
        "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
      borderClass: "border-blue-200",
      iconClass: "text-blue-600 group-hover:text-blue-700",
      textClass: "text-blue-800",
    },
    {
      href: "#exam-schedule",
      icon: FaCalendarAlt,
      label: "Exam Schedule",
      bgClass:
        "bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200",
      borderClass: "border-green-200",
      iconClass: "text-green-600 group-hover:text-green-700",
      textClass: "text-green-800",
    },
    {
      href: "#study-material",
      icon: FaBook,
      label: "Study Material",
      bgClass:
        "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
      borderClass: "border-purple-200",
      iconClass: "text-purple-600 group-hover:text-purple-700",
      textClass: "text-purple-800",
    },
  ];

  return (
    <motion.div
      className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05 }}
    >
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          className={`flex flex-col items-center p-4 sm:p-6 ${link.bgClass} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border ${link.borderClass}`}
          variants={linkVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`text-2xl sm:text-3xl mb-2 sm:mb-3 ${link.iconClass}`}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <link.icon />
          </motion.div>
          <span
            className={`text-sm sm:text-base font-medium ${link.textClass} text-center`}
          >
            {link.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

const Student = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white min-h-screen rounded-xl shadow-xl border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Student Resources
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Access all your important information, updates, and materials in one
          place. Stay connected with your academic journey.
        </p>
      </motion.div>

      <QuickLinks />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Section title="Announcements" icon={<FaBullhorn />} defaultOpen={true}>
          <div id="announcements">
            <Announcements />
          </div>
        </Section>
        <Section title="Exam Schedule" icon={<FaCalendarAlt />}>
          <div id="exam-schedule">
            <ExamSchedule />
          </div>
        </Section>
        <Section title="Study Material" icon={<FaBook />}>
          <div id="study-material">
            <StudyMaterial />
          </div>
        </Section>
      </motion.div>
    </motion.div>
  );
};

export default Student;

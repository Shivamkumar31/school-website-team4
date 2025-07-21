import React, { useState, useEffect, useRef } from 'react';
import ExamSchedule from '../components/ExamSchedule';
import Announcements from '../components/Announcements';
import StudyMaterial from '../components/StudyMaterial';
import Assignments from '../components/Assignments';
import ClassChat from '../components/ClassChat';
import PerformanceTracking from '../components/PerformanceTracking';
import { FaBook, FaBullhorn, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ title, icon, children, open, setOpen }) => {
  return (
    <div className="mb-8 bg-white/90 rounded-2xl shadow-lg p-6 border border-blue-100 transition-all duration-300 hover:shadow-2xl">
      <button
        className="flex items-center w-full text-left text-blue-800 font-bold text-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-200"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="mr-3 text-2xl">{icon}</span>
        {title}
        <span className="ml-auto">{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {open && <div className="pl-2 sm:pl-8 pt-2">{children}</div>}
    </div>
  );
};

const QuickLinks = () => (
  <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
    <a href="#announcements" className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow hover:scale-105 hover:bg-blue-300 transition-all duration-200 border border-blue-200">
      <FaBullhorn className="text-3xl mb-2 text-blue-700" />
      <span className="font-semibold text-blue-900">Announcements</span>
    </a>
    <a href="#exam-schedule" className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow hover:scale-105 hover:bg-blue-300 transition-all duration-200 border border-blue-200">
      <FaCalendarAlt className="text-3xl mb-2 text-blue-700" />
      <span className="font-semibold text-blue-900">Exam Schedule</span>
    </a>
    <a href="#study-material" className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow hover:scale-105 hover:bg-blue-300 transition-all duration-200 border border-blue-200">
      <FaBook className="text-3xl mb-2 text-blue-700" />
      <span className="font-semibold text-blue-900">Study Material</span>
    </a>
  </div>
);
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
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
  const [classLevel, setClassLevel] = useState(5);
  const [openSection, setOpenSection] = useState('announcements');
  const announcementsRef = useRef(null);
  const examScheduleRef = useRef(null);
  const studyMaterialRef = useRef(null);
  const assignmentsRef = useRef(null);
  const classChatRef = useRef(null);
  const performanceTrackingRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setOpenSection(hash);
        setTimeout(() => {
          if (hash === 'announcements' && announcementsRef.current) announcementsRef.current.scrollIntoView({ behavior: 'smooth' });
          if (hash === 'exam-schedule' && examScheduleRef.current) examScheduleRef.current.scrollIntoView({ behavior: 'smooth' });
          if (hash === 'study-material' && studyMaterialRef.current) studyMaterialRef.current.scrollIntoView({ behavior: 'smooth' });
          if (hash === 'assignments' && assignmentsRef.current) assignmentsRef.current.scrollIntoView({ behavior: 'smooth' });
          if (hash === 'class-chat' && classChatRef.current) classChatRef.current.scrollIntoView({ behavior: 'smooth' });
          if (hash === 'performance-tracking' && performanceTrackingRef.current) performanceTrackingRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen rounded-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)' }}>
      <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-800">Student Resources</h2>
      <p className="text-center text-gray-600 mb-4">Access all your important information, updates, and materials in one place.</p>
      <div className="flex justify-center mb-8">
        <label htmlFor="classLevel" className="mr-2 font-semibold text-blue-700">Select Class:</label>
        <select
          id="classLevel"
          value={classLevel}
          onChange={e => setClassLevel(Number(e.target.value))}
          className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {[5,6,7,8,9,10].map(cls => (
            <option key={cls} value={cls}>{`Class ${cls}`}</option>
          ))}
        </select>
      </div>
      <QuickLinks />
      <Section
        title="Announcements"
        icon={<FaBullhorn />}
        open={openSection === 'announcements'}
        setOpen={() => setOpenSection(openSection === 'announcements' ? '' : 'announcements')}
      >
        <div id="announcements" ref={announcementsRef}>
          <Announcements classLevel={classLevel} />
        </div>
      </Section>
      <Section
        title="Exam Schedule"
        icon={<FaCalendarAlt />}
        open={openSection === 'exam-schedule'}
        setOpen={() => setOpenSection(openSection === 'exam-schedule' ? '' : 'exam-schedule')}
      >
        <div id="exam-schedule" ref={examScheduleRef}>
          <ExamSchedule classLevel={classLevel} />
        </div>
      </Section>
      <Section
        title="Study Material"
        icon={<FaBook />}
        open={openSection === 'study-material'}
        setOpen={() => setOpenSection(openSection === 'study-material' ? '' : 'study-material')}
      >
        <div id="study-material" ref={studyMaterialRef}>
          <StudyMaterial classLevel={classLevel} />
        </div>
      </Section>
      <Section
        title="Assignments"
        icon={<FaBook />}
        open={openSection === 'assignments'}
        setOpen={() => setOpenSection(openSection === 'assignments' ? '' : 'assignments')}
      >
        <div id="assignments" ref={assignmentsRef}>
          <Assignments classLevel={classLevel} />
        </div>
      </Section>
      <Section
        title="Class Chat"
        icon={<FaBullhorn />}
        open={openSection === 'class-chat'}
        setOpen={() => setOpenSection(openSection === 'class-chat' ? '' : 'class-chat')}
      >
        <div id="class-chat" ref={classChatRef}>
          <ClassChat classLevel={classLevel} />
        </div>
      </Section>
      <Section
        title="Performance Tracking"
        icon={<FaCalendarAlt />}
        open={openSection === 'performance-tracking'}
        setOpen={() => setOpenSection(openSection === 'performance-tracking' ? '' : 'performance-tracking')}
      >
        <div id="performance-tracking" ref={performanceTrackingRef}>
          <PerformanceTracking classLevel={classLevel} />
        </div>
      </Section>
    </div>
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

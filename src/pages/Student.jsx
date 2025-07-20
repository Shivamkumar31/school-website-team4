import React, { useState } from 'react';
import ExamSchedule from '../components/ExamSchedule';
import Announcements from '../components/Announcements';
import StudyMaterial from '../components/StudyMaterial';
import Assignments from '../components/Assignments';
import ClassChat from '../components/ClassChat';
import PerformanceTracking from '../components/PerformanceTracking';
import { FaBook, FaBullhorn, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Section = ({ title, icon, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-8 bg-white/90 rounded-2xl shadow-lg p-6 border border-blue-100 transition-all duration-300 hover:shadow-2xl">
      <button
        className="flex items-center w-full text-left text-blue-800 font-bold text-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg transition-all duration-200"
        onClick={() => setOpen((o) => !o)}
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

const Student = () => {
  const [classLevel, setClassLevel] = useState(5);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen rounded-xl shadow-lg">
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
      <Section title="Announcements" icon={<FaBullhorn />} defaultOpen={true}>
        <div id="announcements">
          <Announcements classLevel={classLevel} />
        </div>
      </Section>
      <Section title="Exam Schedule" icon={<FaCalendarAlt />}>
        <div id="exam-schedule">
          <ExamSchedule classLevel={classLevel} />
        </div>
      </Section>
      <Section title="Study Material" icon={<FaBook />}>
        <div id="study-material">
          <StudyMaterial classLevel={classLevel} />
        </div>
      </Section>
      <Section title="Assignments" icon={<FaBook />}>
        <div id="assignments">
          <Assignments classLevel={classLevel} />
        </div>
      </Section>
      <Section title="Class Chat" icon={<FaBullhorn />}>
        <div id="class-chat">
          <ClassChat classLevel={classLevel} />
        </div>
      </Section>
      <Section title="Performance Tracking" icon={<FaCalendarAlt />}>
        <div id="performance-tracking">
          <PerformanceTracking classLevel={classLevel} />
        </div>
      </Section>
    </div>
  );
}

export default Student

import { useState } from "react";
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
    <div className="mb-4 bg-white rounded-xl shadow-md overflow-hidden">
      <button
        className="flex items-center w-full text-left text-gray-800 font-bold text-xl p-5 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mr-3 text-blue-600">{icon}</span>
        {title}
        <span
          className="ml-auto transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <FaChevronDown />
        </span>
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
};

const QuickLinks = () => (
  <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
    <a
      href="#announcements"
      className="flex flex-col items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
    >
      <FaBullhorn className="text-2xl mb-2 text-blue-700" />
      <span>Announcements</span>
    </a>
    <a
      href="#exam-schedule"
      className="flex flex-col items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
    >
      <FaCalendarAlt className="text-2xl mb-2 text-blue-700" />
      <span>Exam Schedule</span>
    </a>
    <a
      href="#study-material"
      className="flex flex-col items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
    >
      <FaBook className="text-2xl mb-2 text-blue-700" />
      <span>Study Material</span>
    </a>
  </div>
);

const Student = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-800">
        Student Resources
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Access all your important information, updates, and materials in one
        place.
      </p>
      <QuickLinks />
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
    </div>
  );
};

export default Student;

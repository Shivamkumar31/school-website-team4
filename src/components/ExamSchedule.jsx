import React from 'react';
import { FaDownload } from 'react-icons/fa';

const ExamSchedule = () => (
  <section className="mb-6">
    <h2 className="text-lg font-semibold mb-2">Exam Schedule</h2>
    <ul className="list-disc ml-6 mb-4">
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>Midterm Exams: 10th Aug 2025 - 15th Aug 2025</span>
        <a
          href="/assets/midterm-exam-notification.pdf"
          download
          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-200 text-xs font-medium"
        >
          <FaDownload className="text-base" />
          Download
        </a>
      </li>
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>Final Exams: 5th Dec 2025 - 12th Dec 2025</span>
        <a
          href="/assets/final-exam-notification.pdf"
          download
          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-200 text-xs font-medium"
        >
          <FaDownload className="text-base" />
          Download
        </a>
      </li>
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>Practical Exams: 20th Nov 2025 - 25th Nov 2025</span>
        <a
          href="/assets/practical-exam-notification.pdf"
          download
          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-200 text-xs font-medium"
        >
          <FaDownload className="text-base" />
          Download
        </a>
      </li>
    </ul>
  </section>
);

export default ExamSchedule;

import { FaDownload } from "react-icons/fa";

const schedulesByClass = {
  5: [
    {
      label: "Midterm Exams: 10th Aug 2025 - 15th Aug 2025",
      file: "/assets/class5-midterm.pdf",
    },
    {
      label: "Final Exams: 5th Dec 2025 - 12th Dec 2025",
      file: "/assets/class5-final.pdf",
    },
    {
      label: "Practical Exams: 20th Nov 2025 - 25th Nov 2025",
      file: "/assets/class5-practical.pdf",
    },
  ],
  6: [
    {
      label: "Midterm Exams: 12th Aug 2025 - 17th Aug 2025",
      file: "/assets/class6-midterm.pdf",
    },
    {
      label: "Final Exams: 7th Dec 2025 - 14th Dec 2025",
      file: "/assets/class6-final.pdf",
    },
    {
      label: "Practical Exams: 22nd Nov 2025 - 27th Nov 2025",
      file: "/assets/class6-practical.pdf",
    },
  ],
  7: [
    {
      label: "Midterm Exams: 14th Aug 2025 - 19th Aug 2025",
      file: "/assets/class7-midterm.pdf",
    },
    {
      label: "Final Exams: 9th Dec 2025 - 16th Dec 2025",
      file: "/assets/class7-final.pdf",
    },
    {
      label: "Practical Exams: 24th Nov 2025 - 29th Nov 2025",
      file: "/assets/class7-practical.pdf",
    },
  ],
  8: [
    {
      label: "Midterm Exams: 16th Aug 2025 - 21st Aug 2025",
      file: "/assets/class8-midterm.pdf",
    },
    {
      label: "Final Exams: 11th Dec 2025 - 18th Dec 2025",
      file: "/assets/class8-final.pdf",
    },
    {
      label: "Practical Exams: 26th Nov 2025 - 1st Dec 2025",
      file: "/assets/class8-practical.pdf",
    },
  ],
  9: [
    {
      label: "Midterm Exams: 18th Aug 2025 - 23rd Aug 2025",
      file: "/assets/class9-midterm.pdf",
    },
    {
      label: "Final Exams: 13th Dec 2025 - 20th Dec 2025",
      file: "/assets/class9-final.pdf",
    },
    {
      label: "Practical Exams: 28th Nov 2025 - 3rd Dec 2025",
      file: "/assets/class9-practical.pdf",
    },
  ],
  10: [
    {
      label: "Midterm Exams: 20th Aug 2025 - 25th Aug 2025",
      file: "/assets/class10-midterm.pdf",
    },
    {
      label: "Final Exams: 15th Dec 2025 - 22nd Dec 2025",
      file: "/assets/class10-final.pdf",
    },
    {
      label: "Practical Exams: 30th Nov 2025 - 5th Dec 2025",
      file: "/assets/class10-practical.pdf",
    },
  ],
};

const ExamSchedule = ({ classLevel }) => {
  const schedules = schedulesByClass[classLevel] || schedulesByClass[5];
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Exam Schedule</h2>
      <ul className="list-disc ml-6 mb-4">
        {schedules.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3"
          >
            <span>{item.label}</span>
            <a
              href={item.file}
              download
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors duration-200 text-xs font-medium"
            >
              <FaDownload className="text-base" />
              Download
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExamSchedule;

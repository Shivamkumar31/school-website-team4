import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
  // Tree Plantation
  {
    id: 1,
    type: "General",
    title: "Tree Plantation Drive by Eco Club",
    date: "10 Aug 2025",
    desc: "Over 100 saplings planted for a greener campus.",
    details:
      "Eco Club volunteers and students successfully planted over 100 saplings around the campus, making the school environment greener and healthier.",
    img: "https://assets.thehansindia.com/h-upload/2021/06/08/1080885-up-tree-plantation-drive.jpg",
  },
  // Independence Day (used for two different news)
  {
    id: 2,
    type: "Holiday",
    title: "Independence Day Notice",
    date: "15 Aug 2025",
    desc: "Function in morning, holiday afterwards.",
    details:
      "Independence Day will be celebrated on 15th August at 8AM. All students must attend the ceremony. School remains closed after the program.",
    img: "https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/08/Blog-Image-14.jpg",
  },
  {
    id: 3,
    type: "Holiday",
    title: "Independence Day 2026",
    date: "15 Aug 2026",
    desc: "Special event and holiday after the program.",
    details:
      "Inaugural function on 15 August 2026 at 8AM. Attendance compulsory. School remains closed following the event.",
    img: "https://d20x1nptavktw0.cloudfront.net/wordpress_media/2022/08/Blog-Image-14.jpg",
  },
  // Republic Day
  {
    id: 4,
    type: "Holiday",
    title: "Republic Day 2026",
    date: "26 Jan 2026",
    desc: "Flag hoisting ceremony and cultural events.",
    details:
      "Celebrate Republic Day on 26th January 2026 with a grand ceremony starting 8:30AM. All students must report in formal dress code.",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*VRUtCY372U6dddMXkBjVNQ.png",
  },
  // Christmas
  {
    id: 5,
    type: "Holiday",
    title: "Christmas Holiday Announced",
    date: "25 Dec 2025",
    desc: "School will remain closed for Christmas celebration.",
    details:
      "The school will observe Christmas on 25th December. Students are encouraged to participate in carol singing and Christmas assembly a day before.",
    img: "http://s1.picswalls.com/wallpapers/2017/12/11/beautiful-christmas-2017-wallpaper_104051822_314.jpg",
  },
  // Exams
  {
    id: 6,
    type: "Exam Date",
    title: "Unit Test 1 (UT-1) Dates",
    date: "05 May 2025",
    desc: "UT-1 for Classes 1–10 as per new date sheet.",
    details:
      "Unit Test 1 will take place starting 5th May. Timetables have been shared with class teachers and posted on the portal.",
    img: "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&w=600",
  },
  {
    id: 7,
    type: "Exam Date",
    title: "Board Exam Guidelines",
    date: "11 Mar 2025",
    desc: "Official guidelines for board exams released.",
    details:
      "All board candidates must carry admit cards, report 30 minutes early, and follow all instructions. Mobile phones are strictly prohibited.",
    img: "https://caps123.co.za/wp-content/uploads/2021/08/examination_guidelines.png",
  },
  {
    id: 8,
    type: "Exam Date",
    title: "Periodic Test 2 (PT-2)",
    date: "07 Nov 2025",
    desc: "The PT-2 schedule is now available. Check your class timetable for subject-wise dates.",
    details:
      "Periodic Test 2 will be held starting from 7th November 2025. All subjects will be covered according to the timetable shared by class teachers. Students are requested to be punctual and come well prepared.",
    img: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=600",
  },
  {
    id: 9,
    type: "Exam Date",
    title: "Mid Term Exams 2026",
    date: "15 Jul 2026",
    desc: "Timetable for midterms in summer session.",
    details:
      "Mid Term Exams for 2026 academic session commence 15th July. Check notice board for subject-wise dates and exam tips.",
    img: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&w=600",
  },
  {
    id: 10,
    type: "Exam Date",
    title: "Annual Exams Announcement",
    date: "01 Dec 2025",
    desc: "Annual exams commence for all classes.",
    details:
      "Annual examinations start from 1st December for all classes. Consult your respective class teacher for the complete timetable.",
    img: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&w=600",
  },
  // Results
  {
    id: 11,
    type: "Result",
    title: "Annual Results Announcement",
    date: "28 Mar 2026",
    desc: "Annual exam results available at the school.",
    details:
      "Results can be collected from the school office or checked online. Please clear all dues before collecting report cards.",
    img: "https://images.thequint.com/thequint/2024-05/3e319c07-2e6c-4d2a-a0cd-73becc43d380/iStock_1086860354__1_.jpg",
  },
  {
    id: 12,
    type: "Result",
    title: "Mid Term Results 2026",
    date: "10 Aug 2026",
    desc: "Midterm results online and in school office.",
    details:
      "Results for the 2026 midterm exams are available online and can also be collected from the class teacher.",
    img: "https://images.thequint.com/thequint/2024-05/3e319c07-2e6c-4d2a-a0cd-73becc43d380/iStock_1086860354__1_.jpg",
  },
  {
    id: 13,
    type: "Result",
    title: "Board Exam Results Announced",
    date: "09 Apr 2026",
    desc: "The board exam results are now accessible.",
    details:
      "Board examination results for all streams have been declared and can be checked on the official website and school notice board.",
    img: "https://images.thequint.com/thequint/2024-05/3e319c07-2e6c-4d2a-a0cd-73becc43d380/iStock_1086860354__1_.jpg",
  },
  // General (Lab, Sports)
  {
    id: 14,
    type: "General",
    title: "New Computer Lab Inaugurated",
    date: "15 Jul 2025",
    desc: "New computer lab launched for all students.",
    details:
      "We are pleased to announce the opening of a new 40-seat computer lab equipped with modern PCs and high-speed internet, supporting digital literacy for all classes.",
    img: "https://img.freepik.com/premium-photo/bright-computer-lab-with-modern-equipment-technology_889056-39214.jpg",
  },
  {
    id: 15,
    type: "General",
    title: "Inter-School Sports Meet: Our Winners",
    date: "29 Sep 2025",
    desc: "Our school’s sports team brought home three trophies.",
    details:
      "Congratulations to all participating students and coaches! We secured trophies in football, athletics, and relay race at the city’s inter-school sports meet.",
    img: "https://www.lcsd.gov.hk/file_upload_clpss/leisure_facilities/en/common/images/photo/facilities/WC/933_Wan%20Chai%20Sports%20Ground%202.JPG",
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.26 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
};

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Sort all news by date
  const sortedNews = [...newsData].sort((a, b) => {
    const [dA, mAStr, yA] = a.date.split(" ");
    const [dB, mBStr, yB] = b.date.split(" ");
    const monthMap = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    const dateA = new Date(parseInt(yA), monthMap[mAStr], parseInt(dA));
    const dateB = new Date(parseInt(yB), monthMap[mBStr], parseInt(dB));
    return dateA - dateB;
  });

  const openPopup = (news) => setSelectedNews(news);
  const closePopup = () => setSelectedNews(null);

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">School News & Announcements</h2>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          See all
        </a>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sortedNews.map((news) => (
          <motion.div
            key={news.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            variants={cardVariants}
          >
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 flex flex-col flex-1">
              <span
                className={`inline-block mb-1 text-xs font-bold uppercase ${
                  news.type === "Holiday"
                    ? "text-green-600"
                    : news.type === "Exam Date"
                    ? "text-blue-600"
                    : news.type === "Result"
                    ? "text-yellow-600"
                    : "text-purple-600"
                }`}
              >
                {news.type}
              </span>
              <h3 className="text-base font-bold">{news.title}</h3>
              <span className="text-sm text-gray-400 mb-1">{news.date}</span>
              <p className="text-gray-600 flex-1 text-sm">{news.desc}</p>
              <button
                onClick={() => openPopup(news)}
                className="text-blue-500 font-semibold text-sm mt-2 hover:underline text-left"
              >
                Read More...
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center backdrop-blur-sm bg-black/20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={closePopup}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedNews.img}
                alt={selectedNews.title}
                className="rounded-md w-full h-44 object-cover mb-4"
              />
              <span
                className={`inline-block mb-2 text-xs font-bold uppercase ${
                  selectedNews.type === "Holiday"
                    ? "text-green-600"
                    : selectedNews.type === "Exam Date"
                    ? "text-blue-600"
                    : selectedNews.type === "Result"
                    ? "text-yellow-600"
                    : "text-purple-600"
                }`}
              >
                {selectedNews.type}
              </span>
              <h3 className="text-xl font-bold mb-1">{selectedNews.title}</h3>
              <span className="text-sm text-gray-400 mb-3">
                {selectedNews.date}
              </span>
              <div className="text-gray-700 text-sm mb-1">
                {selectedNews.details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

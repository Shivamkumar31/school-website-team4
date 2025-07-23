// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import vbssLogo from "../assets/vbss-logo.png";

// Ensure these files exist and are named exactly
import profile from "../assets/profile.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

// Card data
const cardData = [
  {
    title: "Our Vision",
    content:
      "To empower students with knowledge, values, and a global perspective, making them responsible citizens.",
    delay: 0.3,
  },
  {
    title: "Modern Facilities",
    content:
      "Smart classrooms, science labs, a well-stocked library, and sports amenities to enhance learning.",
    delay: 0.4,
  },
  {
    title: "Student Achievements",
    content:
      "Our students have secured top ranks in the National Science Olympiad, Physics Olympiad, and have represented India in international competitions.",
    delay: 0.5,
  },
  {
    title: "Teachers' Qualifications",
    content:
      "Our faculty includes IITians, PhD holders, and experienced educators committed to mentoring students with excellence and care.",
    delay: 0.6,
  },
  {
    title: "Contact & Location",
    content:
      "123 Learning Street, EduTown, India — Reach us at +91-99999-99999 or school@example.com",
    delay: 0.7,
  },
];

// Toppers data
const toppers = [
  {
    name: "Aryan Sharma",
    image: profile,
    achievement: "Gold Medal – International Physics Olympiad",
  },
  {
    name: "Sneha Verma",
    image: profile1,
    achievement: "Topper – National Science Olympiad",
  },
  {
    name: "Rajat Mehra",
    image: profile2,
    achievement: "AIR 1 – Indian Computing Challenge",
  },
];

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-blue-100 flex flex-col items-center p-6">
      {/* Logo */}
      <motion.img
        src={vbssLogo}
        alt="School Logo"
        className="w-28 h-28 md:w-36 md:h-36 mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Main Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Welcome to Vishwa Bharati Shiksha Sadan
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-xl text-gray-700 text-center max-w-3xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A place where academic excellence meets world-class mentorship — shaping
        tomorrow’s innovators and leaders.
      </motion.p>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              {card.title}
            </h2>
            <p className="text-gray-600 text-lg">{card.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Meet Our Toppers Section */}
      <motion.div
        className="mt-20 w-full max-w-6xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          🎓 Meet Our Toppers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={topper.image}
                alt={topper.name}
                className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800">
                {topper.name}
              </h3>
              <p className="text-gray-600">{topper.achievement}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import schoolLogo from "../assets/vbss-logo.png";
import { NavLink } from "react-router";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SchoolProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10"
      >
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={schoolLogo}
            alt="School Logo"
            className="w-28 h-28 rounded-full border-4 border-yellow-600 shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Vishwa Bharati Shiksha Sadan
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Affiliated to CBSE, Delhi | School Code: 12345
            </p>
          </div>
        </motion.div>

        {/* Moving Notice Line */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 overflow-hidden rounded-lg bg-red-600 text-white"
        >
          <NavLink
            to="/registration"
            className="block whitespace-nowrap animate-marquee py-2 text-center font-semibold hover:underline"
          >
            🎓 New Admission is Open - Click Here to Apply 🎓
          </NavLink>
        </motion.div>

        {/* Contact and Principal Info */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold text-red-600 mb-2">
              📍 Address
            </h2>
            <p className="text-gray-800">123 Green Road, Patna, Bihar, India</p>

            <h2 className="text-lg font-semibold text-red-600 mt-4 mb-2">
              📞 Phone
            </h2>
            <p className="text-gray-800">+91-9876543210</p>

            <h2 className="text-lg font-semibold text-red-600 mt-4 mb-2">
              ✉️ Email
            </h2>
            <p className="text-gray-800">info@gvps.edu.in</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold text-purple-600 mb-2">
              👩‍🏫 Principal
            </h2>
            <p className="text-gray-800">
              <strong>Name:</strong> Dr. Meera Sharma
            </p>
            <p className="text-gray-800">
              <strong>Experience:</strong> 20+ years in education
            </p>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div variants={fadeInUp} className="mt-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            About the School
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Green Valley Public School is dedicated to nurturing academic
            excellence, moral values, and overall student development. We focus
            on experiential learning, innovation, and inclusive education to
            prepare students for a global future.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div variants={fadeInUp} className="mt-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-800 mb-4">
            To be a leading educational institution that empowers students to
            become responsible global citizens.
          </p>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-800">
            We strive to provide high-quality education that inspires
            creativity, encourages curiosity, and promotes lifelong learning.
          </p>
        </motion.div>

        {/* Facilities */}
        <motion.div variants={fadeInUp} className="mt-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Facilities
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>📚 Modern Classrooms with Smart Boards</li>
            <li>🔬 Library & Science Labs</li>
            <li>🏀 Playground and Sports Complex</li>
            <li>💻 Computer Lab and Digital Learning Center</li>
          </ul>
        </motion.div>

        {/* Admission Info */}
        <motion.div variants={fadeInUp} className="mt-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Admissions Open
          </h2>
          <p className="text-gray-800">
            Registrations for the academic year 2025-26 are now open for all
            classes. Contact us or visit the school office between 9 AM - 3 PM.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SchoolProfile;

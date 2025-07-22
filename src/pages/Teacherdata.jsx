import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const teachers = [
  {
    name: "ELLIS HERMAWATI, S.Pd.",
    nip: "198709232019112021",
    subject: "Ilmu Pengetahuan Sosial",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "Drs. Deni",
    nip: "196211021997031002",
    subject: "Bahasa Indonesia",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "PINARSIH KURNIASIH, S.Pd.",
    nip: "198612092022032012",
    subject: "Bahasa Indonesia",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "HANA MAYA, S.Pd.",
    nip: "199212272022032012",
    subject: "Matematika",
    img: "https://randomuser.me/api/portraits/women/76.jpg",
  },
  {
    name: "IMRAN, S.Pd., M.Pd.",
    nip: "198912302022032021",
    subject: "Penjaskes",
    img: "https://randomuser.me/api/portraits/men/63.jpg",
  },
  {
    name: "RAMDANI, S.Pd., Gr.",
    nip: "199011162022031019",
    subject: "Matematika",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "GITA NURFITRI, S.Pd.",
    nip: "199711282022032012",
    subject: "Pendidikan Jasmani",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "DILLA MARIANA, S.Pd.",
    nip: "198911162022032021",
    subject: "Bahasa Sunda",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "KURNINGSIH, S.Pd.",
    nip: "198911162022032012",
    subject: "Bahasa Inggris",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];

const TeacherData = () => {
  const [search, setSearch] = useState("");
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-gradient-to-br from-blue-50 to-purple-90 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-purple-800"
      >
        Data Guru
      </motion.h2>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search teacher name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-purple-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {filteredTeachers.map((teacher, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-t-4 border-purple-400"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-purple-300"
            />
            <h3 className="text-lg font-semibold text-purple-700">
              {teacher.name}
            </h3>
            <p className="text-sm text-gray-700">
              <strong>NIP:</strong> {teacher.nip}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Pelajaran:</strong> {teacher.subject}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeacherData;

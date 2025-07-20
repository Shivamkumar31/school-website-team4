import { useRef } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const galleryData = [
  {
    title: "Guru",
    img: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    desc: "Beberapa Foto Guru - Guru SMP Negeri 1 Cibadak",
  },
  {
    title: "Sanlat",
    img: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg",
    desc: "Beberapa Foto Kegiatan Sanlat Murid SMP Negeri 1 Cibadak",
    link: "/sanlat",
  },
  {
    title: "Kunjungan Disdik",
    img: "https://tse3.mm.bing.net/th/id/OIP.Nk2yAnGHQcvtQvgwgCWLFQHaEK?pid=Api&P=0&h=180",
    desc: "Beberapa Foto Kunjungan dari Dinas Pendidikan",
  },
  {
    title: "Kunjungan Arrayah",
    img: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg",
    desc: "Beberapa Foto Kunjungan Arrayah SMP Negeri 1 Cibadak",
  },
  {
    title: "Perpisahan 2016",
    img: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    desc: "Foto Perpisahan SMP Negeri 1 Cibadak",
  },
  {
    title: "Wisuda Tahfidz",
    img: "https://tse2.mm.bing.net/th/id/OIP.8fQETiHqw9FjMmYCa9VWXgHaE7?pid=Api&P=0&h=180",
    desc: "Foto Wisuda Tahfidz Murid SMP Negeri 1 Cibadak",
  },
  {
    title: "MPLS 2016",
    img: "https://tse2.mm.bing.net/th/id/OIP.G4Xq-0emohREy7iVUBSCZAHaEK?pid=Api&P=0&h=180",
    desc: "Foto MPLS Masa Pengenalan Lingkungan Sekolah",
  },
  {
    title: "Fasilitas Sekolah",
    img: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    desc: "Foto Fasilitas Sekolah SMP Negeri 1 Cibadak",
    link: "/facilities",
  },
];

export default function HorizontalGallery() {
  const scrollRef = useRef(null);

  // Simplified animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Optional: Sync page state on manual scroll (advanced)

  return (
    <motion.div
      className="bg-transparent text-gray-800 py-4 sm:py-6 lg:py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Gallery Section Header */}
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gallery SMP Negeri 1 Cibadak
        </motion.h2>

        {/* Horizontal Scrollable Gallery */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-2 snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            width: "100%",
          }}
          variants={containerVariants}
        >
          {galleryData.map((item, idx) => (
            <motion.div
              key={idx}
              className="w-[280px] sm:w-[300px] lg:w-[320px] bg-white rounded-xl shadow-lg hover:shadow-xl snap-center overflow-hidden flex-shrink-0 border border-gray-100"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -3,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-32 sm:h-40 lg:h-44 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-br-lg font-semibold shadow-md">
                  {item.title}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                {item.link ? (
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-2 sm:mt-3 text-xs sm:text-sm transition-colors duration-200 group"
                  >
                    Lihat Foto
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3 block">
                    Lihat Foto
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

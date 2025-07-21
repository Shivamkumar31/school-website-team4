import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import principalImage from "../assets/principal-group.png";

export default function PrincipalMessage() {
  const [showFull, setShowFull] = useState(false);

  // Optimized animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.1 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="bg-gradient-to-br from-sky-200 via-sky-300 to-blue-400 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12">
          {/* Animated Text Section */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="lg:w-2/3 text-justify text-sm sm:text-base leading-relaxed text-gray-800 bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-900 mb-4 sm:mb-6 text-center lg:text-left">
              Principal's Message
            </h2>
            <p className="mb-4">Assalamu’alaikum warahmatullahi wabarakatuh,</p>

            {showFull ? (
              <>
                <p className="mb-4">
                  We hope this message finds you in good health. In light of the
                  ongoing COVID-19 situation, and as per the decision of the
                  Regent of Sukabumi (No. 421/Kep.444/Disdik/2020), the new
                  student admissions (PPDB) for the 2020/2021 academic year will
                  be held online. This applies to all levels including
                  Kindergarten, Elementary School, and Junior High School.
                </p>
                <p className="mb-4">
                  We would like to inform you that the PPDB for SMP Negeri 1
                  Cibadak will be conducted via our official website:
                  <a
                    href="http://smpn1cibadak.sch.id/ppdb/"
                    className="text-blue-800 underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    smpn1cibadak.sch.id/ppdb
                  </a>
                  , and will follow the schedule attached in the official
                  announcement.
                </p>
              </>
            ) : (
              <p className="mb-4">
                We hope this message finds you in good health. In light of the
                ongoing COVID-19 situation...
              </p>
            )}

            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-4 px-4 py-2 bg-white text-sky-700 border border-sky-700 rounded hover:bg-sky-100 transition"
            >
              {showFull ? "Show Less" : "Show More"}
            </button>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="lg:w-1/3 mt-6 lg:mt-0 text-center"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl bg-white p-2 sm:p-3">
              <img
                src={principalImage}
                alt="Principal and Staff"
                loading="lazy"
                className="rounded-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
            <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-gray-700 font-medium">
              Staff of SMPN 1 Cibadak
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

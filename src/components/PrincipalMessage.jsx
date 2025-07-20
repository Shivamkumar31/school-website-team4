import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import principalImage from "../assets/principal-group.png";

export default function PrincipalMessage() {
  const [showFull, setShowFull] = useState(false);

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.3, type: "spring", bounce: 0.3 },
    },
    hover: {
      scale: 1.04,
      boxShadow: "0px 8px 30px rgba(0,175,255,0.15)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-sky-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:flex items-start gap-10">
        {/* Animated Text Section */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="md:w-2/3 text-justify text-base leading-relaxed text-gray-800"
        >
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
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
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="md:w-1/3 mt-8 md:mt-0 text-center"
        >
          <img
            src={principalImage}
            alt="Principal and Staff"
            loading="lazy"
            className="rounded-md shadow-lg w-full object-cover"
          />
          <p className="text-sm mt-2 text-gray-700">Staff of SMPN 1 Cibadak</p>
        </motion.div>
      </div>
    </section>
  );
}

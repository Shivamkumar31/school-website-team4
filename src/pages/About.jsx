import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import bannerImage from "../assets/bannerImage.webp";
import bannerImage2 from "../assets/bannerImage2.avif";

const bannerVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.6 } },
};

const About = () => {
  const bannerImages = [bannerImage, bannerImage2];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full m-0 p-0 overflow-hidden h-[400px] md:h-[500px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentBanner}
            src={bannerImages[currentBanner]}
            alt="Banner"
            variants={bannerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full object-cover z-0 shadow-lg"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 via-sky-800/40 to-transparent flex items-center justify-center flex-col text-white text-center p-4 rounded-b-3xl z-10">
          <motion.h2
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg tracking-tight"
          >
            Welcome to Vishwa Bharati Shiksha Sadan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg max-w-2xl rounded-lg bg-black/60 px-6 py-2 mt-2 shadow text-white"
          >
            A place of excellence in education, discipline, and development for
            every student.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, type: "spring" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto bg-white/80 shadow-xl rounded-2xl backdrop-blur-lg px-8 py-14 mt-10 mb-10 text-gray-900"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-sky-800 underline decoration-sky-300">
          History of SMP Negeri 1 Cibadak, Sukabumi Regency
        </h2>
        <div className="space-y-6 leading-relaxed text-justify text-[18px]">
          <p>
            SMP Negeri 1 Cibadak was established in 1965 based on the Decree of
            the Minister of Education and Culture of the Republic of Indonesia.
            Initially, the school was founded in the Kebon Pala area, which has
            now become the Cibadak Terminal 5 Market.
          </p>
          <p>
            As a part of the educational world in the Cibadak District, SMP
            Negeri 1 Cibadak plays an important role in shaping the character
            and future of young learners.
          </p>
          <p>
            The advancement of Science and Technology increasingly tends to make
            people busier in influencing worldly affairs. In this context,
            education becomes even more essential.
          </p>
          <p>
            The existence of SMP Negeri 1 Cibadak is greatly needed by the
            community in the Cibadak District as a center of educational
            development and opportunity.
          </p>
          <p>
            The Teaching and Learning Activities organized are helpful to the
            community in meeting the demands for knowledge, character, and
            career-building for students.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;

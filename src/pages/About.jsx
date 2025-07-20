import React from 'react';

import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.png";
import bannerImage2 from "../assets/bannerImage2.png";



const About = () => {

 const bannerImages = [bannerImage, bannerImage2];
  const [currentBanner, setCurrentBanner] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        setFade(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
      setFade(false);
    }, 400);
  };
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
      setFade(false);
    }, 400);
  };

  return (
    <div className="font-sans mt-0">

      {/* ✅ Banner Section */}
      <section className="relative w-full m-0 p-0 overflow-hidden">
        <img
          src={bannerImages[currentBanner]}
          alt="Banner"
          className={`w-full h-[500px] object-cover block transition-opacity duration-400 ${fade ? 'opacity-0' : 'opacity-100'} rounded-lg`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white-900 bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
           <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            About to Vishwa Bharati Shiksha Sadan
          </h2>
          <p className="text-sm md:text-base max-w-xl">
            A place of excellence in education, discipline, and development for every student.
          </p> 
        </div>
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-900 hover:to-sky-600 text-white shadow-lg rounded-full p-2.5 z-10 border-2 border-white transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-300"
          aria-label="Previous Banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-l from-sky-700 to-sky-400 hover:from-sky-900 hover:to-sky-600 text-white shadow-lg rounded-full p-2.5 z-10 border-2 border-white transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-300"
          aria-label="Next Banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </section>

      {/* ✅ About Content */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
          History of SMP Negeri 1 Cibadak, Sukabumi Regency
        </h2>
        <div className="space-y-5 leading-relaxed text-justify text-[17px]">
          <p>
            SMP Negeri 1 Cibadak was established in 1965 based on the Decree of the Minister of Education and Culture of the Republic of Indonesia.
            Initially, the school was founded in the Kebon Pala area, which has now become the Cibadak Terminal 5 Market.
          </p>
          <p>
            As a part of the educational world in the Cibadak District, SMP Negeri 1 Cibadak plays a very important role in shaping the character and future of young learners.
          </p>
          <p>
            The advancement of Science and Technology increasingly tends to make people busier in influencing worldly affairs. In this context, education becomes even more essential.
          </p>
          <p>
            The existence of SMP Negeri 1 Cibadak is greatly needed by the community in the Cibadak District as a center of educational development and opportunity.
          </p>
          <p>
            The Teaching and Learning Activities organized are very helpful to the community in meeting the demands for knowledge, character, and career-building for students.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;

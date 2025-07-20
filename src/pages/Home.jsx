import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.webp";
import bannerImage2 from "../assets/bannerImage2.avif";
import Gallery from "../pages/Gallery";
import PrincipalMessage from "../components/PrincipalMessage";

import InfoCard from "../components/InfoCard";

export default function Home() {
  // const [showFull, setShowFull] = useState(false);
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
      setCurrentBanner(
        (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
      );
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
      {/* Banner Section */}
      <section className="relative w-full m-0 p-0 overflow-hidden">
        <img
          src={bannerImages[currentBanner]}
          alt="Banner"
          loading="lazy"
          className={`w-full h-[500px] object-cover block transition-opacity duration-400 ${
            fade ? "opacity-0" : "opacity-100"
          } rounded-lg`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white-900 bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Welcome to Vishwa Bharati School
          </h2>
          <p className="text-sm md:text-base max-w-xl">
            A place of excellence in education, discipline, and development for
            every student.
          </p>
        </div>
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-700 to-sky-400 hover:from-sky-900 hover:to-sky-600 text-white shadow-lg rounded-full p-2.5 z-10 border-2 border-white transition-transform duration-200 hover:scale-110 "
          aria-label="Previous Banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-l from-sky-700 to-sky-400 hover:from-sky-900 hover:to-sky-600 text-white shadow-lg rounded-full p-2.5 z-10 border-2 border-white transition-transform duration-200 hover:scale-110 "
          aria-label="Next Banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </section>

      {/*  Event Information Section */}
      <section className="bg-white py-10">
        <h3 className="text-center text-xl font-bold mb-6">
          Event Information
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <InfoCard
            title="Start Time"
            icon="⏰"
            time="08:00 AM"
            date="2020-06-29"
          />
          <InfoCard
            title="End Time"
            icon="🕔"
            time="05:00 PM"
            date="2020-07-04"
          />
          <InfoCard title="Venue" icon="📍" time="SMPN 1 Cibadak Building" />
        </div>
      </section>

      {/*  Principal's Message Section */}
      <PrincipalMessage />

      {/*  Gallery Section */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-center mb-6">School Gallery</h3>
          <Gallery />
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect } from "react";
import bannerImage from "../assets/bannerImage.webp";
import bannerImage2 from "../assets/bannerImage2.avif";
import { HorizontalGallery } from "../pages/Gallery";
import PrincipalMessage from "../components/PrincipalMessage";
import InfoCard from "../components/InfoCard";

export default function Home() {
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

  return (
    <div className="font-sans">
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden shadow-lg bg-gray-200">
        <img
          src={bannerImages[currentBanner]}
          alt="Banner"
          loading="eager"
          className={`w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover block transition-opacity duration-400 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-black/10 to-black/30 flex items-center justify-center flex-col text-white text-center p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-2xl text-shadow-lg">
            Welcome to Vishwa Bharati School
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg lg:max-w-2xl leading-relaxed drop-shadow-xl text-shadow">
            A place of excellence in education, discipline, and development for
            every student.
          </p>
        </div>
      </section>

      {/*  Event Information Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Event Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        </div>
      </section>

      {/*  Principal's Message Section */}
      <PrincipalMessage />

      {/*  Gallery Section */}
      <section className="bg-gradient-to-br from-white to-gray-100 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-1"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            School Gallery
          </h3>
          <HorizontalGallery />
        </div>
      </section>
    </div>
  );
}

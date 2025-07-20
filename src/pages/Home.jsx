import { useState } from "react";
import Button from "../components/Button";
import bannerImage from "../assets/bannerImage.png";
import Gallery from "../pages/Gallery";
import PrincipalMessage from "../components/PrincipalMessage";

import InfoCard from "../components/InfoCard";

export default function Home() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="font-sans mt-0">
      {/* Banner Section */}
      <section className="relative w-full m-0 p-0 overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[310px] object-cover block"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white-900 bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Welcome to Vishwa Bharati School
          </h2>
          <p className="text-sm md:text-base max-w-xl">
            A place of excellence in education, discipline, and development for every student.
          </p>
        </div>
      </section>

      {/*  Event Information Section */}
      <section className="bg-white py-10">
        <h3 className="text-center text-xl font-bold mb-6">Event Information</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <InfoCard title="Start Time" icon="⏰" time="08:00 AM" date="2020-06-29" />
          <InfoCard title="End Time" icon="🕔" time="05:00 PM" date="2020-07-04" />
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


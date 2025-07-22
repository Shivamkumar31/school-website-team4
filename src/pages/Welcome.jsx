import React, { useEffect, useRef, useState } from "react";
import bannerImage from "../assets/bannerImage.webp";
import { Howl } from "howler";
import confetti from "canvas-confetti";
import birthdaySound from "../assets/happbirthday.mp3";

const today = new Date().toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
});

const dummyBirthdays = [
  { name: "Rahul Kumar", class: "5A" },
  { name: "Priya Sharma", class: "8B" },
  { name: "Aman Verma", class: "10C" },
  { name: "Simran Kaur", class: "6B" },
  { name: "Vivek Singh", class: "7A" },
  { name: "Neha Jain", class: "4C" },
  { name: "Anjali Mehta", class: "9A" },
  { name: "Rohan Desai", class: "3B" },
  { name: "Sneha Patil", class: "2A" },
  { name: "Karan Gupta", class: "1C" },
  { name: "Divya Joshi", class: "6A" },
  { name: "Arjun Nair", class: "7B" },
];

const WelcomeSection = () => {
  const soundRef = useRef(null);
  const [showBalloons, setShowBalloons] = useState(false);
  const [floatCount, setFloatCount] = useState(10);
  const [showAll, setShowAll] = useState(false); // 👈 new toggle state

  useEffect(() => {
    soundRef.current = new Howl({
      src: [birthdaySound],
      html5: true,
      volume: 1,
    });
  }, []);

  const launchMegaConfetti = () => {
    const duration = 15 * 1000;
    const end = Date.now() + duration;
    const colors = [
      "#ff0a54", "#ff477e", "#ff85a1", "#fbb1bd", "#f9bec7",
      "#6a0dad", "#00bfff", "#00fa9a", "#ffd700", "#ff6347"
    ];

    const shoot = () => {
      const baseOptions = {
        particleCount: 60,
        spread: 360,
        ticks: 100,
        origin: { y: 0.5 },
        colors,
        scalar: 1.6,
        gravity: 0.9,
        zIndex: 999,
      };

      confetti({ ...baseOptions, angle: 45, origin: { x: 0, y: 1 } });
      confetti({ ...baseOptions, angle: 135, origin: { x: 1, y: 1 } });
      confetti({ ...baseOptions, angle: 225, origin: { x: 1, y: 0 } });
      confetti({ ...baseOptions, angle: 315, origin: { x: 0, y: 0 } });
      confetti({
        ...baseOptions,
        origin: { x: 0.5, y: 0.5 },
        particleCount: 100,
        startVelocity: 70,
      });
    };

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
      }
      shoot();
    }, 350);
  };

  const handleBirthdayClick = (name) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.play();
    }

    launchMegaConfetti();
    setFloatCount(Math.floor(Math.random() * 8) + 8);
    setShowBalloons(true);
    setTimeout(() => setShowBalloons(false), 10000);
    alert(`🎉 Happy Birthday ${name}! 🎂`);
  };

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20 relative overflow-hidden">
      {/* 🎈 Animated Balloons */}
      {showBalloons &&
        Array.from({ length: floatCount }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 z-50 text-3xl font-bold animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              color: i % 2 === 0 ? "#d6336c" : "#5f27cd",
              animationDelay: `${i * 0.3}s`,
            }}
          >
            🎈 {i % 3 === 0 ? "Celebrate!" : "Happy Birthday!"}
          </div>
        ))}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">
            Welcome to Our School
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Inspiring Excellence Every Day
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Empowering students with knowledge, values, and opportunities to build a better tomorrow.
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src={bannerImage}
            alt="Welcome School"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Birthday Section */}
      <div className="max-w-6xl mx-auto mt-14 p-6 rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl border border-blue-100">
        <h3 className="text-3xl font-extrabold text-blue-800 mb-8 drop-shadow-md">
          🎉 Birthdays Today – {today}
        </h3>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {(showAll ? dummyBirthdays : dummyBirthdays.slice(0, 6)).map(
            (student, index) => (
              <div
                key={index}
                onClick={() => handleBirthdayClick(student.name)}
                className="group cursor-pointer bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white shadow-inner flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform duration-300">
                  🎈
                </div>
                <h4 className="text-xl font-semibold text-blue-900 group-hover:text-pink-600 transition-colors">
                  {student.name}
                </h4>
                <p className="text-gray-600 mt-1 text-sm">🎓 Class: {student.class}</p>
              </div>
            )
          )}
        </div>

        {/* 🔽 See More / See Less Button */}
        {dummyBirthdays.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {showAll ? "See Less ▲" : "See More ▼"}
            </button>
          </div>
        )}
      </div>

      {/* 🎨 Floating Animation */}
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
          .animate-float {
            animation: floatUp 10s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default WelcomeSection;

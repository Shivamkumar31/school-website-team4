import { useRef, useState, useEffect } from "react";
import { Link } from "react-router";

// Lazy loading image component for better performance
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
      {!isLoaded && isInView && (
        <div
          className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
};

const galleryData = [
  {
    title: "Guru",
    img: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    desc: "Beberapa Foto Guru - Guru SMP Negeri 1 Cibadak",
    link: "/teacher-data",
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

// Component for horizontal gallery (used on home page) - Optimized for performance
export function HorizontalGallery() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Show only first 6 items for better initial performance
  const displayData = galleryData.slice(0, 6);

  // Mouse drag handlers for desktop only
  const handleMouseDown = (e) => {
    if (window.innerWidth <= 768) return; // Skip on mobile/tablet
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || window.innerWidth <= 768) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-transparent text-gray-800 py-4 sm:py-6 lg:py-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Gallery Section Header */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left text-gray-800">
          School Gallery
        </h2>

        {/* Horizontal Scrollable Gallery - Draggable for desktop */}
        <div
          ref={scrollRef}
          className="flex space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-2 snap-x snap-mandatory select-none"
          style={{
            scrollBehavior: "auto", // Changed from smooth to auto
            scrollSnapType: "x mandatory",
            width: "100%",
            cursor: window.innerWidth > 768 ? "grab" : "default",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {displayData.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[300px] lg:w-[320px] bg-white rounded-xl shadow-lg hover:shadow-xl snap-center overflow-hidden flex-shrink-0 border border-gray-100 transition-shadow duration-200"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.img}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 lg:h-44 object-cover transition-transform duration-300 hover:scale-105"
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
                    View Photos
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
                    View Photos
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Full Gallery Page Component (default export for /gallery route)
export default function FullGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Guru",
    "Sanlat",
    "Kunjungan Disdik",
    "Kunjungan Arrayah",
    "Perpisahan 2016",
    "Wisuda Tahfidz",
    "MPLS 2016",
    "Fasilitas Sekolah",
  ];

  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.title === selectedCategory);

  // Removed animations for better performance

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg')] bg-cover bg-center opacity-30"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            School Gallery
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90">
            Capturing Moments at SMP Negeri 1 Cibadak
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((item, idx) => (
              <div
                key={`${selectedCategory}-${idx}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-lg">
                    {item.title}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group"
                    >
                      View Photos
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
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
                    <span className="text-gray-400 text-sm">View Photos</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

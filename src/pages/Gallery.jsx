import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const ITEMS_PER_PAGE = 3; // Number of images per viewport/page

export default function HorizontalGallery() {
  const scrollRef = useRef(null);
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(galleryData.length / ITEMS_PER_PAGE);

  // Handles left/right button scrolling
  const scrollByPage = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by full container width
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });

    let newPage = page + direction;
    if (newPage < 0) newPage = 0;
    if (newPage >= pageCount) newPage = pageCount - 1;
    setPage(newPage);
  };

  // Optional: Sync page state on manual scroll (advanced)

  return (
    <div className="bg-white text-gray-800 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Gallery Section Header */}
        <h2 className="text-2xl font-bold mb-4">
          Gallery SMP Negeri 1 Cibadak
        </h2>

        {/* Horizontal Scroll Buttons */}
        <div className="flex items-center">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white transition disabled:opacity-30"
            onClick={() => scrollByPage(-1)}
            disabled={page === 0}
            aria-label="Scroll Left"
          >
            &#8592;
          </button>

          {/* Horizontal Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 py-2 snap-x snap-mandatory"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              width: "100%",
            }}
          >
            {galleryData.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[250px] max-w-xs bg-white rounded-lg shadow-md snap-center transition-transform duration-300 hover:scale-105 overflow-hidden flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-br-md font-semibold">
                    {item.title}
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm">{item.desc}</p>
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="text-blue-600 hover:underline mt-2 block"
                    >
                      Lihat Foto
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm mt-2 block">
                      Lihat Foto
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white transition disabled:opacity-30 ml-2"
            onClick={() => scrollByPage(1)}
            disabled={page === pageCount - 1}
            aria-label="Scroll Right"
          >
            &#8594;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === page ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => {
                if (scrollRef.current) {
                  const container = scrollRef.current;
                  // Each page is ITEMS_PER_PAGE cards wide
                  container.scrollTo({
                    left: i * container.offsetWidth,
                    behavior: "smooth",
                  });
                  setPage(i);
                }
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

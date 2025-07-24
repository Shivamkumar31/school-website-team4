import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.png";
import img6 from "../assets/gallery6.png";
import img7 from "../assets/gallery7.png";
import img8 from "../assets/gallery8.png";
import img9 from "../assets/gallery9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Sanlat() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 bg-gray-100 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-800">
        Sanlat Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => {
              setIsOpen(true);
              setPhotoIndex(index);
            }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300 p-2"
          >
            <img
              src={src}
              alt={`Sanlat ${index + 1}`}
              className="w-full h-44 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((img) => ({ src: img }))}
          index={photoIndex}
          on={{ view: ({ index }) => setPhotoIndex(index) }}
        />
      )}
    </section>
  );
}

const facilities = [
  {
    name: "CCTV",
    image: "https://acestech.com/wp-content/uploads/2020/02/05.jpg",
  },
  {
    name: "Greenhouse",
    image:
      "https://www.urbanfarmonline.com/wp-content/uploads/2019/10/greenhouse.jpg",
  },
  {
    name: "Lemari Trophy",
    image:
      "https://i.pinimg.com/736x/39/93/91/3993917279e6e6a3306e8195442e2d8b--entertainment-units-display-cabinets.jpg",
  },
  {
    name: "Panggung",
    image:
      "https://seopage.one/wp-content/uploads/2023/06/jenis-panggung-arena.png",
  },
  {
    name: "TV Umum",
    image:
      "https://mediamodifier.com/blog/wp-content/uploads/2023/01/3bad43c25a42c074f767ea40dd8f6728_mm-showroom-image-2048x1463.jpg",
  },
  {
    name: "Lab Biologi",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/414/650/original/hand-with-protective-gloves-holding-a-blood-samples-for-covid-test-free-photo.jpg",
  },
];

export default function Facilities() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Our Facilities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-end">
              <h3 className="text-white text-xl font-bold p-4">
                {facility.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

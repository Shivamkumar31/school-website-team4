import bannerImage from "../assets/bannerImage.webp";

const About = () => {
  return (
    <div className="font-sans mt-0">
      {/* ✅ Banner Section */}
      <section className="relative w-full m-0 p-0 overflow-hidden ">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[310px] object-cover block"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white-900 bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            About Vishwa Bharati School
          </h2>
          <p className="text-sm md:text-base max-w-xl">
            A place of excellence in education, discipline, and development for
            every student.
          </p>
        </div>
      </section>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-center mb-6">
          History of SMP Negeri 1 Cibadak, Sukabumi Regency
        </h2>
        <div className="space-y-4 text-justify">
          <p>
            SMP Negeri 1 Cibadak was established in 1965 based on the Decree of
            the Minister of Education and Culture of the Republic of Indonesia.
            Initially, the school was founded in the Kebon Pala area, which has
            now become the Cibadak Terminal 5 Market...
          </p>
          <p>
            As a part of the educational world in the Cibadak District, SMP
            Negeri 1 Cibadak plays a very important role...
          </p>
          <p>
            The advancement of Science and Technology increasingly tends to make
            people busier in influencing worldly affairs...
          </p>
          <p>
            The existence of SMP Negeri 1 Cibadak is greatly needed by the
            community in the Cibadak District...
          </p>
          <p>
            The Teaching and Learning Activities organized are very helpful to
            the community in meeting the demands for knowledge...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

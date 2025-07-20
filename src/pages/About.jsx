import React from 'react';
import bannerImage from "../assets/bannerImage.png";
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
               A place of excellence in education, discipline, and development for every student.
             </p>
           </div>
         </section>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-center mb-6">Sejarah SMP Negeri 1 Cibadak Kab. Sukabumi</h2>
        <div className="space-y-4 text-justify">
          <p>
            SMP Negeri 1 Cibadak didirikan pada tahun 1965 berdasarkan Surat Keputusan Menteri P & K Republik Indonesia.
            Pada mulanya, Sekolah didirikan di daerah kebon pala yang sekarang menjadi Pasar 5 Terminal Cibadak...
          </p>
          <p>
            SMP Negeri 1 Cibadak sebagai bagian dari dunia pendidikan yang berada di Kecamatan Cibadak mempunyai peranan yang sangat penting...
          </p>
          <p>
            Kemajuan Ilmu Pengetahuan dan Teknologi yang semakin cenderung membuat orang semakin sibuk dalam mempengaruhi urusan duniawi...
          </p>
          <p>
            SMP Negeri 1 Cibadak, keberadaannya sangat diperlukan oleh masyarakat di lingkungan Kecamatan Cibadak...
          </p>
          <p>
            Kegiatan Belajar Mengajar yang diselenggarakan keberadaannya sangat membantu masyarakat dalam memenuhi tuntutan pengetahuan...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

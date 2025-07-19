import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Tentang Sekolah</h1>

        <p className="text-lg mb-4 leading-relaxed">
          <strong>SMP Negeri 1 Cibadak</strong> merupakan salah satu institusi pendidikan terkemuka yang
          berlokasi di Kabupaten Sukabumi. Sekolah ini telah memberikan kontribusi besar dalam dunia
          pendidikan, khususnya pada tingkat Sekolah Menengah Pertama (SMP).
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Dengan semangat “<em>Bhaya Cintarasa Bhayari Bhakti</em>”, sekolah ini mengutamakan nilai-nilai
          kedisiplinan, kebersamaan, dan semangat belajar dalam mewujudkan generasi muda yang berkualitas.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          Dalam masa pandemi COVID-19, SMPN 1 Cibadak tetap berkomitmen menjalankan proses penerimaan
          peserta didik baru secara daring (online) demi menjaga kesehatan dan keselamatan seluruh pihak
          yang terlibat.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-500">Visi & Misi</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Mewujudkan lulusan yang berprestasi dan berakhlak mulia.</li>
          <li>Mengembangkan potensi peserta didik secara optimal.</li>
          <li>Meningkatkan mutu pendidikan melalui kegiatan pembelajaran yang efektif.</li>
          <li>Menumbuhkan semangat nasionalisme dan kepedulian sosial.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-500">Informasi Kontak</h2>
        <p className="text-lg mb-2">
          <strong>Alamat:</strong> Gedung SMPN 1 Cibadak, Kabupaten Sukabumi, Jawa Barat
        </p>
        <p className="text-lg mb-2">
          <strong>Email:</strong> info@bsbhayari.sch.id
        </p>
        <p className="text-lg">
          <strong>Moto:</strong> "Bhaya Cintarasa Bhayari Bhakti (BS104)"
        </p>
      </div>
    </div>
  );
};

export default About;

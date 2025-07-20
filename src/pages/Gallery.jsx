import React from 'react';
import { Link } from 'react-router-dom';

const galleryData = [
  {
    title: 'Guru',
    img: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    desc: 'Beberapa Foto Guru - Guru SMP Negeri 1 Cibadak',
  },
  {
    title: 'Sanlat',
    img: 'https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg',
    desc: 'Beberapa Foto Kegiatan Sanlat Murid SMP Negeri 1 Cibadak',
    link: '/sanlat',
  },
  {
    title: 'Kunjungan Disdik',
    img: 'https://tse3.mm.bing.net/th/id/OIP.Nk2yAnGHQcvtQvgwgCWLFQHaEK?pid=Api&P=0&h=180',
    desc: 'Beberapa Foto Kunjungan dari Dinas Pendidikan',
  },
  {
    title: 'Kunjungan Arrayah',
    img: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg',
    desc: 'Beberapa Foto Kunjungan Arrayah SMP Negeri 1 Cibadak',
  },
  {
    title: 'Perpisahan 2016',
    img: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    desc: 'Foto Perpisahan SMP Negeri 1 Cibadak',
  },
  {
    title: 'Wisuda Tahfidz',
    img: 'https://tse2.mm.bing.net/th/id/OIP.8fQETiHqw9FjMmYCa9VWXgHaE7?pid=Api&P=0&h=180',
    desc: 'Foto Wisuda Tahfidz Murid SMP Negeri 1 Cibadak',
  },
  {
    title: 'MPLS 2016',
    img: 'https://tse2.mm.bing.net/th/id/OIP.G4Xq-0emohREy7iVUBSCZAHaEK?pid=Api&P=0&h=180',
    desc: 'Foto MPLS Masa Pengenalan Lingkungan Sekolah',
  },
  {
    title: 'Fasilitas Sekolah',
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
    desc: 'Foto Fasilitas Sekolah SMP Negeri 1 Cibadak',
    link:'/facilities',
  },
];

export default function Gallery() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Banner */}
      <div className="relative w-full h-60 bg-cover bg-center bg-[url('https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white">
          <h2 className="text-3xl font-bold">Gallery SMP Negeri 1 Cibadak</h2>
          <p className="text-sm mt-2">Beberapa Foto - Foto di SMP Negeri 1 Cibadak</p>
        </div>
      </div>

      {/* Gallery Cards */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryData.map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover transform transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-br-md font-semibold">{item.title}</div>
            </div>
            <div className="p-4">
              <p className="text-sm">{item.desc}</p>
              {item.link ? (
                <Link
                  to={item.link}
                  className="text-blue-600 text-sm font-semibold mt-2 block hover:underline transition duration-300"
                >
                  Lihat Foto
                </Link>
              ) : (
                <span className="text-gray-400 text-sm mt-2 block cursor-not-allowed">Lihat Foto</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (static for now) */}
      <div className="flex justify-center pb-10">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="w-8 h-8 rounded-full bg-white border border-gray-300 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

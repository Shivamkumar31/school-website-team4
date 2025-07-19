// src/pages/Home.jsx
import Button from '../components/Button';
import bannerImage from '../assets/bannerImage.png'; // Make sure file exists
import principalImage from '../assets/principal-group.png';

export default function Home() {
  return (
    <div className="font-sans mt-0">

      {/* ✅ Banner Section with <img> for reliability */}
      <section className="relative w-full m-0 p-0">
  <img
    src={bannerImage}
    alt="Banner"
    className="w-full h-auto object-contain block"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-blue bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">
      Pemberitahuan PPDB 2020/2021
    </h2>
    <p className="text-sm md:text-base max-w-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</section>




      {/* Agenda Info */}
      <section className="bg-white py-10">
        <h3 className="text-center text-xl font-bold mb-6">Info Agenda</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <InfoCard title="Waktu Mulai" icon="⏰" time="08:00 AM" date="2020-06-29" />
          <InfoCard title="Waktu Selesai" icon="🕔" time="05:00 PM" date="2020-07-04" />
          <InfoCard title="Tempat" icon="📍" time="Gedung SMPN 1 Cibadak" />
        </div>
      </section>

      {/* Principal Message */}
      <section className="bg-sky-300 py-10">
        <div className="max-w-6xl mx-auto px-4 md:flex items-start gap-8">
          <div className="md:w-2/3 text-justify">
            <p className="mb-4">Assalamualaikum wr.wb,</p>
            <p className="mb-4">
              Diperemaklumkan dengan hormat, di tengah masih mewabahnya penyebaran Covid-19...
              <br />Selanjutnya, menindaklanjuti Surat Keputusan Bupati Sukabumi...
            </p>
            <p className="mb-4">
              Maka perlu kami sampaikan bahwa PPDB tahun 2020/2021...
            </p>
            <Button>Lihat Informasi Lanjut</Button>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img src={principalImage} alt="Karyawan SMPN 1 Cibadak" className="rounded-md shadow-md" />
            <p className="text-center text-sm mt-2">Karyawan SMPN 1 Cibadak</p>
          </div>
        </div>
      </section>

    </div>
  );
}

// Reusable InfoCard Component
function InfoCard({ title, icon, time, date }) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center bg-white">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      {time && <p className="text-sm">{time}</p>}
      {date && <p className="text-sm text-gray-600">{date}</p>}
    </div>
  );
}



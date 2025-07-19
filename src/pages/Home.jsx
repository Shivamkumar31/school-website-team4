import Button from '../components/Button';
import bannerImage from '../assets/bannerImage.png';
import principalImage from '../assets/principal-group.png';

export default function Home() {
  return (
      <div className="font-sans mt-0">

        <section className="relative w-full m-0 p-0">
          <img
              src={bannerImage}
              alt="Banner"
              className="w-full h-auto object-contain block"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-blue bg-opacity-50 flex items-center justify-center flex-col text-white text-center p-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              2025 New Student Admission Notification
            </h2>
            <p className="text-sm md:text-base max-w-xl">
              Welcome prospective students and parents! Our admission process for the 2025 academic year is now open. Find all the essential details and application requirements below.
            </p>
          </div>
        </section>


        <section className="bg-white py-10">
          <h3 className="text-center text-xl font-bold mb-6">Agenda Information</h3>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <InfoCard title="Start Time" icon="⏰" time="08:00 AM" date="2020-06-29" />
            <InfoCard title="End Time" icon="🕔" time="05:00 PM" date="2020-07-04" />
            <InfoCard title="Location" icon="📍" time="SMPN 1 Cibadak Building" />
          </div>
        </section>

        <section className="bg-sky-300 py-10">
          <div className="max-w-6xl mx-auto px-4 md:flex items-start gap-8">
            <div className="md:w-2/3 text-justify">
              <p className="mb-4">Peace be upon you, and the mercy of God and His blessings.</p>
              <p className="mb-4">
                Respectfully informed, amidst the ongoing spread of Covid-19...
                <br />Furthermore, following up on the Decree of the Regent of Sukabumi...
              </p>
              <p className="mb-4">
                Therefore, we need to convey that the 2020/2021 New Student Admission...
              </p>
              <Button>View More Information</Button>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <img src={principalImage} alt="SMPN 1 Cibadak Employees" className="rounded-md shadow-md" />
              <p className="text-center text-sm mt-2">SMPN 1 Cibadak Employees</p>
            </div>
          </div>
        </section>

      </div>
  );
}

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
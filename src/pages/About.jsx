
import React from 'react';
import { BookOpen, Users, Mail, MapPin, Quote } from 'lucide-react'; // install: npm install lucide-react

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">About the School</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        </div>

        {/* Intro Paragraphs */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <p className="text-lg leading-relaxed">
            <strong>SMP Negeri 1 Cibadak</strong> is one of the leading educational institutions located in Sukabumi Regency. This school has made significant contributions in the field of education, especially at the Junior High School (SMP) level.
          </p>

          <p className="text-lg leading-relaxed">
            With the spirit of <em>“Bhaya Cintarasa Bhayari Bhakti”</em>, the school emphasizes values like discipline, togetherness, and a passion for learning to shape a high-quality young generation.
          </p>

          <p className="text-lg leading-relaxed">
            During the COVID-19 pandemic, SMPN 1 Cibadak remained committed to conducting the student admission process online to ensure the health and safety of all involved.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="bg-blue-50 p-6 rounded-2xl shadow space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Vision & Mission</h2>
          </div>
          <ul className="list-disc list-inside text-lg space-y-2 pl-2">
            <li>To produce graduates who are accomplished and noble in character.</li>
            <li>To develop students' potential to the fullest.</li>
            <li>To improve the quality of education through effective learning activities.</li>
            <li>To foster a spirit of nationalism and social awareness.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Users className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>

          <p className="text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span><strong>Address:</strong> SMPN 1 Cibadak Building, Sukabumi Regency, West Java</span>
          </p>

          <p className="text-lg flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            <span><strong>Email:</strong> info@bsbhayari.sch.id</span>
          </p>

          <p className="text-lg flex items-center gap-2">
            <Quote className="w-5 h-5 text-blue-500" />
            <span><strong>Motto:</strong> "Bhaya Cintarasa Bhayari Bhakti (BS104)"</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


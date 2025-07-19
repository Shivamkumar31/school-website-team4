import React from 'react';

const Announcements = () => (
  <section className="mb-6">
    <h2 className="text-lg font-semibold mb-2">Announcements</h2>
    <ul className="list-disc ml-6 mb-4">
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>New library books available from August 2025.</span>
        <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors duration-200 text-sm font-semibold cursor-pointer">View</button>
      </li>
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>Annual Sports Day: 30th September 2025.</span>
        <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors duration-200 text-sm font-semibold cursor-pointer">View</button>
      </li>
      <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <span>Science Fair registration open until 20th October 2025.</span>
        <button className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors duration-200 text-sm font-semibold cursor-pointer">View</button>
      </li>
    </ul>
  </section>
);

export default Announcements;

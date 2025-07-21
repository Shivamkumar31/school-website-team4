const announcementsByClass = {
  5: [
    {
      text: "Welcome to Class 5! Library books available from August 2025.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 5 Sports Day: 30th September 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 5 Science Fair registration open until 20th October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
  6: [
    {
      text: "Welcome to Class 6! New math books available.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 6 Sports Day: 1st October 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 6 Science Fair registration open until 22nd October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
  7: [
    {
      text: "Welcome to Class 7! English workshop next week.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 7 Sports Day: 2nd October 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 7 Science Fair registration open until 24th October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
  8: [
    {
      text: "Welcome to Class 8! Science kits distributed.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 8 Sports Day: 3rd October 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 8 Science Fair registration open until 26th October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
  9: [
    {
      text: "Welcome to Class 9! Project guidelines released.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 9 Sports Day: 4th October 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 9 Science Fair registration open until 28th October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
  10: [
    {
      text: "Welcome to Class 10! Board exam tips session.",
      pdf: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      text: "Class 10 Sports Day: 5th October 2025.",
      pdf: "https://www.orimi.com/pdf-test.pdf",
    },
    {
      text: "Class 10 Science Fair registration open until 30th October 2025.",
      pdf: "https://www.africau.edu/images/default/sample.pdf",
    },
  ],
};

const Announcements = ({ classLevel }) => {
  const announcements =
    announcementsByClass[classLevel] || announcementsByClass[5];

  return (
    <section className="mb-6">
      <h2 className="text-ghghfghfgghlg font-semibold mb-2">Announcements</h2>
      <ul className="list-disc ml-6 mb-4">
        {announcements.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3"
          >
            <span>{item.text}</span>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition-colors duration-200 text-sm font-semibold cursor-pointer"
              onClick={() => window.open(item.pdf, "_blank")}
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Announcements;

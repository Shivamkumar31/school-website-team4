const assignmentsByClass = {
  5: [
    { title: "Math Assignment 1", file: "/assets/class5-math-assignment1.pdf" },
    {
      title: "Science Worksheet",
      file: "/assets/class5-science-worksheet.pdf",
    },
  ],
  6: [
    { title: "Math Assignment 1", file: "/assets/class6-math-assignment1.pdf" },
    {
      title: "Science Worksheet",
      file: "/assets/class6-science-worksheet.pdf",
    },
  ],
  7: [
    { title: "Math Assignment 1", file: "/assets/class7-math-assignment1.pdf" },
    {
      title: "Science Worksheet",
      file: "/assets/class7-science-worksheet.pdf",
    },
  ],
  8: [
    { title: "Math Assignment 1", file: "/assets/class8-math-assignment1.pdf" },
    {
      title: "Science Worksheet",
      file: "/assets/class8-science-worksheet.pdf",
    },
  ],
  9: [
    { title: "Math Assignment 1", file: "/assets/class9-math-assignment1.pdf" },
    {
      title: "Science Worksheet",
      file: "/assets/class9-science-worksheet.pdf",
    },
  ],
  10: [
    {
      title: "Math Assignment 1",
      file: "/assets/class10-math-assignment1.pdf",
    },
    {
      title: "Science Worksheet",
      file: "/assets/class10-science-worksheet.pdf",
    },
  ],
};

const Assignments = ({ classLevel }) => {
  const assignments = assignmentsByClass[classLevel] || assignmentsByClass[5];
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Assignments</h2>
      <ul className="list-disc ml-6">
        {assignments.map((item, idx) => (
          <li key={idx}>
            <a href={item.file} className="text-blue-700 underline" download>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Assignments;

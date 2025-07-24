const materialsByClass = {
  5: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class5-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class5-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class5-english.pdf",
    },
  ],
  6: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class6-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class6-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class6-english.pdf",
    },
  ],
  7: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class7-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class7-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class7-english.pdf",
    },
  ],
  8: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class8-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class8-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class8-english.pdf",
    },
  ],
  9: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class9-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class9-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class9-english.pdf",
    },
  ],
  10: [
    { name: "Mathematics Notes (PDF)", file: "/assets/class10-math.pdf" },
    { name: "Science Lab Manual (PDF)", file: "/assets/class10-science.pdf" },
    {
      name: "English Literature Guide (PDF)",
      file: "/assets/class10-english.pdf",
    },
  ],
};

const StudyMaterial = ({ classLevel }) => {
  const materials = materialsByClass[classLevel] || materialsByClass[5];
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Study Material</h2>
      <ul className="list-disc ml-6">
        {materials.map((item, idx) => (
          <li key={idx}>
            <a href={item.file} className="text-blue-700 underline" download>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StudyMaterial;

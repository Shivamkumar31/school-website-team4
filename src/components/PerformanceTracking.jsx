const performanceByClass = {
  5: [
    { subject: "Mathematics", score: 85 },
    { subject: "Science", score: 88 },
    { subject: "English", score: 90 },
  ],
  6: [
    { subject: "Mathematics", score: 80 },
    { subject: "Science", score: 86 },
    { subject: "English", score: 89 },
  ],
  7: [
    { subject: "Mathematics", score: 78 },
    { subject: "Science", score: 84 },
    { subject: "English", score: 87 },
  ],
  8: [
    { subject: "Mathematics", score: 82 },
    { subject: "Science", score: 85 },
    { subject: "English", score: 88 },
  ],
  9: [
    { subject: "Mathematics", score: 75 },
    { subject: "Science", score: 80 },
    { subject: "English", score: 85 },
  ],
  10: [
    { subject: "Mathematics", score: 90 },
    { subject: "Science", score: 92 },
    { subject: "English", score: 93 },
  ],
};

const PerformanceTracking = ({ classLevel }) => {
  const performance = performanceByClass[classLevel] || performanceByClass[5];
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Performance Tracking</h2>
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Subject</th>
            <th className="px-4 py-2 border">Score</th>
          </tr>
        </thead>
        <tbody>
          {performance.map((item, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border">{item.subject}</td>
              <td className="px-4 py-2 border">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PerformanceTracking;

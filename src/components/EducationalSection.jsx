export default function EducationalSection({ educations }) {
  return (
    <div>
      <h2>Educational Section</h2>
      {educations.map((edu, index) => (
        <div key={index}>
          <p>{edu.school}</p>
          <p>{edu.study}</p>
          <p>
            {edu.startDate} – {edu.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}

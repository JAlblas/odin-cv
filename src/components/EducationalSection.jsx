export default function EducationalSection({
  educations,
  saveEducation,
  school,
  handleSchoolChange,
  study,
  handleStudyChange,
  startDate,
  handleStartDateChange,
  endDate,
  handleEndDateChange,
}) {
  return (
    <div>
      <h2>Educational Section</h2>
      <div id="educations">
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

      <fieldset>
        <legend>Add education:</legend>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={handleSchoolChange}
        />
        <label htmlFor="study">Study:</label>
        <input
          type="text"
          id="study"
          value={study}
          onChange={handleStudyChange}
        />
        <label htmlFor="startDate">startDate:</label>
        <input
          type="text"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label htmlFor="endDate">endDate:</label>
        <input
          type="text"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <input
          type="submit"
          value="Create"
          onClick={() => {
            saveEducation({
              school,
              study,
              startDate,
              endDate,
            });
          }}
        />
      </fieldset>
    </div>
  );
}

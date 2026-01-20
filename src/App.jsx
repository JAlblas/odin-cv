import { useState } from "react";
import "./App.css";

import GeneralSection from "./components/GeneralSection";
import EducationalSection from "./components/EducationalSection";
import ExperienceSection from "./components/ExperienceSection";
import CVRender from "./components/CVRender";

function App() {
  const [name, setName] = useState("Jasper");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const [educations, setEductions] = useState([
    {
      school: "Test school",
      study: "Test study",
      startDate: "startDate",
      endDate: "endDate",
    },
  ]);
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleStudyChange = (e) => {
    setStudy(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const saveEducation = ({ school, study, startDate, endDate }) => {
    setEductions([
      ...educations,
      { school: school, study: study, startDate: startDate, endDate: endDate },
    ]);
    setSchool("");
    setStudy("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div id="container">
      <div id="forms">
        <GeneralSection
          name={name}
          handleNameChange={handleNameChange}
          email={email}
          handleEmailChange={handleEmailChange}
          telephone={telephone}
          handleTelephoneChange={handleTelephoneChange}
        />
        <EducationalSection
          educations={educations}
          saveEducation={saveEducation}
          handleSchoolChange={handleSchoolChange}
          school={school}
          handleStudyChange={handleStudyChange}
          study={study}
          handleStartDateChange={handleStartDateChange}
          startDate={startDate}
          handleEndDateChange={handleEndDateChange}
          endDate={endDate}
        />
        <ExperienceSection />
      </div>

      <CVRender name={name} email={email} telephone={telephone} />
    </div>
  );
}

export default App;

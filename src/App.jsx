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
        <EducationalSection educations={educations} />
        <ExperienceSection />
      </div>

      <CVRender name={name} email={email} telephone={telephone} />
    </div>
  );
}

export default App;

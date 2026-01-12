import { useState } from "react";
import "./App.css";

import GeneralSection from "./components/GeneralSection";
import EducationalSection from "./components/EducationalSection";
import ExperienceSection from "./components/ExperienceSection";
import CVRender from "./components/CVRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <div id="forms">
        <GeneralSection />
        <EducationalSection />
        <ExperienceSection />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <CVRender />
    </div>
  );
}

export default App;

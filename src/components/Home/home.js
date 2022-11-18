import AddProject from "./AddProject";
import CurrentProjects from "./CurrentProjects";

import React, { useState } from "react";

function Home() {
  const [addIssue, setAddIssue] = useState(true);

  function showAddIssue() {
    setAddIssue(true);
  }

  function showCurrentIssue() {
    setAddIssue(false);
  }

  return (
    <div className="Home">
      <div className="projects">
      <h1>Project</h1>
      <div className="grey-card-contianer">
        {addIssue ? <AddProject /> : <CurrentProjects />}
      </div>
      <div className="view-selection-div">
        <button class="view-button" onClick={() => showCurrentIssue()}>
          Current Projects
        </button>
        <button
          class="view-button active-button"
          onClick={() => showAddIssue()}
        >
          Add Project
        </button>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
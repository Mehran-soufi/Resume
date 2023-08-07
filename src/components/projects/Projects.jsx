import React, { useState } from "react";
import PersonalProject from "./PersonalProject";
import InternshipProject from "./InternshipProject";

const Projects = () => {
  const [internship, setInternship] = useState(true);

  return (
    <div className="bg4">
      <section>
        <div className="title">
          <h2>پروژه های من</h2>
        </div>
        <div className="projects">
          <div className="projects-title">
            <button
              className={internship ? "" : "dis"}
              onClick={() => setInternship(true)}
            >
              پروژه کارآموزی
            </button>
            <button
              className={internship ? "dis" : ""}
              onClick={() => setInternship(false)}
            >
              پروژه های شخصی
            </button>
          </div>
          <div className="projects-items">
            {internship ? <InternshipProject /> : <PersonalProject />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

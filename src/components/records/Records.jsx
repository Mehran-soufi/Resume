import React, { useState } from "react";
import JobResume from "./JobResume";
import EducationResume from "./EducationResume";

import job from "../../assests/job.webp";
import edu from "../../assests/education.webp";
import { Fade } from "react-reveal";

const Records = () => {
  const [resume, setResume] = useState(true);
  const [resumeItem, setResumeItem] = useState(true);

  const eduHandler = () => {
    setResume(false);
    setResumeItem(false)
  };
  const jobHandler = () => {
    setResume(true);
    setResumeItem(true)
  };

  return (
    <div className="bg3">
      <section>
        <div className="title">
          <h2>سوابق کاری و تحصیلی</h2>
        </div>
        <div className="records">
          <div className="records-item">
            <div className="resume">
              {resume ? <JobResume /> : <EducationResume />}
            </div>
          </div>
          <div className="records-menu">
            <div
              className={resumeItem ? "records-hed" : "records-hed-left"}
            ></div>
            <Fade bottom>
            <div className="record-menu">
              <div
                className={
                  resumeItem ? "record-menu_item" : "record-menu_item item"
                }
                onClick={jobHandler}
              >
                <img src={job} alt="" />
                <p>سابقه کاری</p>
              </div>
              <div
                className={
                  resumeItem ? "record-menu_item item" : "record-menu_item"
                }
                onClick={eduHandler}
              >
                <img src={edu} alt="" />
                <p>سابقه تحصیلی</p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Records;

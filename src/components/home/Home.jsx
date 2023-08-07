import React from "react";

const Home = () => {

  const moveToProjectsHandler = ()=>{
    window.scrollTo({top:window.innerHeight * 4})
  }

  return (
    <div className="home">
      <section>
        <div className="home-items">
          <div className="home-title">
            <p className="text-one">وب سایت</p>
            <p className="text-two">شخصی</p>
            <p className="text-three">مهران صوفی</p>
          </div>
          <div className="home-links">
            <button className="btn-projects" onClick={moveToProjectsHandler}>پروژه‌های من</button>
            <button className="btn-resume">
              <a
              className="dis-ink-resume"
                target="_blank"
                href="https://drive.google.com/file/d/1ItipMSl5pwNP9AVdVycmuoFiPUXh1Pys/view?usp=drive_link"
              >
                دانلود رزومه
              </a>
              <span>
                <a 
                className="ink-resume"
                  target="_blank"
                  href="https://drive.google.com/file/d/1ItipMSl5pwNP9AVdVycmuoFiPUXh1Pys/view?usp=drive_link"
                >
                  دانلود رزومه
                </a>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

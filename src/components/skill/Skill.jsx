import React from "react";
import { useSpring, animated } from "react-spring";
import { Fade } from "react-reveal";

const Skill = () => {

  const skills = [
    { name: "HTML", percent: 100 },
    { name: "CSS", percent: 99 },
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 80 },
    { name: "Redux", percent: 70 },
    { name: "Sass", percent: 90 },
    { name: "BootStrap", percent: 90 },
    { name: "Git", percent: 75 },
    { name: "Github", percent: 80 },
  ];
  const persenSkills = [
    { name: "کار تیمی", percent: 95 },
    { name: "حل مسائل", percent: 90 },
    { name: "روحیه فردی", percent: 90 },
    { name: "تدریس", percent: 85 },
    { name: "مدیریت زمان", percent: 90 },
    { name: "انعطاف‌پذیری", percent: 90 },
    { name: "تصمیم‌گیری", percent: 90 },
  ];
  const languageSkills = [
    { name: "کردی", percent: 100 },
    { name: "فارسی", percent: 100 },
    { name: "انگلیسی", percent: 50 },
  ];
  
  const skillAnimation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.5)" },
  });

  return (
    <div className="bg2">
      <section>
        <div className="title">
          <h2>مهارت های من</h2>
        </div>
        <div className="skil">
          <div className="skill-items">
            <div className="skill-title">
              <p>مهارت های تخصصی</p>
            </div>
            <div className="skill-details">
              {skills.map((item, index) => (
                <Fade key={index} bottom delay={index * 200}>
                  <animated.div
                    className="skill-detail_item"
                    style={{
                      backgroundImage: `conic-gradient(#d35400 0% ${item.percent}%, transparent ${item.percent}% 100%)`,
                      ...skillAnimation,
                    }}
                  >
                    <p>{item.name}</p>
                    <strong>{item.percent}%</strong>
                    {index === 0 ? (
                      <animated.div className="skill-abs" style={skillAnimation} />
                    ) : (
                      <div className="skill-abs" />
                    )}
                  </animated.div>
                </Fade>
              ))}
            </div>
          </div>
          <div className="skill-items">
            <div className="skill-title">
              <p>مهارت های فردی</p>
            </div>
            <div className="skill-details">
              {persenSkills.map((item, index) => (
                <Fade key={index} bottom delay={index * 200}>
                  <animated.div
                    className="skill-detail_item"
                    style={{
                      backgroundImage: `conic-gradient(#d35400 0% ${item.percent}%, transparent ${item.percent}% 100%)`,
                      ...skillAnimation,
                    }}
                  >
                    <p>{item.name}</p>
                    <strong>{item.percent}%</strong>
                    {index === 0 ? (
                      <animated.div className="skill-abs" style={skillAnimation} />
                    ) : (
                      <div className="skill-abs" />
                    )}
                  </animated.div>
                </Fade>
              ))}
            </div>
          </div>
          <div className="skill-items">
            <div className="skill-title">
              <p>مهارت های زبانی</p>
            </div>
            <div className="skill-details">
              {languageSkills.map((item, index) => (
                <Fade key={index} bottom delay={index * 200}>
                  <animated.div
                    className="skill-detail_item"
                    style={{
                      backgroundImage: `conic-gradient(#d35400 0% ${item.percent}%, transparent ${item.percent}% 100%)`,
                      ...skillAnimation,
                    }}
                  >
                    <p>{item.name}</p>
                    <strong>{item.percent}%</strong>
                    {index === 0 ? (
                      <animated.div className="skill-abs" style={skillAnimation} />
                    ) : (
                      <div className="skill-abs" />
                    )}
                  </animated.div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
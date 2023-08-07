import React from "react";

import img from "../../assests/screenpng.webp";

import { Fade } from "react-reveal";
import { useTrail } from "react-spring";

const InternshipProject = () => {
  const projects = [
    {
      id: 1,
      title: "سایت گیم شاپ",
      img: img,
      links: "https://gameshop-mehran.netlify.app/",
      text: "یک وب سایت جامع و کامل دارای api برای محصولات و قابلیت ثبت نام و ورود به حساب کاربری و تغییر اطلاعات کاربری و دارای سبد خرید و لیست علاقه مندی ها",
    },
  ];

  const trail = useTrail(projects.length, {
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-100px)" },
  });

  return (
    <div className="personal-pr">
      {trail.map((styles, index) => (
        <Fade key={projects[index].id} delay={index * 200}>
          <div className="project-detail" style={styles}>
            <div className="pr-det_img">
              <img src={projects[index].img} alt="" />
            </div>
            <div className="pr-det_detail">
              <div className="title">
                <h3>{projects[index].title}</h3>
              </div>
              <div className="text">
                <p>{projects[index].text}</p>
              </div>
              <div className="btn">
                <button>
                  <a href={projects[index].links} target="_blank">
                    مشاهده پروژه
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default InternshipProject;

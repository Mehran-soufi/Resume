import React from "react";
import img1 from "../../assests/screen1.webp";
import img2 from "../../assests/screen2.webp";
import img3 from "../../assests/screen3.webp";
import { useTrail } from "react-spring";
import Fade from 'react-reveal'


const PersonalProject = () => {
  const projects = [
    {
      id: 1,
      title: "سایت ایران فیلم",
      img: img1,
      links: "https://iranfilm.netlify.app/",
      text: "قالب سایت فیلم کاملا ریسپانسیو شده و سعی شده که در این قالب از رنگ های جذاب و گیرا استفاده شود همچنین بخش های مختلفی در آن گنجانده شده که همین امر سبب گشته تا قالبی کامل در اختیار شما باشد.",
    },
    {
      id: 2,
      title: "سایت ورزشی پرشین",
      img: img2,
      links: "https://persiangym.netlify.app/",
      text: "وب سایت ورزشی پرشین کاملا ریسپانسیو و دارای دو حالت شب و روز و تک صفحه ای می باشد.",
    },
    {
      id: 3,
      title: "سایت اجاره خودرو کارنت",
      img: img3,
      links: "https://carnetmehran.netlify.app/",
      text: "یک وب سایت اجاره خودرو با حالت گفتگو با پشتیبانی و ارسال پیام البته به صورت نمادین",
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

export default PersonalProject;

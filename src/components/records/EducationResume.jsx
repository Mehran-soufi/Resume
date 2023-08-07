import React from "react";

const EducationResume = () => {
  const resume = [
    {
      title: "مهندسی کامپیوتر",
      section: "کارشناسی",
      uni: "پیام نور",
      start: "1397",
      end: "1401",
      avr:"16"
    },
    {
      title: "مدیریت فناوری اطلاعات",
      section: "کارشناسی ارشد",
      uni: "پیام نور",
      start: "1402",
      end: "مشغول به تحصیل",
      avr:"--"
    },
  ];

  return (
    <div className="resume-item">
      {resume.map((item, index) => (
        <div className="resume-detail" key={index}>
          <strong>{index + 1}</strong>
          <p>
            رشته:
            <span>{item.title}</span>
          </p>
          <p>
           مقطع:
            <span>{item.section}</span>
          </p>
          <p>
           دانشگاه:
            <span>{item.uni}</span>
          </p>
          <p>
            تاریخ شروع:
            <span>{item.start}</span>
          </p>
          <p>
            پایان همکاری:
            <span>{item.end}</span>
          </p>
          <p>
           معدل:
            <span>{item.avr}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationResume;

import React from "react";

const JobResume = () => {
  const resume = [
    {
      title: "ناظر سایت",
      company: "شیپور",
      start: "1398",
      end: "مشغول به کار",
    },
    {
      title: "مدرس سایت",
      company: "مبینا فناوران",
      start: "1400",
      end: "1401",
    },
    {
      title: "کارآموزی",
      company: "کیکاووس زمان",
      start: "1401",
      end: "1401",
    },
  ];

  return (
    <div className="resume-item">
        {
            resume.map((item,index)=>(
                <div className="resume-detail" key={index}>
                    <strong>{index+1}</strong>
                <p>نام شرکت:
                    <span>{item.company}</span>
                </p>
                <p>عنوان کاری:
                    <span>{item.title}</span>
                </p>
                <p>تاریخ شروع:
                    <span>{item.start}</span>
                </p>
                <p>پایان همکاری:
                    <span>{item.end}</span>
                </p>
              </div>
            ))
        }
     
    </div>
  );
};

export default JobResume;

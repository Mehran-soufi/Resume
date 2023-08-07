import React from "react";

import mehran from "../../assests/mehran.webp";

const About = () => {
  return (
    <div className="bg">
      <section>
        <div className="title">
          <h2>درباره من</h2>
        </div>
        <div className="about">
          <div className="about-text">
            <p>
              مهران صوفی هستم زاده دی ماه سال یک هزار و سیصد و هفتاد و هشت
              خورشیدی.
            </p>
            <p>
              طراح و برنامه نویس سایت هستم، این حرفه رو از سال 1400 شروع کردم و
              از سال 1401 به صورت جدی تر دنبال کردم و از اون روزا تا به اکنون
              سعی کردم هرروز مطالب جدیدتری یاد بگیرم و به مهارت هام اضافه کنم.
            </p>
            <p>
              مسلط به توسعه و طراحی وب سایت‌ها با استفاده از React و آشنا به
              انواع کتابخانه‌های جاوا اسکریپت. علاقه‌مند به کار تیمی، عاشق
              چالش‌های پیچیده و حل مسائل در مسیر توسعه. تمرکز بر کیفیت و همکاری
              موثر در پروژه‌ها.
            </p>
          </div>
          <div className="about-image">
            <span className="one"></span>
            <div className="img-about">
              <div className="img">
                <img src={mehran} alt="مهران صوفی" />
              </div>
            </div>
            <span className="two"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

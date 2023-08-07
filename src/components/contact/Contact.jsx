import React from "react";

const Contact = () => {
  return (
    <div className="bg2">
      <section>
        <div className="title">
          <h2>ارتباط با من</h2>
        </div>
        <div className="contact">
          <div className="contact-form">
            <div className="form-item">
              <p>ایمیل:</p>
              <span>mehransoufi1@gmail.com</span>
            </div>
            <div className="form-item">
              <p>شماره تماس اول:</p>
              <span>09213821172</span>
            </div>
            <div className="form-item">
              <p>شماره تماس دوم:</p>
              <span>09302785641</span>
            </div>
            <div className="form-links">
              <div className="f-link">
                <a
                  href="https://github.com/mehran-soufi"
                  target="_blank"
                  title="گیت هاب"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="f-link">
                <a
                  href="https://www.linkedin.com/in/mehran-soufi-3a635b275?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZDhuJRmeSiKhz6OFgihKyQ%3D%3D"
                  target="_blank"
                  title="لینکدین"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="f-link">
                <a
                  href="https://join.skype.com/invite/jvfQjvTh9H3c"
                  target="_blank"
                  title="اسکایپ"
                >
                  <i className="fa-brands fa-skype"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

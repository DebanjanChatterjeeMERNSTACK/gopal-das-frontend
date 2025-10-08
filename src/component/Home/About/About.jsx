import React from "react";
import "./About.css";
import aboutimg from "../../../assets/image1.png";

const About = () => {
  return (
    <>
      <div className="about_contaner">
        <div className="about_maxwidth">
          <div className="about_image">
            <img src={aboutimg} />
          </div>
          <div className="about_contant">
            <h6>ABOUT ME</h6>
            <h1>Stories That Touch Souls</h1>
            <p>
              Over the years, I have written around 20–25 short stories, two
              novels, and several poems in my native language. My works have
              been warmly received by readers, and you can find all of them on
              social media and here on this website—free to read and enjoy. In
              2016, with the support of many IT professionals, I founded the UIS
              Cancer Foundation Charitable Trust. Through this initiative, we
              have reached more than 6,000 people, supported 334 cancer
              survivors, and conducted 21 cancer awareness programs across
              Odisha. My experiences in this journey made me realize the deeper
              issues within our society, which inspired me to write more with a
              purpose. I believe that literature has an unmatched power to bring
              social change and guide society on the right path. Writing, for
              me, is not just expression—it is service. When one novel
              Neelatrushna was in my hand, every word carried a reflection of my
              emotions and also sparked a subtle current of thought for change.
              It reminded me once again why I write: to connect hearts and to
              move society forward.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

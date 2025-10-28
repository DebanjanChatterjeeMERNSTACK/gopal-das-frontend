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
             Writing has always been my way of connecting with people. Over the years, I’ve written around 20–25 short stories, two novels, and several poems in my native language. Each of them carries a piece of my journey, my thoughts, and the world I see around me. You can find all my works on social media and here on this website—free to read and share.

In 2016, with the support of many IT professionals, I began working with several social organizations like UIS Cancer Foundation Charitable Trust, Ramadas Seba Sangathan, and Cancer Volunteers of Odisha. Together, we reached over 6,000 people, supported 334 cancer survivors, conducted 21 cancer awareness programs across Odisha, and helped rehabilitate 9 families and educate their children.

These experiences deeply changed how I see life and strengthened my belief that writing can be more than just art—it can be service. I’ve learned that literature has the power to awaken empathy, spark thought, and bring real change in society.

When I completed my novel "Rupa Raijara Rupei", every word felt alive with emotion and purpose. It reminded me why I write: to touch hearts, to inspire hope, and to play a small part in moving society forward.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

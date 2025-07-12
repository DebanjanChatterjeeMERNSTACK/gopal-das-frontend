import React from "react";
import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoHome } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div className="contact_contaner">
        <div className="bgimage">
          <h3>Contact Me</h3>
        </div>
        <div className="contact_maxwidth">
            <div className="contact-info">
              <h4>» STAY CONNECTED</h4>
              <h2>Let’s Work Together!</h2>

              <div className="contact-item">
                <div className="icon-circle"><FaPhoneAlt /></div>
                <div>
                  <p className="label">Phone</p>
                  <p>+123-4669-1234</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-circle"><SiMinutemailer /></div>
                <div>
                  <p className="label">Email</p>
                  <p>hello@flixta.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-circle"><IoHome /></div>
                <div>
                  <p className="label">Address</p>
                  <p>
                    2096 New Market, New Road
                    <br />
                    North Carolina, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div className="input-group">
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Your Phone" />
                </div>
                <textarea placeholder="Write Your Message" rows="5" className="textareacolor"></textarea>
                <button type="submit" className="btn">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};
export default Contact;

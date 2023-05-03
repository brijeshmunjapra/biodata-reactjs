import React from "react";
import "./Contact.css";

import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Social Media Handles</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <div className="insta_links">
              <h5>Business</h5>
              <a
                href="https://instagram.com/artin_arts_2017?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </div>
            <div className="insta_links">
              <h5>Personal</h5>

              <a
                href="https://instagram.com/brijlo__?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
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
          {/* <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 6307463138</h5>
            <a
              href="https://api.whatsapp.com/send?phone=916307463138"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

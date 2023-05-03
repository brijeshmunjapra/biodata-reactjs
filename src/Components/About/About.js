import React from "react";
import "./About.css";
import myImage from "../../assets/myImage.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="" />
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h4>Personal Details</h4>
              <div className="about_personal_main">
                <div className="about_personal">
                  <small>Birth-Date</small>
                  <small>Height-Weight</small>
                  <small>Cast</small>

                  <small>Agricultural land</small>
                  <small>Hobbies</small>
                </div>
                <div className="about_personal">
                  <small>:</small>
                  <small>:</small>
                  <small>:</small>
                  <small>:</small>
                  <small>:</small>
                </div>
                <div className="about_personal values">
                  <small>07 Aug - 1999</small>
                  <small>5' 7", 55 Kgs</small>
                  <small>Hindu Leuva Patel</small>
                  <small>10 Vigha</small>
                  <small>Sketching, Coding</small>
                </div>
              </div>
            </article>
            <article className="about__card">
              {/* <FiUsers className="about__icon" /> */}
              <h4>Education</h4>
              <small>Bachelor of Engineering from MSU - Vadodara</small>
            </article>
            <article className="about__card">
              {/* <VscFolderLibrary className="about__icon" /> */}
              <h4>Occupation</h4>
              <small>
                1) Software Developer at Ivory Technolab Pvt. Ltd., Ahmedabad
              </small>
              <small>2) Freelance Sketch Artist</small>
            </article>
          </div>
          {/* <p>
            Experienced Software Engineer with a demonstrated history of working
            in the software development industry. I enjoy learning new
            technology, doing programming, analyzing and fixing issues, and
            making new things.
          </p> */}
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;

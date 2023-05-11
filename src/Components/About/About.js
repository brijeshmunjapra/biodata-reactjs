import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
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
                  <small>5' 6", 55 Kgs</small>
                  <small>Hindu Leuva Patel</small>
                  <small>10 Vigha</small>
                  <small>Sketching, Coding</small>
                </div>
              </div>
            </article>
             <article className="about__card">
              <h4>Native Place</h4>
              <small>
                Mandasan
              </small>
              <small>Ta. Jamjodhpur</small>
              <small>Dis. Jamnagar</small>

            </article>
            <article className="about__card">
              <h4>Education</h4>
              <small>
                Bachelor of Engineering from MS University - Vadodara
              </small>
            </article>
            <article className="about__card">
              <h4>Occupation</h4>
              <small>
                1) Software Developer at Ivory Technolab Pvt. Ltd., Ahmedabad
              </small>
              <small>2) Freelance Sketch Artist</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

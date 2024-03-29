import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Get to know</h5>
      <h2>About My Family</h2>
      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details">
            <div className="experience__details_sub">
              <h4>Father</h4>
              <small className="text-light additional">
                Arvindbhai Shamjibhai Munjapra
              </small>
              <small className="text-light ">(Diamond polish worker)</small>
            </div>
          </article>
          <article className="experience__details">
            <div className="experience__details_sub">
              <h4>Mother</h4>
              <small className="text-light additional">
                Parvatiben Arvindbhai Munjapra
              </small>
              <small className="text-light">(Housewife)</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;

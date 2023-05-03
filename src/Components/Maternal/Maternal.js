import React from "react";
import "../Experience/Experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";

const Maternal = () => {
  return (
    <section id="experience">
      {/* <h5>Get to know</h5> */}
      <h2>Maternal Details</h2>
      <div className="container experience__container">
        {/* <div className="experience__skills"> */}
        {/* <h3>Development Skills</h3> */}
        <div className="experience__content">
          <article className="experience__details">
            {/* <BsPatchCheckFill className="experience__details-icon" /> */}
            <div className="experience__details_sub">
              <small className="text-light additional">
                1. Dhirubhai Kanjibhai Bhalala
              </small>
              <small className="text-light additional">
                2. Rameshbhai Kanjibhai Bhalala
              </small>
              <small className="text-light">
                (Moti Bharad, Ta.Jamjodhpur, Dis.Jamnagar)
              </small>
              <small className="text-light">(Currently Surat)</small>
            </div>
          </article>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Maternal;

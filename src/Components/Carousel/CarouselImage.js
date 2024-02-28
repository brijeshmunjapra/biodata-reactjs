import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImage.css";

function CarouselImage() {
  return (
    <section id="imageSlider" style={{ marginTop: 0, marginBottom: "7rem" }}>
      <h2>Photos</h2>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
      >
        <div className="image_div">
          <img
            src="https://i.ibb.co/8NPSbFK/IMG-20230925-090940.jpg"
            alt="Image3"
          />
        </div>
        <div className="image_div">
          <img
            src="https://i.ibb.co/16Y2LQB/IMG-20230913-192534.jpg"
            alt="Image2"
          />
        </div>
        <div className="image_div">
          <img
            src="https://i.ibb.co/HVjDWnG/IMG20230820172911.jpg"
            alt="Image1"
          />
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselImage;

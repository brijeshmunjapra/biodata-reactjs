import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.jpg";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselImage.css";

function CarouselImage() {
  return (
    <section id="imageSlider">
      <h2>Photos</h2>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        showArrows={false}
      >
        <div className="image_div">
          <img src={Image1} alt="Image1" />
        </div>
        <div className="image_div">
          <img src={Image2} alt="Image2" />
        </div>
        <div className="image_div">
          <img src={Image3} alt="Image3" />
        </div>
        <div className="image_div">
          <img src={Image4} alt="Image4" />
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselImage;

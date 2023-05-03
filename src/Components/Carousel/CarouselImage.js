import React from "react";
import { Carousel } from "react-responsive-carousel";

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
          <img src="https://i.ibb.co/WxFjrY3/1.jpg" alt="Image1" />
        </div>
        <div className="image_div">
          <img src="https://i.ibb.co/YDrD4SD/2.jpg" alt="Image2" />
        </div>
        <div className="image_div">
          <img src="https://i.ibb.co/DpQHZt9/3.jpg" alt="Image3" />
        </div>
        <div className="image_div">
          <img src="https://i.ibb.co/bQqNRjn/4.jpg" alt="Image4" />
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselImage;

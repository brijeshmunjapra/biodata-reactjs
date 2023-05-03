import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";

import Contact from "./Components/Contact/Contact";
import Maternal from "./Components/Maternal/Maternal";

import { useState } from "react";
import mobile from "../src/assets/mobile suggest.gif";
import CarouselImage from "./Components/Carousel/CarouselImage";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  if (windowWidth > 500) {
    return (
      <div className="error_div">
        <h2>Sorry,</h2>
        <p>This page is only available on mobile devices.</p>
        <img src={mobile} alt="mobile" />
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Maternal />
      <CarouselImage />
      <Contact />
    </div>
  );
}

export default App;

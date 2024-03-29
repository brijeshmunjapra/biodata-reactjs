import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Brijesh Munjapra</h2>
        <h4 style={{ color: "#4db5ff" }}>+91 9723328348</h4>
        <small style={{ color: "#929292" }}>
          231, Rajeshwari Soc, near ABC mall,
        </small>
        <br />
        <small style={{ color: "#929292" }}>Kamrej, Surat- 394180</small>

        <div className="myImage">
        {/* <img src="https://i.ibb.co/RyfSJFB/IMG-20230219-181154.jpg" alt="main"/> */}
        <img src="https://i.ibb.co/Fnhjj1Q/IMG-20240302-092337.jpg" alt="IMG-20240302-092337" border="0"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;

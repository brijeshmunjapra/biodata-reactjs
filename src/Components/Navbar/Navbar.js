import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import { ImImages } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdFamilyRestroom />
      </a>
      <a
        href="#imageSlider"
        onClick={() => setActiveNav("#imageSlider")}
        className={activeNav === "#imageSlider" ? "active" : ""}
      >
        <ImImages />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsInstagram />
      </a>
    </nav>
  );
};

export default Navbar;

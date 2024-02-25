import React from "react";
import style from "./css/footer.module.css";
import img1 from "../assets/footerf1.png";
import img2 from "../assets/footerf2.png";
import img3 from "../assets/footerf3.png";
import img4 from "../assets/footerf4.png";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h1>beauty care</h1>
        <p>
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <h1>follow us</h1>
      </div>
      <div>
        <h1>instagram shop</h1>
        <div className={style["footer-images"]}>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

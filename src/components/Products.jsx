import React from "react";
import style from "./css/products.module.css";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";

const Products = () => {
  return (
    <div className={style.products}>
      <div className={style["products-title"]}>
        <h1>browse the range</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={style.images}>
        <img src={f1} alt="f1" />
        <img src={f2} alt="f2" />
        <img src={f3} alt="f3" />
      </div>
    </div>
  );
};

export default Products;

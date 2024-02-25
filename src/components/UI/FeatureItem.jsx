import React from "react";
import style from "./css/featureItem.module.css";
const FeatureItem = ({ imgSrc, alt, title, desc }) => {
  return (
    <div className={style["feature-item"]}>
      <img src={imgSrc} alt={alt} />
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;

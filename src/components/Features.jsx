import React from "react";
import style from "./css/features.module.css";
import truck from "../assets/truck.svg";
import support from "../assets/24.svg";
import verified from "../assets/verified.png";
import { FeatureItem } from "./UI";
const Features = () => {
  return (
    <div className={style.features}>
      <FeatureItem
        imgSrc={truck}
        alt="truck"
        title="free delivery"
        desc="Lorem ipsum dolor sit amet."
      />
      <FeatureItem
        imgSrc={support}
        alt="support"
        title="support 24/7"
        desc="Lorem ipsum dolor sit amet."
      />
      <FeatureItem
        imgSrc={verified}
        alt="verified"
        title="100% authentic"
        desc="Lorem ipsum dolor sit amet."
      />
    </div>
  );
};

export default Features;

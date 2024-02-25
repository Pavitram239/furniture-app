import React from "react";
import style from "./css/newsLetter.module.css";
const NewsLetter = () => {
  return (
    <div className={style.newsletter}>
      <h1>join our mailing list</h1>
      <p>
        Sign up to receive inspiration, product updates, and special offers from
        our team.
      </p>
      <div>
        <input type="text" placeholder="Enter your email" />
        <button className="btn" type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

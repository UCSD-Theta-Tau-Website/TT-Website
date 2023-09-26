import React, { useState } from "react";
import "../../style/brothers.css";
import RedFooter from "../footers/redFooter.js";

import BrotherCategory from "./brothersComponents/brotherCategory";

const Brothers = () => {
  const [brotherCategory, setBrotherCategory] = useState("Actives");

  function setCategory(event) {
    const categories = document.querySelectorAll(".category");
    categories.forEach((category) => {
      category.classList.remove("active");
    });
    event.target.classList.add("active");
    setBrotherCategory(event.target.innerHTML);
  }

  const [brotherCategory, setBrotherCategory] = useState("Actives");

  function setCategory(event) {
    const categories = document.querySelectorAll(".category");
    categories.forEach((category) => {
      category.classList.remove("active");
    });
    event.target.classList.add("active");
    setBrotherCategory(event.target.innerHTML);
  }

  return (
    <div className="brothers">
      <div className="banner">
        <div className="bannerText">
          <h1>OUR BROTHERS</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>

      <div className="content">
        <div className="categories">
          <h1 className="category" onClick={setCategory}>
            Leadership
          </h1>
          <h1 className="category active" onClick={setCategory}>
            Actives
          </h1>
          <h1 className="category" onClick={setCategory}>
            Alumni
          </h1>
        </div>

        <div className="brothers-display">
          <div
            className={`display-category ${
              brotherCategory === "Leadership" ? "" : "hide"
            }`}
            id="leadership"
          >
            <BrotherCategory categoryName="Leadership"></BrotherCategory>
          </div>
          <div
            className={`display-category ${
              brotherCategory === "Actives" ? "" : "hide"
            }`}
            id="actives"
          >
            <BrotherCategory categoryName="Actives"></BrotherCategory>
          </div>
          <div
            className={`display-category ${
              brotherCategory === "Alumni" ? "" : "hide"
            }`}
            id="alumni"
          >
            <BrotherCategory categoryName="Alumni"></BrotherCategory>
          </div>
        </div>
      </div>

      <RedFooter />
    </div>
  );
};

export default Brothers;

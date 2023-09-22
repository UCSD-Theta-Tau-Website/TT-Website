import React, { useState } from "react";
import "../../style/brothers.css";
import RedFooter from "../footers/redFooter.js";

import BrotherCard from "./brothersComponents/brotherCard";
import BrotherSection from "./brothersComponents/brotherSection";

const Brothers = () => {
  const [brotherCategory, setBrotherCategory] = useState("Actives");

  function setCategory(event) {
    const categories = document.querySelectorAll(".category");
    categories.forEach(category => {
      category.classList.remove('active');
    });
    event.target.classList.add('active');
    setBrotherCategory(event.target.innerHTML);
    console.log(event.target.innerHTML);
  }

  return (
    <div className="brothers">
      <div className="banner">
        <div className="bannerText">
          <h1>OUR BROTHERS</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>

      <div className="categories">
        <h1 className="category" onClick={setCategory}>Leadership</h1>
        <h1 className="category active" onClick={setCategory}>Actives</h1>
        <h1 className="category" onClick={setCategory}>Alumni</h1>
      </div>

      <div className="sections">
        <BrotherSection sectionName="Alpha Delta"></BrotherSection>
      </div>

      <div className="cardsContainer">
        {/* this is just for testing and seeing what the member modal looks like */}
        {/* <BrotherCard name="Huy Tran"></BrotherCard> */}
        {/* <BrotherCard name="Tiffany Joa"></BrotherCard> */}
      </div>
      <RedFooter />
    </div>
  );
}



export default Brothers;

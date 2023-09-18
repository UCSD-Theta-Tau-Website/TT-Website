import React from "react";
import "../../style/brothers.css";
import RedFooter from "../footers/redFooter.js";

import BrotherCard from "./brotherCard/brotherCard";

const Brothers = () => {
  return (
    <div className="brothers">
      <div className="banner">
        <div className="bannerText">
          <h1>OUR BROTHERS</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1>
      {/* when opening a card scrolling on the brothers component should be disabled */}
      <div className="cardsContainer">
        {/* <BrotherCard name="Huy Tran"></BrotherCard> */}
        {/* <BrotherCard name="Tiffany Joa"></BrotherCard> */}
      </div>
      <RedFooter />
    </div>
  );
};

export default Brothers;

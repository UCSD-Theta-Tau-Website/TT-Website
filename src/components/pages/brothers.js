import React from "react";
import "./brothers.css";

import BrotherCard from "./brotherCard/brotherCard";

import membershipBanner from "../../images/membershipBanner.webp";

const Brothers = () => {
  return (
    <div class="brothers">
      <div class="banner">
        <img src={membershipBanner} alt="membershipBanner" />
        <div class="bannerText">
          <h1>Meet the Brothers</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>

      <div class="cardsContainer">
        {/* this is just for testing and seeing what the member modal looks like */}
        {/* <BrotherCard name="Huy Tran"></BrotherCard> */}
        {/* <BrotherCard name="Tiffany Joa"></BrotherCard> */}
      </div>
    </div>
  );
};

export default Brothers;

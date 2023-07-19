import React from "react";
import "./brothers.css";

import BrotherCard from "./brotherCard/brotherCard";

import membershipBanner from "../../images/membershipBanner.webp";

const Brothers = () => {
  return (
    <div className="brothers">
      <div className="banner">
        <img src={membershipBanner} alt="membershipBanner" />
        <div className="bannerText">
          <h1>Meet the Brothers</h1>
          <h3>of the Epsilon Delta Chapter</h3>
        </div>
      </div>
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1> <h1>testing</h1> <h1>testing</h1> <h1>testing</h1>{" "}
      <h1>testing</h1>
      <div className="cardsContainer">
        {/* this is just for testing and seeing what the member modal looks like */}
        {/* <BrotherCard name="Huy Tran"></BrotherCard> */}
        {/* <BrotherCard name="Tiffany Joa"></BrotherCard> */}
      </div>
    </div>
  );
};

export default Brothers;

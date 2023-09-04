import React from "react";
import "../../style/brothers.css";
import Footer from "../footer/footer.js";

import BrotherCard from "./brotherCard/brotherCard";

const Brothers = () => {
  return (
    <div className="brothers">
      <div className="banner">
        {/* <img src={membershipBanner} alt="membershipBanner" /> */}
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
      <div className="cardsContainer">
        {/* this is just for testing and seeing what the member modal looks like */}
        {/* <BrotherCard name="Huy Tran"></BrotherCard> */}
        {/* <BrotherCard name="Tiffany Joa"></BrotherCard> */}
      </div>
      <Footer />
    </div>
  );
};

export default Brothers;

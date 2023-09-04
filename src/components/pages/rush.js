import React from "react";
import "../../style/rush.css";
import Footer from "../footer/footer.js";
import brothers2021 from "../../images/brothers2021.webp";

const Rush = () => {
  return (
    <div className="rush">
      <div className="rushBanner">
        {/* <div className="rushBannerImg"> */}
        <img src={brothers2021} alt="brothers2021"></img>
        {/* </div> */}

        <div className="rushBannerText">
          <h1>Rush</h1>
          <p>
            Join us for a whole week of rush events! Learn about the fraternity,
            interact with other rushees, and mingle with the members of Theta
            Tau.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rush;

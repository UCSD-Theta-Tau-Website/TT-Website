import React from "react";
import "../../../style/brotherSection.css";
import responses from "../../../activeData/info/responses.json";

const BrotherSection = ({ sectionName }) => {
  return (
    <div className="section">
      <div className="header">
        <div className="name">
          <h1>{sectionName}</h1>
        </div>
        <div className="bar"></div>
      </div>
    </div>
  )
};

export default BrotherSection;
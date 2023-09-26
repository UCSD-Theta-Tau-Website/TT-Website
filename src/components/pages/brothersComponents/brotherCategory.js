import React from "react";
import "../../../style/brotherCategory.css";
import categories from "../../../activeData/info/categories.json";
import BrotherSection from "./brotherSection";

const BrotherCategory = ({ categoryName }) => {
  function displaySections(category) {
    const sections = categories[category];
    return Object.keys(sections).map((section) => (
      <BrotherSection categoryName={category} sectionName={section} />
    ));
  }

  return (
    <div className="brother-category">{displaySections(categoryName)}</div>
  );
};

export default BrotherCategory;

import React, { useEffect, useRef } from "react";
import "../../../style/brotherSection.css";
import categories from "../../../activeData/info/categories.json";

const BrotherSection = ({ sectionName }) => {
  const gridRef = useRef();
  const names = categories[sectionName].split(",");  

  // for testing
  const imagePath = require(`../../../activeData/portraits/TJoa.webp`)

  useEffect(() => {
    console.log("reached");
    const grid = gridRef.current;
    if (grid) {
      names.forEach((name) => {
        // const convertedName = name.replace(/(\b\w{1})(\w*\s*)/, "$1") + ".webp";
        // const imagePath = require(`../../../activeData/portraits/${convertedName}`);

        const brother = document.createElement("div");
        brother.classList.add("brother");
        brother.style.width = "10vw";
        brother.style.flexGrow = 1;
        brother.style.flexShrink = 1;
        brother.style.flexBasis = "20%";
        brother.style.paddingTop = "10px";
        brother.style.paddingBottom = "10px";

        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = name;
        img.style.width = "10vw";

        const h1 = document.createElement("h1");
        h1.textContent = name;
        h1.style.fontFamily = "'Abhaya Libre', serif";
        h1.style.fontSize = "1vw";

        brother.appendChild(img);
        brother.appendChild(h1);
        grid.appendChild(brother);
      })
      
    }
  }, []);
  
  return (
    <div className="section">
      <div className="header">
        <div className="name">
          <h1>{sectionName}</h1>
        </div>
        <div className="bar"></div>
      </div>
      <div className="grid" ref={gridRef}>
      </div>
    </div>
  )
};

export default BrotherSection;
import React, { useState } from "react";
import "../../../style/brotherSection.css";
import categories from "../../../activeData/info/categories.json";
import BrotherCard from "./brotherCard";

const BrotherSection = ({ categoryName, sectionName }) => {
  const [displayCard, setDisplayCard] = useState("")

  function displayBrothers(category, section) {
    const brothersList = Object.keys(categories[category][section]);

    return (
      <div className="grid">
        {brothersList.map((brother) => {
          const imagePath = require(`../../../activeData/portraits/actives/${categories[category][section][brother]}`);
          const position = brother.split(":");
          const brotherName = position[position.length - 1];
          return (
            <div className="brother">
              <img src={imagePath} alt={brotherName} onClick={() => setDisplayCard(brotherName)}></img>
              {position.length === 1 && (
                <><h1 className="name">{brotherName}</h1></>
              )}
              {position.length !== 1 && (
              <>
                <div className="positions">
                  {position.slice(0, -1).map((pos) => (
                    <h1>{pos}</h1>
                  ))}
                </div>
                <h1 className="name">{brotherName}</h1>
              </>
              )}
            </div>   
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="section">
      <div className="header">
        <div className="title">
          <h1>{sectionName}</h1>
        </div>
        <div className="bar"></div>
      </div>
      
      {displayBrothers(categoryName, sectionName)}

      {displayCard !== "" && (
        <><BrotherCard name={"Tiffany Joa"}/></> // for testing
        // <><BrotherCard name={displayCard} /></>
      )}

    </div>
  )
};

export default BrotherSection;
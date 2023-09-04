import React from "react";
import "../../../style/brotherCard.css";
import { AiOutlineClose } from "react-icons/ai";
import responses from "../../../activeData/info/responses.json";

const BrotherCard = ({ name }) => {
  const major = responses[name]["Major"];
  const graduation = responses[name]["Graduation"];
  const career = responses[name]["Career"];
  const TT = responses[name]["TT"];
  const memory = responses[name]["Favorite Memory"];
  const interests = responses[name]["Interests"];
  const pronouns = responses[name]["Pronouns"];
  const convertedName = name.replace(/(\b\w{1})(\w*\s*)/, "$1") + ".webp";
  const imagePath = require(`../../../activeData/portraits/${convertedName}`);

  return (
    <div className="card">
      <div className="cardContainer">
        <AiOutlineClose id="close" />
        <div className="leftCard">
          <div className="portrait">
            <img src={imagePath}></img>
          </div>
        </div>
        <div className="rightCard">
          <div className="nameSection">
            <h3>Brother</h3>
            <h1>{name}</h1>
            <h3 id="pronouns">{pronouns}</h3>
          </div>
          <div className="responseSection">
            <h2>Year</h2>
            <h3>{graduation}</h3>
            <h2>Major</h2>
            <h3>{major}</h3>
            <h2>What are your professional goals and aspirations?</h2>
            <h3>{career}</h3>
            <h2>
              How has Theta Tau helped you both professionally and personally?
            </h2>
            <h3>{TT}</h3>
            <h2>What are your favorite memories in Theta Tau?</h2>
            <h3>{memory}</h3>
            <h2>
              Tell us about your personal background and any hobbies you have!
            </h2>
            <h3>{interests}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrotherCard;

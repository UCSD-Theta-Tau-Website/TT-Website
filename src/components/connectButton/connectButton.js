import React from "react";
import "../../style/connectButton.css";

const ConnectButton = () => {
  return (
    <div className="button">
      <div class="textContainer">
        <span class="text">Connect</span>
      </div>
      <div class="icons">
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default ConnectButton;

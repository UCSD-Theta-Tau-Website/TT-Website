import React from "react";
import "../../style/rush.css";
import WhiteFooter from "../footers/whiteFooter.js";

import gem from "../../images/gem.png";
import { Button } from "bootstrap";
import discord from "../../images/discord.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { faD } from "@fortawesome/free-solid-svg-icons";

const Rush = () => {
  return (
    <div className="rush flex flex-col items-center">
      <div className="rushBanner">
        <div className="rushBannerText px-2">
          <h1>RUSH</h1>
          <h3>Come out to rush and discover your community!</h3>
        </div>
      </div>

      <div className="body">
        <div className="rushTimeline">
          <div className="rushTimelineHeader">
            <div className="text-4xl sm:text-8xl px-10 text-red-800 abhaya">Fall Rush 2023</div>
            <img src={gem} alt="gem"></img>
            <div className="grow border-2 border-red-800"></div>
          </div>

          <div className="rushTimeLineSplit">

            <div className="splitHalf" id="splitHalf1">

              <div className="timeline">

                <div className="date">

                  <div className="dateBlock">
                    <h1>10/9/23</h1>
                  </div>
                  <div className="vertLine"> 
                    <h1>INFO NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>Come learn about the fraternity and meet the Brothers!</p>
                  </div>
                </div>

                
                <div className="date">

                  
                  <div className="dateBlock">
                    <h1>10/10/23</h1>
                  </div>
                  <div className="vertLine">
                    <h1>PROFESSIONAL NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>Improve your resume and gain insight from our alumni! Professional attire and a hard copy of your resume are recommended.</p>
                  </div>
                  

                </div>

                

                <div className="date">

                  <div className="dateBlock">
                    <h1>10/11/23</h1>
                  </div>
                  <div className="vertLine">
                    <h1>ENGINEERING NIGHT</h1>
                    <h3>7 PM | Meet @ Triton Statue</h3>
                    <p>Play engineering games with the Brothers!</p>
                  </div>
                </div>

                <div className="date">

                  <div className="dateBlock">
                    <h1>10/12/23</h1>
                  </div>
                  <div className="vertLine">
                    <h1>THETA TAU NIGHT</h1>
                    <h3>TBD</h3>
                    <p>Invite Only.</p>
                  </div>
                </div>

                <div className="date">

                  <div className="dateBlock">
                    <h1>10/13/23</h1>
                  </div>
                  <div className="vertLine">
                    <h1>INTERVIEWS</h1>
                    <h3>TBD</h3>
                    <p>Invite Only.</p>
                  </div>


                </div>
                

              </div>

            </div>

            <div className="splitHalf" id="splitHalf2">

              
              <div className="rightImage">

                <div className="info">
                  <h1>
                    Dare to Dream!
                  </h1>

                  <p>
                  We will be holding rush Week 2 of Fall Quarter 2023. Come out to Library Walk to meet our Brothers and learn more about Rush! 
                  </p>

                  <p>
                  Don't forget to join the Rush discord for any other announcements!
                  </p>

                  <div className="discordButton">
                    

                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="discordButton_a"
                    >
                      <FontAwesomeIcon icon={faDiscord} id="discordIcon"/>
                      <h2>Join the Server!</h2>
                    </a>

                  

                  </div>

                </div>
                
              </div>

            </div>
            
          </div>


          <div className="grow border-2 border-red-800" id="line2-1"></div>

        </div>

        <div className="grow border-2 border-red-800"  id="line2-2"></div>

        <div className="rushProcess">


          <h1 className="rushProcessText">Rush Process</h1>
          <div className="whiteLine">

            <span className="dot" id="dot1">
              <div className="lineText">
                
                <p id="lineText1">Join us for a whole week of rush events!</p>
                <div className="bubble" id="bubble1">
                  
                  <h1>EXPLORE</h1>
                  
                </div>
                <div className="arrow-down"></div>
                
              </div>
            </span>

            <span className="dot" id="dot2">
              <div className="lineText">
                
                <p id="lineText2">The Brothers of Theta Tau would like to learn more about you through a formal interview.</p>
                <div className="bubble" id="bubble2">
                  <h1>INTERVIEW</h1>
                </div>

                <div className="arrow-up"></div>
              </div>
            </span>
            
            <span className="dot" id="dot3">
              <div className="lineText">
                
                <p id="lineText3">If the Brothers of Theta Tau decide on you, an invitation will be sent to you.</p>
                <div className="bubble" id="bubble3">
                  <h1>BID</h1>
                  </div>
                  <div className="arrow-down"></div>
              </div>
              
            </span>

            <span className="dot" id="dot4">
              <div className="lineText">
                <p id="lineText4">Once you accept your bid, you will then begin pledging. Prepare to spend a large amount of time and effort.</p>
                <div className="bubble" id="bubble4">
                  <h1>PLEDGE</h1>
                </div>
                <div className="arrow-up"></div>
              </div>
            </span>


          </div>
          
        </div>

      </div>
        
      <WhiteFooter />
      
    </div>
  );
};

export default Rush;

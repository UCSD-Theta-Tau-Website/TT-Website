import React from "react";
import "../../style/rush.css";
import WhiteFooter from "../footers/whiteFooter.js";

import gem from "../../images/gem.png";

const Rush = () => {
  return (
    <div className="rush">
      <div className="rushBanner">
        <div className="rushBannerText">
          <h1>RUSH</h1>
          <h3>Come out to rush and discover your community!</h3>
        </div>
      </div>
      <div className="rushTimeline">
        <div className="rushTimelineHeader">
          <div className="text-4xl sm:text-5xl px-10 text-red-800 abhaya">Fall Rush 2023</div>
          <img src={gem} alt="gem"></img>
          <div className="grow border-2 border-red-800"></div>
        </div>

        <div className="rushTimeLineSplit">

          <div className="splitHalf">

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
                  <p>Improve your resume and gain insight from our alumni!</p>
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
                  <p>Event is INVITE ONLY</p>
                </div>
              </div>

               <div className="date">

                <div className="dateBlock">
                  <h1>10/13/23</h1>
                </div>
                <div className="vertLine">
                  <h1>INTERVIEWS</h1>
                  <h3>TBD</h3>
                  <p>Interviews are INVITE ONLY</p>
                </div>


              </div>
              

            </div>

          </div>

          <div className="splitHalf">

            
            <div className="links">
              Hello
            </div>

          </div>
          

           
        </div>

      </div>
      <WhiteFooter />
    </div>
  );
};

export default Rush;

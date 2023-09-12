import React from "react";
import "../../style/rush.css";
import WhiteFooter from "../footers/whiteFooter.js";
import rush_eboard from "../../images/rush_eboard.png";
import gem from "../../images/gem.png";
const Rush = () => {
  return (
    <div className="rush">
      <div className="rushBanner">
        {/* <div className="rushBannerImg"> */}
        <img src={rush_eboard} alt="rush_eboard"></img>
        {/* </div> */}

        <div className="rushBannerText">
          <h1>RUSH</h1>
          <p>
            Come out to rush and discover your community!
          </p>
        </div>
      </div>
      <div className="rushTimeline">
        <div className="rushTimelineHeader">
          <h1>Fall Rush 2023</h1>
          <img src={gem} alt="gem"></img>
        </div>

        <div className="rushTimeLineSplit">

          <div className="splitHalf">

            <div className="timeline">

              <div className="date">

                <div className="dateBlock">10/9/23</div>
                <div className="vertLine"> 
                  <h1>INFO NIGHT</h1>
                
                </div>
              </div>

              
              <div className="date">

                
                <div className="dateBlock">10/10/23</div>
                <div className="vertLine">
                  <h1>PROFESSIONAL NIGHT</h1>
                </div>
                

              </div>

              

              <div className="date">

                <div className="dateBlock">10/11/23</div>
                <div className="vertLine">
                  <h1>ENGINEERING NIGHT</h1>
                </div>
              </div>

              <div className="date">

                <div className="dateBlock">10/12/23</div>
                <div className="vertLine">
                  <h1>THETA TAU NIGHT</h1>
                </div>
              </div>

               <div className="date">

                <div className="dateBlock">10/13/23</div>
                <div className="vertLine">
                  <h1>INTERVIEWS</h1>
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

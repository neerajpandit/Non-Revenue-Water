import React from "react";
import "./css/HomePage3.css";
import Frame1 from "./Assets/Frame1.svg";
import Frame2 from "./Assets/Frame2.svg";
import Frame3 from "./Assets/Frame3.svg";
import Frame4 from "./Assets/Frame4.svg";
import Frame5 from "./Assets/Frame5.svg";

const Features = () => {
  return ( 
    <div className="core-features">
      <div className="core-headings">
        <h1 className="corelarge-heading">CORE FEATURES</h1>
        <h2 className="coresmall-heading">CORE FEATURES</h2>
      </div>
      <div className="container con">
        <div>
          <img src={Frame1} alt="Frame 1" />
          <p>Advanced Metering Infrastructure</p>
        </div> 
        <div>
          <img src={Frame2} alt="Frame 2" />
          <p>Bill & Revenue Manager</p>
        </div>
        <div>
          <img src={Frame3} alt="Frame 3" />
          <p>GIS Mapping</p>
        </div>
        <div>
          <img src={Frame4} alt="Frame 4" />
          <p>Live Monitoring</p>
        </div>
        <div>
          <img src={Frame5} alt="Frame 5" />
          <p>Blogs</p>
        </div>
      </div>

      <div className="core-product-section">
        <div className="c-p_heading">
          <div>
              <h1 className="cp-head">CORE PRODUCT VALUE</h1>
          </div>
          <div>
            <div className="c-p_para">
              <p>
                The core product value for addressing Non-Revenue Water (NRW) through
                Digital NRW Solutions lies in increased efficiency and sustainability
                of water management systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="search-icon"> */}
        {/* Remove curly braces around SearchIcon */}
        {/* <img src={SearchIcon} alt="search"/>
        <h1 className="waterTapHeading">WORKING PROCESS</h1> */}
      {/* </div> */}
      {/* <div className="waterTap">
       <img src={waterTap} alt="waterTap"/>
      </div> */}
    </div>
  );
};

export default Features;
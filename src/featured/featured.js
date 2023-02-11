import React from "react";
import "./featured.css";
import delhi from "../img/delhi.jpg";
import banglore from "../img/banglore.jpg";
import jaipur from "../img/jaipur.jpg";
import chennai from "../img/chennai.jpg";
import mumbai from "../img/mumbai.jpg";
import udaipur from "../img/udaipur.jpg";
export const Featured = () => {
  return (
     <>
    <div className="featured">
      <div className="featuredItem">
        <img className="imges" src={delhi} />
        <div className="featuredTitle">
          <h1>New Delhi</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img className="imges" src={banglore} />
        <div className="featuredTitle">
          <h1>Banglore</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img className="imges" src={jaipur} />
        <div className="featuredTitle">
          <h1>Jaipur</h1>
        </div>
      </div>

      <div>

      </div>


    </div>
      <div className="Secfeatured">


      <div className="SecfeaturedItem">
        <img className="imges1" src={udaipur} />
        <div className="SecfeaturedTitle">
          <h1>Udaipur</h1>
        </div>
      </div>

      <div className="SecfeaturedItem">
        <img className="imges2" src={mumbai} />
        <div className="SecfeaturedTitle">
          <h1>Mumbai</h1>
        </div>
      </div>


      </div>
    </>
  );
};

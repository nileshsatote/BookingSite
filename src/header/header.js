import React from "react";
import Button from "react-bootstrap/Button";
import '../index.css';
import LocalTaxiRoundedIcon from "@mui/icons-material/LocalTaxiRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import LocalHotelRoundedIcon from "@mui/icons-material/LocalHotelRounded";
import AirplaneTicketRoundedIcon from "@mui/icons-material/AirplaneTicketRounded";
import { NavLink } from "react-router-dom";
// import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import HailIcon from '@mui/icons-material/Hail';
const Header = () => {
  return (
    <>
    

      <div className="icon_cnt">
        <div className="icon_css">
        <div className="redius">
        <NavLink to="/">
            <LocalHotelRoundedIcon />
        </NavLink>
            <span> Stays </span>
          </div>
          
        </div>
        <div className="icon_css">
          <AirplaneTicketRoundedIcon />
          Fligh
        </div>
        <div className="icon_css">
          <DirectionsCarFilledRoundedIcon />
          Car
        </div>
        <div className="icon_css">
          <LocalTaxiRoundedIcon />
          Taxis
        </div>
      </div>

      <div className="head_parg">
        <div className="heading_p">
          <h1> A lifetime of discounts? It,s Genius.</h1>
          <h1> Find Your Next Stay</h1>
        </div>
        <div className="paragraph">
        <p >
          Search Deal On Hotel,Homes, and Much More...
        </p>
          <p className="mb-4">
            Get rewarded for your travels- unclock instant saving of 10% or more
            with a free BookNow Account
          </p>
        </div>

        <div class="absolute top-0 right-0 h-16 w-13  my-4..." >
          <Button variant="outline-info" className="my-4 mr-2 resp-btn" >Login/Sign in</Button>{" "}
          <Button variant="outline-info" className="my-4 mr-4">Register</Button>{" "}
            
      </div>
            </div>
    
            
    </>
  );
};

export default Header;

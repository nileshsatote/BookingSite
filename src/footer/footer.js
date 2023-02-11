import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

export const Footer = () => {
  return (
    <>
      <div className="footer_cnt mt-5">
        <div className="footer_heading">
          <h1>Save time, save Money!</h1>
          <span>Sign up and we'll send the best deals to you</span>
        </div>

        <div className="footer_email">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text_filed  mr-5"
          />
          <Button variant="contained">Subscribe</Button>
        </div>
      </div>
    
<div className="footer2">


      <div className="footer2_Sec ">
           
           <div className="row1">
            <ol>
              <li><Link>Countries</Link></li>
              <li><Link>Regions</Link></li>
              <li><Link>cities</Link></li>
              <li><Link>District</Link></li>
              <li><Link>Airport</Link></li>
              <li><Link>Hotels</Link></li>
            </ol>
           </div>


           <div className="row2">
            <ol>
              <li><Link>Homes</Link></li>
              <li><Link>Apartments</Link></li>
              <li><Link>Resorts</Link></li>
              <li><Link>Villas</Link></li>
              <li><Link>Hostel</Link></li>
              <li><Link>Guest Houses</Link></li>
            </ol>
           </div>

           <div className="row3">
            <ol>
              <li><Link>Unique place to stay</Link></li>
              <li><Link>All destinations</Link></li>
              <li><Link>Reviews</Link></li>
              <li><Link>Travel communities</Link></li>
              <li><Link>Deals</Link></li>
              
            </ol>
           </div>

           <div className="row4">
            <ol>
              <li><Link>Bike Rent</Link></li>
              <li><Link>Car Rent</Link></li>
             
              
            </ol>
           </div>

           <div className="row5">
            <ol>
              <li><Link>Coronavirus(COVID-19) FAQs</Link></li>
              <li><Link>About BookNow</Link></li>
              <li><Link>Careers</Link></li>
             
              
            </ol>
           </div>

           
      </div>

      </div>
           <div className="link_cnt">
<h1>
  BookNow.com
</h1>
          
      </div>
    </>
  );
};

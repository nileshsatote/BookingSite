import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import "./navbar.css";

import { Searchbar } from "../searchbar/Searchbar";
import Header from "../header/header";




function Navbar() {
  return (
    <>
      <div className="head_name">
       <div className="Inside_heading">
       <div>
          <h1 className="B_heading my-4">BookNow</h1>
        </div>
      
       </div>

      </div>
      <Header />
      
     <Searchbar />
    
      
    </>
  );
}

export default Navbar;

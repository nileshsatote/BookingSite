import React from "react";
import "./listsearch.css";
import Button from "react-bootstrap/Button";
// import Listsearchitem from "./listsearchitem/listsearchitem";
function Listsearch() {
  return (
    <>
    <div className="list_cnt_all">

   
      <div className="list_cnt">
        <div className="listwrap">
          <div className="search_cnt_list">
            <div className="search_cnt">
              <h3>Search</h3>
              <label>Destination/property name:</label>
              <input
                type="text"
                className="search_input"
                placeholder="Destination"
              />

              <label>Check-in Date</label>
              <input
                type="text"
                placeholder="In-Date"
                className="search_input"
              />

              <label>Check-Out Date</label>
              <input
                type="text"
                placeholder="Out-Date"
                className="search_input"
              />

              <label>Add Person</label>
              <input
                type="text"
                placeholder="Add...."
                className="search_input"
              />
              <div className="search_btn">
                <Button variant="primary">Search</Button>{" "}
              </div>
            </div>
          </div>
          
        </div>
      </div>

     
      </div>
    </>
  );
}

export default Listsearch;

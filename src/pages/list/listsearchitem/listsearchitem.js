import React from 'react';
import './listsearchitem.css';
import Button from "react-bootstrap/Button";
import prop1 from "../../../img/prop1.jpg"
// import details from "./data.json";
const Listsearchitem = ({hotelName,distance,price,img}) => {
  return (
   <>
   <div className='mt-3'>

    <div className='search_div'>
    <div className='images'> 
    <img  alt='img1' src={prop1}/>
    </div>

     <div className='head_cnt'>
      <h2>{hotelName}</h2>
      <span>{distance}</span><br></br>
      <Button>Free Texi</Button>
      <br></br>
      <label>Free Cancellation</label>
      <br></br>
      <label>more offers</label>
     </div>

     <div className='price_cnt'>

     <div className='price_cnt1'>
      <h4>Excellent</h4>
      <div className='rateing'><Button>4.5</Button></div>
     </div>

    <h3>
      {price}
    </h3>
    <br></br>
   <Button className='see_avil'>See Availability</Button>

     </div>  

    </div>
   </div>
     
   </>
  )
}

export default Listsearchitem
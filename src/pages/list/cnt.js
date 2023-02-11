import React from 'react'
import Listsearchitem from './listsearchitem/listsearchitem'
import details from "../../data.json";
const Cnt = () => {
  return (
    <div>
    {
      details.map((ele)=>{
        return(
            
 <Listsearchitem
    hotelName={ele.hotelName}
    distance={ele.distance}
    price={ele.price}
    img={ele.poster}
  /> 
  
        );
      })
    }
    
    </div>
  )
}

export default Cnt
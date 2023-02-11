import React from 'react'
import "./exploreindia.css"
import dubai from "../img/dubai.jpg"
import hongkong from "../img/hongkong.jpg"
import america from "../img/america.jpg"
import singapur from "../img/singapur.jpg"
import newyork from "../img/newyork.jpg"
export const ExploreIndia = () => {
  return (
  <>
  <h1 className='hometitle'>Explore World</h1>
  <div className='expl_cnt'>
    <div className='expl_item'>
    <img  className='expl_img' src={dubai}/>
      <div className='expl_img_name'>
        <h1>Dubai</h1>
      </div>
    </div>
     
    <div className='expl_item'>
    <img  className='expl_img' src={hongkong}/>
    <div className='expl_img_name'>
        <h1>HongKong</h1>
      </div>
    </div>

    <div className='expl_item'>
    <img  className='expl_img' src={america}/>
    <div className='expl_img_name'>
        <h1>America</h1>
      </div>
    </div>

    <div className='expl_item'>
    <img  className='expl_img' src={singapur}/>
    <div className='expl_img_name'>
        <h1>Singapore</h1>
      </div>
    </div>

    <div className='expl_item'>
    <img  className='expl_img' src={newyork}/>
    <div className='expl_img_name'>
        <h1>NewYork</h1>
      </div>
    </div>

  </div>
  </>
  )
}



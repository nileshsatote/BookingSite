import React from 'react'
import { ExploreIndia } from '../../exploreindia/exploreIndia';
// import { ExploreIndia } from '../../exploreindia/exploreIndia';
// import SimpleSlider, { Offer } from '../offer/offer';
// import { ExploreIndia } from '../../exploreindia/exploreIndia';
import { Featured } from '../../featured/featured';
// import { Footer } from '../../footer/footer';
// import Navbar from '../../navbar/navbar';
import { Offer } from '../../offer/offer';
import { Slider } from '../../slider/slider';
import "./home.css";


function Home() {
  return (

    <>
 
<div className='homeContainer'>
{/* <Navbar /> */}
<Featured />
<h1 className='hometitle'>Offers</h1>
<Offer />

{/* <ExploreIndia /> */}
<ExploreIndia />

 
<div>
  <Slider />
</div>


</div>

{/* <Footer /> */}
    </>
  )
}

export default Home;
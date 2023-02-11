import React from 'react'
import "./searchbar.css";
import {NavLink} from "react-router-dom";

import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import Button from "react-bootstrap/Button";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {useState} from 'react'
// import {format} from 'date-fns';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
// import $ from 'jquery';
export const Searchbar = () => {
  const [num , setNum] = useState(0);
  function inc (){
     setNum(num+1);
  }
  
  function dec (){
   num>0 ? setNum(num-1) : setNum(0);
  }
  
  const [openDate , setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <>
    <div className='headerSearch '>
            <div className='headersearch_item'>
              <BedIcon />
            <input type='text'
            className='input'
            placeholder='Where are you going'  />
            </div>

            <div className='headersearch_item'>
             <CalendarMonthSharpIcon />
              <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>Date to Date</span>
           { openDate && <DateRange
          
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date" 
/>}
            </div>
            <div className='headersearch_item'>
             <PersonAddAlt1SharpIcon />
           <span>ADD PERSON</span>
             
             <button onClick={inc} className='btn1 ml-2'><AddSharpIcon /></button>
             <span className='headerSearchText'> {num}</span>
             <button onClick={dec} className='btn1 ml-2'><RemoveSharpIcon /></button>
         
            </div>

            <div className='headersearch_item'>
            <NavLink to="/hotel">

            <Button variant="primary">Search</Button>{' '}
            </NavLink>
            </div>

           
            
            
    </div>
    </>
  )
}

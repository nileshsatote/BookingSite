import React from 'react'
import Cnt from './cnt';
import './list.css';
import Listsearch from './listsearch';
// import Listsearchitem from './listsearchitem/listsearchitem';

export const List = () => {
  return (
   <>
    <div className='list_cnt'>
    <div className='position'>
      <Listsearch />

    </div>
     <Cnt />
      
    </div>

   </>
  )
}

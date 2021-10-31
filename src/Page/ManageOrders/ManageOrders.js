import React, { useState } from 'react';
import AddNewPackage from '../../component/AddNewPackage/AddNewPackage';

import AllOrders from '../../component/AllOrders/AllOrders';



const ManageOrders = () => {
  
const [showItem,setShowItem] = useState(false)

    const handleClickAllOrders = () => {
       setShowItem(!showItem)
      };
      const handleClickAddNewPackage = () => {
        setShowItem(!showItem)
         
      };
  return (
    <div>
      <button onClick={()=>{handleClickAllOrders()}} className='w-1/3 bg-green-600 py-4 m-1'>ALL ORDERS</button>
      <button onClick={()=>{handleClickAddNewPackage()}} className='w-1/3 bg-green-600 py-4 m-1'>ADD NEW PACKAGE</button>
      {/* <AllOrders></AllOrders>
      <AddNewPackage></AddNewPackage> */}

      {showItem ? <AllOrders></AllOrders> : <AddNewPackage></AddNewPackage>}
   
    </div>
  );
};

export default ManageOrders;

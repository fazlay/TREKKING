import React, { useEffect, useState } from 'react';


const SingleRow = (props) => {
  const [orderItem, setOrderItem]= useState({})
  const {productId,name, email ,status}=props.myOrder

  const url =`http://localhost:5000/packages/${productId}`
  console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrderItem(data))
    },[])
    return (
        <>
           
           <tr class='bg-white border-4 border-gray-200'>
        
            <td>
              <span class='text-center ml-2 font-semibold'>{name}</span>
            </td>
            <td class='px-16 py-2'>
              <h1>{orderItem?.name}</h1>
            </td>
            <td class='px-16 py-2'>
              <span>$ {orderItem?.cost}</span>
            </td>
            <td class='px-16 py-2'>
              <span>{status}</span>
            </td>
          </tr> 
        </>
    );
};

export default SingleRow;
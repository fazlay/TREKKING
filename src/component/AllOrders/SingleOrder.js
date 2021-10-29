import React, { useEffect, useState } from 'react';


const SingleOrder = (props) => {
  const [orderItem, setOrderItem]= useState({})
  const {productId,name, email,status}=props.allOrder
  console.log(props.allOrder);
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
            <td class='px-16 py-2 flex flex-row items-center'>
              <img
                class='h-8 w-8 rounded-full object-cover '
                src='https://randomuser.me/api/portraits/men/30.jpg'
                alt=''
              />
            </td>
            <td>
              <span class='text-center ml-2 font-semibold'>{name}</span>
            </td>
            <td class='px-16 py-2'>
              <h1>{orderItem?.name}</h1>
            </td>
            <td class='px-16 py-2'>
              <span>300$</span>
            </td>
            <td class='px-16 py-2'>
              <span className="mr-4">{status}</span>
              <button className="px-4 py-2 bg-green-500 disabled:opacity-50 " disabled >Approve</button>
            </td>
            
          </tr> 
        </>
    );
};

export default SingleOrder;
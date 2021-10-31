import React, { useEffect, useState } from 'react';


const SingleRow = (props) => {
  const [orderItem, setOrderItem]= useState({})
  const { _id,productId,name, email ,status}=props.myOrder

  const url =`https://shrouded-thicket-18720.herokuapp.com/packages/${productId}`
  console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrderItem(data))
    },[])


    const handleStatusDelete = (id) => {
      const proceed = window.confirm('Are you sure, you want to delete?');
      if (proceed) {
        fetch(`https://shrouded-thicket-18720.herokuapp.com/orders/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert('deleted successfully');
            }
          });
      }
    };
    return (
        <>
           
           <tr className='bg-white border-4 border-gray-200'>
        
            <td>
              <span className='text-center ml-2 font-semibold'>{name}</span>
            </td>
            <td className='px-16 py-2'>
              <h1>{orderItem?.name}</h1>
            </td>
            <td className='px-16 py-2'>
              <span>$ {orderItem?.cost}</span>
            </td>
            <td className='px-16 py-2'>
              <span>{status}</span>
            </td>
            <td className='px-16 py-2'>
          <button
            onClick={() => handleStatusDelete(_id)}
            className='px-4 py-2 bg-red-500 '
          >
            Delete
          </button>
        </td>
          </tr> 
        </>
    );
};

export default SingleRow;
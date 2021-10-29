import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
    const[allOrders, setAllorders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allorders')
        .then(res=>res.json())
        .then(data=>setAllorders(data))
    },[])
    return (
        <>
            <table class='min-w-full table-auto'>
        <thead class='justify-between'>
          <tr class='bg-gray-800'>
            <th class='px-16 py-2'>
              <span class='text-gray-300'>Image</span>
            </th>
            <th class='px-16 py-2'>
              <span class='text-gray-300'>Name</span>
            </th>
            <th class='px-16 py-2'>
              <span class='text-gray-300'>Order Item</span>
            </th>
            <th class='px-16 py-2'>
              <span class='text-gray-300'>Price</span>
            </th>

            <th class='px-16 py-2'>
              <span class='text-gray-300'>Status</span>
            </th>
          </tr>
        </thead>
        <tbody class='bg-gray-200'>
          {allOrders.map((allOrder) => (<SingleOrder allOrder={allOrder}/>
          ))}
          
        </tbody>
      </table>
        </>
    );
};

export default AllOrders;
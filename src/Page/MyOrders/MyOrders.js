import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import SingleRow from './SingleRow';

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const userEmail = [user.email];
    console.log(userEmail);

    fetch('http://localhost:5000/orders/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  return (
    <div>
      <table class='min-w-full table-auto'>
        <thead class='justify-between'>
          <tr class='bg-gray-800'>
          
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
          {myOrders.map((myOrder) => (<SingleRow myOrder={myOrder}></SingleRow>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;

import React, { useEffect, useState } from 'react';
import SingleOrder from './SingleOrder';

const AllOrders = () => {
  const [allOrders, setAllorders] = useState([]);
  useEffect(() => {
    fetch('https://shrouded-thicket-18720.herokuapp.com/allorders')
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, [allOrders]);
  return (
    <div className='py-16'>
      <table className='min-w-1/2 table-auto mx-auto '>
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className='px-16 py-2 '>
              <span className='text-gray-300'>Name</span>
            </th>
            <th className='px-16 py-2 '>
              <span className='text-gray-300'>Order Item</span>
            </th>
            <th className='px-16 py-2 '>
              <span className='text-gray-300'>Price</span>
            </th>

            <th className='px-16 py-2 '>
              <span className='text-gray-300'>Status</span>
            </th>
            <th className='px-16 py-2 '>
              <span className='text-gray-300'>Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {allOrders.map((allOrder) => (
            <SingleOrder allOrder={allOrder} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;

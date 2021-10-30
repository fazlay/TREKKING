import axios from 'axios';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useHistory } from 'react-router';
const SingleOrder = (props) => {
  const history = useHistory();
  const [orderItem, setOrderItem] = useState({});
  const { _id, productId, name, email, status } = props.allOrder;

  const url = `http://localhost:5000/packages/${productId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);

  const handleStatusApprove = (id) => {
    const orderStatus = { status: 'approved' };
    console.log(orderStatus);
    axios
      .put(`http://localhost:5000/orders/${_id}`, orderStatus)
      .then((res) => console.log(res));
  };

  //------------------
  const handleStatusDelete = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            // const remainingOrders = orderItem?.filter(
            //   (order) => order._id !== id
            // );
            // setOrderItem(remainingOrders);
          }
        });
    }
  };

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
          <span className='mr-4'>{status}</span>
          <button
            onClick={() => handleStatusApprove(_id)}
            className='px-4 py-2 bg-green-500  '
          >
            Approve
          </button>
        </td>
        <td class='px-16 py-2'>
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

export default SingleOrder;

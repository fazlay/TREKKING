import axios from 'axios';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { useHistory } from 'react-router';
const SingleOrder = (props) => {
  const history = useHistory();
  const [orderItem, setOrderItem] = useState({});
  const { _id, productId, name, email, status } = props.allOrder;

  const url = `https://shrouded-thicket-18720.herokuapp.com/packages/${productId}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);

  const handleStatusApprove = (id) => {
    const proceed2 = window.confirm('Are you sure, you want to Approve?');
    if (proceed2) {
      const orderStatus = { status: 'approved' };
      console.log(orderStatus);
      axios
        .put(
          `https://shrouded-thicket-18720.herokuapp.com/orders/${_id}`,
          orderStatus
        )
        .then((res) => alert('Status Updated successfully'));
    }
  };

  //-------------------------------------------------------------------
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
      <tr class='bg-white border-4 border-gray-200 mx-auto '>
        <td className= "">
          <span class='text-center ml-2 font-semibold'>{name}</span>
        </td>
        <td class='px-16 py-2 '>
          <h1>{orderItem?.name}</h1>
        </td>
        <td class='px-16 py-2 '>
          <span>300$</span>
        </td>
        <td class='px-16 py-2 '>
          <span className='mr-4'>{status}</span>
       {
         status=='pending'?
                 <button
            onClick={() => handleStatusApprove(_id)}
            className='px-4 py-2 bg-green-500  '
          >
            Approve
          </button>:''}
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

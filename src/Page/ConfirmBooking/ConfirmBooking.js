import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { useForm } from 'react-hook-form';
import './ConfirmBooking.css';

const ConfirmBooking = () => {
  const history = useHistory();
  const { user } = useAuth();
  const { id } = useParams();
  const [item, setItem] = useState({});
  const url = `https://shrouded-thicket-18720.herokuapp.com/packages/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.productId = id;
    data.status = 'pending';
    const proceed = window.confirm('Are you sure, you want to Purchase?');
    if (proceed) {
      axios.post('https://shrouded-thicket-18720.herokuapp.com/orders', data).then((result) => {
       
        if (result.data.acknowledged) {
          alert('Congratulation Your Purchase is Successful!!');
          history.push('/home');
        }
      });
    }
  };

  return (
    <div className='container md:px-20 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 py-10'>
        <div className='left col-span-2 bg-gray-400'>
          <h1 className='text-2xl font-medium text-left'>{item?.name}</h1>
          <h1 className='text-2xl font-thin text-left'>{item?.place}</h1>
          <img src={item?.img} alt='' />
          <p className='text-left text-lg font-bold '>Description :</p>
          <p className='text-left text-lg'>{item?.Description}</p>
        </div>
        <div className='right'>
          <h1 className='text-3xl pt-4 font-bold text-white text-center'>
            Booking Description
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Name :
              <input
                className='text-gray-500'
                defaultValue={user.displayName}
                {...register('name')}
              />
            </label>
            <label>
              E-mail:
              <input
                className='text-gray-500'
                defaultValue={user.email}
                {...register('email')}
              />
            </label>
            <label> Address</label>

            <input
              className='text-gray-500'
              defaultValue='Dhaka'
              {...register('city')}
            />
            <input
              className='text-gray-500'
              defaultValue='Dhanmondi'
              {...register('area')}
            />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className='cursor-pointer' type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;

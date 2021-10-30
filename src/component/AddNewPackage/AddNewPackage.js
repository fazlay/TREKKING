import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import './Addnew.css';

const AddNewPackage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/packages', data)
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Insert a Form to Add NewPackage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Package Name :
              <input
                className='text-gray-500'
                defaultValue="Everest Fall"
                placeholder =" Enter Package Name"
                {...register('name')}
              />
            </label>
            <label>
              Package Place :
              <input
                className='text-gray-500'
                defaultValue="EMount Everest-Nepall"
                placeholder =" Enter Package Place"
                {...register('place')}
              />
            </label>
            <label>
              Package Rating :
              <input
                className='text-gray-500'
                defaultValue="4"
                placeholder =" Enter Package Rating"
                {...register('review')}
              />
            </label>
            <label>
              Package Description :
              <textarea
                className='text-gray-500'
                defaultValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolore ... Fall"
                placeholder =" Enter Package Description"
                {...register('Description')}
              />
            </label>
            <label>
              Package Cost :
              <input
                className='text-gray-500'
                defaultValue="800"
                placeholder =" Enter Package Cost"
                {...register('cost')}
              />
            </label>
            <label>
              Package Level :
              <input
                className='text-gray-500'
                defaultValue="Beginner"
                placeholder =" Enter Package Level"
                {...register('level')}
              />
            </label>
            <label>
              Package Best Time :
              <input
                className='text-gray-500'
                defaultValue="April-Septembe"
                placeholder =" Enter Package Best Time "
                {...register('bestTime')}
              />
            </label>
            <label>
              Package Length :
              <input
                className='text-gray-500'
                defaultValue=" 6 Days"
                placeholder =" Enter Package Length "
                {...register('length')}
              />
            </label>
            <label>
              Package Image :
              <input
                className='text-gray-500'
                defaultValue="https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                placeholder =" Enter Package Image "
                {...register('img')}
              />
            </label>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className='cursor-pointer' type='submit' />
          </form>
    </div>
  );
};

export default AddNewPackage;

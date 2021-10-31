import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddNewPackage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://shrouded-thicket-18720.herokuapp.com/packages', data)
      .then((result) => {
        if (result.data.acknowledged) {
          alert('New Package Added Successful!!');
          history.push('/home');
        }
      });
  };
  return (
    <div>
      <h1 className='font-bold text-gray-600 py-5 text-3xl'>ADD NEW PACKAGE</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='text-gray-700 font-bold'>
            Package Name :
            <input
              className='text-gray-500'
              placeholder=' Enter Package Name'
              defaultValue='Everest TREK'
              {...register('name')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Place :
            <input
              className='text-gray-500'
              defaultValue='EMount Everest-Nepall'
              placeholder=' Enter Package Place'
              {...register('place')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Rating :
            <input
              className='text-gray-500'
              defaultValue='4'
              placeholder=' Enter Package Rating'
              {...register('review')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Description :
            <textarea
              className='resize border mt-3 p-2 w-full rounded'
              defaultValue='Trekkers think when it comes to great treks you can’t beat treks like Rupin Pass or Buran Ghati. And'
              placeholder=' Enter Package Description'
              {...register('Description')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Cost :
            <input
              className='text-gray-500'
              defaultValue='800'
              placeholder=' Enter Package Cost'
              {...register('cost')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Level :
            <input
              className='text-gray-500'
              defaultValue='Beginner'
              placeholder=' Enter Package Level'
              {...register('level')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Best Time :
            <input
              className='text-gray-500'
              defaultValue='April-Septembe'
              placeholder=' Enter Package Best Time '
              {...register('bestTime')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Length :
            <input
              className='text-gray-500'
              defaultValue=' 6 Days'
              placeholder=' Enter Package Length '
              {...register('length')}
            />
          </label>
          <label className='text-gray-700 font-bold'>
            Package Image :
            <input
              className='text-gray-500'
              defaultValue='https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
              placeholder=' Enter Package Image '
              {...register('img')}
            />
          </label>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='cursor-pointer' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddNewPackage;

import React from 'react';
import { Link } from 'react-router-dom';

const Singlepackage = (props) => {
 
  const { _id ,name,Description,cost ,img } = props.singlePackage;
  return (
    <div>
      <div class='bg-white shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out'>
        <div class=''>
          <img src={img} alt='' class='rounded-t' />
        </div>

        <div class='p-4'>
          <h2 class='text-2xl uppercase'>{name}</h2>
          <p class='font-light text-gray-500 text-lg my-2'> &#36; {cost}</p>
          <p>
          {Description.slice(0, 100)}
          </p>
          <Link to={`/confirmbooking/${_id}`}>
            <button class='block mx-auto px-16 bg-gray-300 py-2  text-gray-600 text-center rounded shadow-lg uppercase font-light mt-6 hover:bg-gray-400 hover:text-white duration-300 ease-in-out'>
             BOOK NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Singlepackage;
/*
"name":"Everest Base Camp Trek","place":"Mount Everest-Nepal","review":4,"Description":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolore quaerat fugit accusamus similique! Maiores dolor ullam, illo a excepturi .","cost":400,"level":"Beginner","bestTime":"April-September","length":" 4 days","img":"https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}

*/
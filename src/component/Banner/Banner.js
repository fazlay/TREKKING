import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='text-white banner'>
      {/* <h1 className="text-white text-lg">BOOK A TREKK TODAY </h1> */}
      <h1 className='pt-40  font-bold text-3xl'></h1>
      <h1 className='pt-40  font-bold text-3xl'>BOOK A TREKK TODAY</h1>
      <h1 className='py-4 font-extralight text-6xl'>90% OFF!</h1>
      <button className='border-white px-5 py-2 border-2 hover:bg-white hover:text-black'>BOOK NOW</button>
    </div>
  );
};

export default Banner;

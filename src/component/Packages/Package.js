import React, { useEffect, useState } from 'react';
import Singlepackage from '../SinglePackage/Singlepackage';

const Package = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className='container mx-auto pt-20 px-20 bottom-border '>
      
      <div className='grid grid-cols-4 gap-4'>
        <div className=' flex flex-wrap uppercase justify-center content-center'>
          <h1 className='text-5xl font-extralight text-gray-600'>
            <span className='font-bold'> latest </span>
            <br />
            TREKING
            <br /> PACKAGES
          </h1>
        </div>

        {packages.map((singlePackage) => (
          <Singlepackage
            key={singlePackage._id}
            singlePackage={singlePackage}
          ></Singlepackage>
        ))}
      </div>
    </div>
  );
};

export default Package;

/*

{
"name":"Everest Base Camp Trek" 
,"place" : "Mount Everest-Nepal"
,"review" : 4
,"Description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolore quaerat fugit accusamus similique! Maiores dolor ullam, illo a excepturi ." 
,"cost" :700
,"level" : "Beginner"
,"bestTime" : "April-September"
,"length" : " 4 days"
,"img" ="https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}


*/

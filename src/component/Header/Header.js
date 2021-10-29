import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className='grid md:grid-cols-3 py-5 uppercase text-lg font-bold text-white' style={{ backgroundColor: pathname === '/' ? 'transparent' : 'black' }}>
      <div className='logo '>
        <Link to='/'>
          <img src='' />
          <h1>Travel King</h1>
        </Link>
      </div>
      <div className='menu  '>
        <div className=' pl-3'>
          <Link className='pl-4' to='/myorders'>
            <button className="uppercase text-lg font-bold">MY ORDER</button>
          </Link>
          <Link className='pl-4' to='/manageorders'>
            <button className="uppercase text-lg font-bold">MANAGE ORDERS</button>
          </Link>
        </div>
      </div>
      <div className='auth uppercase'>
        <Link className='pl-4' to='/login'>
          <button className="uppercase text-lg font-bold">LOGIN</button>
        </Link>
        <Link className='pl-4' to='/logout'>
          <button className="uppercase text-lg font-bold">LOGOUT</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

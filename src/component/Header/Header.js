import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

import './Header.css';

const Header = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-3 py-5 uppercase text-lg font-bold text-white'
      style={{ backgroundColor: pathname === '/' ? 'transparent' : 'black' }}
    >
      <div className='logo '>
        <Link to='/'>
          <img src='' />
          <h1>Travel King</h1>
        </Link>
      </div>
      <div className='menu  '>
        {/* if () */}
        {user?.email &&
          <div className=' pl-3'>
            <Link className='pl-4' to='/myorders'>
              <button className='uppercase text-lg font-bold'>MY ORDER</button>
            </Link>
            <Link className='pl-4' to='/manageorders'>
              <button className='uppercase text-lg font-bold'>
                MANAGE ORDERS
              </button>
            </Link>
          </div>
        }
      </div>
     
      <div className='auth uppercase mx-auto'>
        { user?.email ?<div className="flex"> <Link className='pl-4' to='/login'>
          <button className='uppercase text-lg font-bold'>LOGOUT</button> </Link>     <h1 className="pl-4 font-normal">  {user.displayName}</h1></div>
         :  <Link className='pl-4' to='/login'>
          <button className='uppercase text-lg font-bold'>LOGIN</button>
        </Link>    
        
        }
      </div>
    </div>
  );
};

export default Header;

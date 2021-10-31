import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';

const Login = () => {
  const { googleSignIn, googleLogOut, user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/home';
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      history.push(redirectUrl);
    });
  };

  const handleGoogleLogOut = () => {
    googleLogOut();
  };

  return (
    <div className="py-20">
      <h1 className='py-10 text-3xl'> {user.email && <span className="px-2 font-bold text-3xl text-green-700">
        {user.displayName}</span>} 
      You can {user.email? 'Logout':'Login' } From Here 
      </h1>
     

      {!user.email ? (
        <button
          onClick={handleGoogleSignIn}
          className='px-8 py-4 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300'
        >
          Login withGoogle
        </button>
      ) : (
        <button
          onClick={handleGoogleLogOut}
          className='px-8 py-4 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300'
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default Login;

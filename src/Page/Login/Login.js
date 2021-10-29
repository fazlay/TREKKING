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
    <div>
      <h1 className='py-10'>this is Login page</h1>
      {user.email && <h1 className='py-10'>{user.displayName}</h1>}

      <button onClick={handleGoogleSignIn} className='bg-red-500 p-5'>
        Login withGoogle
      </button>
      <button onClick={handleGoogleLogOut} className='bg-red-500 p-5'>
        Log Out
      </button>
    </div>
  );
};

export default Login;

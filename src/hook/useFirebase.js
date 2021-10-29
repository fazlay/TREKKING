import initializeAuthentication from '../component/firabase/fireabse.init';
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,onAuthStateChanged
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };
  const googleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return ()=>unsubscribe
  }, []);

  return { googleSignIn,googleLogOut,user,loading };
};
export default useFirebase;

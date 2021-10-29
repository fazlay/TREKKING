import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.cofig';

const initializeAuthentication = () => {
  const app = initializeApp(firebaseConfig);
};


export default initializeAuthentication
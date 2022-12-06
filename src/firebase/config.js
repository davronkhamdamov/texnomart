import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDtlEnT9Q0KHRvbedwdt_LoiAXDiqPzyzk',
  authDomain: 'fir-79c34.firebaseapp.com',
  projectId: 'fir-79c34',
  storageBucket: 'fir-79c34.appspot.com',
  messagingSenderId: '520439091757',
  appId: '1:520439091757:web:d3e4841b517951f2c55ea4',
  measurementId: 'G-DM9R521SQ0',
};

const beckend = firebase.initializeApp(firebaseConfig);
const auth = beckend.auth();

export default auth;

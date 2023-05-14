import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAmlcxiP2PckhNgHJvPJc6t5lToI111h9E",
  authDomain: "test-phone-d9b16.firebaseapp.com",
  projectId: "test-phone-d9b16",
  storageBucket: "test-phone-d9b16.appspot.com",
  messagingSenderId: "366636623479",
  appId: "1:366636623479:web:eb45625b54b9eff4614872",
  measurementId: "G-K6ZZEN8TPX"
};

const beckend = firebase.initializeApp(firebaseConfig);
const auth = beckend.auth();

export default auth;

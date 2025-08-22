import {initializeApp, getApps, getApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'fintrackr-flowo',
  appId: '1:579076611353:web:12fbcc96579ab32e0ef988',
  storageBucket: 'fintrackr-flowo.firebasestorage.app',
  apiKey: 'AIzaSyATmQHt52usXQ7Y_F35ICDmIiidTK6pKhI',
  authDomain: 'fintrackr-flowo.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '579076611353',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};

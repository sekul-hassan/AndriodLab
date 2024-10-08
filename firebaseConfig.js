// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyA8EcXai0etanT90ALQZ3jOoly30VL1vW4",
    authDomain: "register-automation-24214.firebaseapp.com",
    projectId: "register-automation-24214",
    storageBucket: "register-automation-24214.appspot.com",
    messagingSenderId: "550864394076",
    appId: "1:550864394076:android:1dfc07cca7786373815399",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Realtime Database
const database = getDatabase(app);

export { auth, database };

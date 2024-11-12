// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth ,getReactNativePersistence, getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGcvgMnTSa4hjqJeDVjmTyC9_F_rEiN2o",
  authDomain: "dragon-news-57545.firebaseapp.com",
  projectId: "dragon-news-57545",
  storageBucket: "dragon-news-57545.firebasestorage.app",
  messagingSenderId: "15574507444",
  appId: "1:15574507444:web:6a88869e4197bada751ce1"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app,{
    persistence : getReactNativePersistence(ReactNativeAsyncStorage)
})
export default auth ;


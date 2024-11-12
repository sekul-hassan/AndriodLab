import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Config';
export const FirebaseContext = createContext();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [user,setUser] = useState(null);

    const register =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password) ;
     }

     const login = (email,password) =>{
        setLoading(true);
         return signInWithEmailAndPassword(auth,email,password);
      }
     
      const logout = () =>{
        setLoading(true);
        return signOut(auth);
       
     }


     const resetPass = (email) =>{
        setLoading(true);
        return  sendPasswordResetEmail(auth, email);
       }
      
       useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
          if(currentUser === null ||    currentUser.emailVerified )
          {
             setUser(currentUser);
       
          }  
          setLoading(false);
          })
          return () =>{
             unsubscribe();
          }
          
       },[])

       const myAuth = {register ,login, logout ,user ,loading ,setLoading ,resetPass};


  return (
    <FirebaseContext.Provider value={myAuth} >
    {children}
 </FirebaseContext.Provider>
  )
}

export default AuthProvider

const styles = StyleSheet.create({})
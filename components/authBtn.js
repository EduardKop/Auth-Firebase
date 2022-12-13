import styles from '../styles/Home.module.css'
import { auth } from './firebase'
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase,ref,set,once,on,update,onValue} from 'firebase/database';
import {db} from '../components/firebase';


function AuthButtons() {
    const [user,setUser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    useEffect(()=>{

    },[user])
    const dispatch = useDispatch()
    const userName = useSelector(state => state.userName)
  
    const login = async()=>{
      const result = await signInWithPopup(auth, googleAuth);
      const data = result.user
      console.log(data)
      dispatch({type:'SIGN_IN', name: data.displayName, id: data.uid})
      
      const referenceRoom = ref(db, 'users/' + `${data.uid}/`);
      set(referenceRoom,{
        userName:data.displayName
      })
    }
  
    const logOut = async() =>{
      const result = await auth.signOut()
      
      dispatch({type:'SIGN_OUT', name: '', id: ''})

    }
  
   
  
    return (
        <>
        <button className={styles.loginBtn} onClick={login}>SignIn</button>
        <button className={styles.loginBtn} onClick={logOut}>SignOut</button>
        </>
    )
}

export default AuthButtons  
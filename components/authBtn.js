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
    const isAuthorized = useSelector(state => state.isAuthorized);

    const login = async()=>{
      const result = await signInWithPopup(auth, googleAuth);
      const data = result.user
      
      dispatch({
        type:'SIGN_IN', 
        name: data.displayName, 
        id: data.uid
      });
      dispatch({
        type: 'CREATE_BLOG_POST',
        title:'sdsds',
        content:"sdsdsd"
      });
      dispatch({ 
        type: 'AUTHORIZE' 
      });
      console.log(isAuthorized)

      
      const referenceRoom = ref(db, 'users/' + `${data.uid}/`);
      set(referenceRoom,{
        userName:data.displayName
      })
    }
  
    const logOut = async() =>{
      
        auth.signOut().then(function() {
        dispatch({
          type:'SIGN_OUT', name: '', id: ''
          })
        dispatch({ 
          type: 'EXIT' 
          });
          console.log(isAuthorized)
      }).catch(function(error) {
          console.log(error)
      });
      

    }
  
  
    return (
        <div>
          {isAuthorized ? (
            <button onClick={logOut}>Exit</button>
          ) : (
            <button onClick={login}>Authorize</button>
          )}
        </div>
      
    )
}

export default AuthButtons  
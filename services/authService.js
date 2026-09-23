import firebase from '../firebase/firebase'
import {
     getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     singOut,
     onAuthStateChanged
     } from 'firebase/auth'

const auth = getAuth(firebase)
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log(`User UID: ${substring(user.uid, 0 , 6)}**********************`)
    })
    .catcch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error code: ${errorCode}, Message: ${errorMessage}`)
    })

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
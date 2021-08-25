import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEp4DK3_s5tjRKP4Iz61o4ck0YvTXtPUE",
    authDomain: "crwn-db-db739.firebaseapp.com",
    projectId: "crwn-db-db739",
    storageBucket: "crwn-db-db739.appspot.com",
    messagingSenderId: "93481776955",
    appId: "1:93481776955:web:b11db16a0dbd1d7378291e",
    measurementId: "G-PLNV4JCFM4"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
    
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
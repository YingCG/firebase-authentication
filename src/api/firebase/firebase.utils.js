import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC2BeNzYPd1n9aezaCJMtTyUK9xkXt5bB0",
    authDomain: "earthcards-5eca2.firebaseapp.com",
    projectId: "earthcards-5eca2",
    storageBucket: "earthcards-5eca2.appspot.com",
    messagingSenderId: "369113617709",
    appId: "1:369113617709:web:ffed76375f7d76c44c2fa4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
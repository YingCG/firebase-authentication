import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  // if user data not exists/ create and set the document with the data from userAUth in my collection
  // return user DocRef
  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()
    
    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  
  // if user data exists
  return userDocRef
}

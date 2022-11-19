import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../api/firebase/firebase.utils'

export default function SignIn() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    // const respone = await signInWithGooglePopup()
    console.log({user})
    // console.log(respone)
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }

  return (
    <div>
        Sign In page
      {/* <input /> */}
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  )
}

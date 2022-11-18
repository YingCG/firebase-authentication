import React from 'react'
import { signInWithGooglePopup } from '../../../api/firebase/firebase.utils'

export default function SignIn() {
  const logGoogleUser = async () => {
    const respone = await signInWithGooglePopup()
    console.log(respone)
  }

  return (
    <div>
        Sign In page
      {/* <input /> */}
      <button onClick={logGoogleUser}>Sign In</button>
    </div>
  )
}

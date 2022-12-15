import React from 'react'
import { Login, Signup } from '../components'

export default function Auth({ userTokenState }) {
  const [showLogin, setShowLogin] = React.useState(true)
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} userTokenState={userTokenState} /> : <Signup setShowLogin={setShowLogin} userTokenState={userTokenState} />}
    </>
  )
}
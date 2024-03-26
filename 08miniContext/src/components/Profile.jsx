import React, {useContext, useEffect} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)
  
  if(!user) return <h1>Not Logged in</h1>
  return (
    <h1>Profile: {user.username} </h1>
  )
}

export default Profile
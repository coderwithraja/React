import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} =  useParams()
  return (
    <div>
        <h1>User profile</h1>
        <h3>User Id <b>{id}</b></h3>
    </div>
  )
}

export default User
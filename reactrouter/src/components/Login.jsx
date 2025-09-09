import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const naviagate = useNavigate();
    
    function onsubmit(){     
        naviagate('/dashboard')
    }

  return (
    <div>
        <h1>Login page</h1>
        <button onClick={onsubmit}>Login</button>
    </div>
  )
}

export default Login
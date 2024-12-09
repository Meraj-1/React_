import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(UserContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
    console.log('login submitted', {username, password});
    

  }
  return (


    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name' />
      {".."}
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
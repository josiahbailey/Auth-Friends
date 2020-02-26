import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const LoginForm = () => {
   let history = useHistory()
   const [user, setUser] = useState({
      username: '',
      password: ''
   })

   const handleChanges = e => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()

      axiosWithAuth()
         .post('/api/login', user)
         .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            history.push('/private')
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <form onSubmit={handleSubmit}>
         <input onChange={handleChanges} type='text' placeholder='username' name='username' value={user.username} />
         <input onChange={handleChanges} type='text' placeholder='password' name='password' password={user.password} />
         <input type='submit' />
      </form>
   );
}

export default LoginForm;
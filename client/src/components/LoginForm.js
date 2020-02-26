import React, { useState } from 'react';

const LoginForm = () => {
   const [user, setUser] = useState({
      login: '',
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
   }

   return (
      <form onSubmit={handleSubmit}>
         <input onChange={handleChanges} type='text' placeholder='login' name='login' value={user.login} />
         <input onChange={handleChanges} type='text' placeholder='password' name='password' password={user.password} />
         <input type='submit' />
      </form>
   );
}

export default LoginForm;
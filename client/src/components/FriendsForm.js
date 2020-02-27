import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsForm = ({ addFriends }) => {
   const [friend, setFriend] = useState({
      id: Date.now(),
      name: '',
      age: 0,
      email: '',
   })

   const handleChanges = e => {
      setFriend({
         ...friend,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      axiosWithAuth()
         .post('/api/friends', friend)
         .then(res => {
            console.log(res)
            addFriends(res.data)
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type='text' onChange={handleChanges} name='name' placeholder='name' value={friend.name} required />
         <input type='number' onChange={handleChanges} name='age' placeholder='age' value={friend.age} required />
         <input type='text' onChange={handleChanges} name='email' placeholder='email' value={friend.email} required /><br />
         <button type='submit'>Add Friend</button>
      </form>
   );
}

export default FriendsForm;
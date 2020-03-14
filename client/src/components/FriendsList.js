import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendsForm from '../components/FriendsForm'

const FriendsList = () => {
   const [friends, setFriends] = useState([])
   const [isFetching, setIsFetching] = useState(false)
   const [error, setError] = useState('')

   useEffect(() => {
      setIsFetching(true)
      axiosWithAuth()
         .get(`/api/friends`)
         .then(res => {
            console.log(res)
            setFriends(res.data)
            setError('')
            setIsFetching(false)
         })
         .catch(err => {
            console.log(err)
            setError(err)
            setIsFetching(false)
         })
   }, [])

   const addFriends = newFriends => {
      setFriends(newFriends)
   }

   const removeToken = e => {
      window.localStorage.removeItem('token')
   }

   return (
      <>
         <FriendsForm addFriends={addFriends} />
         <div className='list'>
            {isFetching ? <p>LOADING...</p> : error ? <p>ERROR</p> : friends ?
               friends.map(friend => (
                  <div className='friend' key={friend.id}>
                     <h2>Friend</h2>
                     <h3>Name: {friend.name}</h3>
                     <h3>Age: {friend.age}</h3>
                     <h3>Email: {friend.email}</h3>
                  </div>
               ))
               : <p>No Friends Here</p>}
         </div>
         <Link to='/'><button onClick={removeToken}>Logout</button></Link>
      </>
   );
}

export default FriendsList;
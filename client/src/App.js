import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'

import { axiosWithAuth } from './utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'

function App() {
   const [friends, setFriends] = useState([])
   const token = window.localStorage.getItem('token')
   useEffect(() => {
      axiosWithAuth()
         .get(`/api/friends`)
         .then(res => {
            console.log(res)
            setFriends(res.data)
         })
         .catch(err => {
            console.log(err)
         })
   }, [token])

   return (
      <div className="App">
         <Route path='/'>
            <h1>Private Login</h1>
         </Route>
         <Route exact path='/'>
            <Link to='/login'><button>Login</button></Link>
         </Route>
         <Route path='/login'>
            <LoginForm />
            <Link to='/'><button>Back</button></Link>
         </Route>
         <PrivateRoute path='/private'>
            <FriendsList friends={friends} />
            <Link to='/'><button>Back</button></Link>
         </PrivateRoute>

      </div>
   );
}

export default App;

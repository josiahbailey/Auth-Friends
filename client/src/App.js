import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'

import LoginForm from './components/LoginForm'

function App() {
   useEffect(() => {
      axios.get(`http://localhost:5000/api/login`)
         .then(res => {
            console.log(res)
         })
         .catch(err => {
            console.log(err)
         })
   }, [])

   return (
      <div className="App">
         <Route path='/'>
            <h1>Private Login</h1>
         </Route>
         <Route path='/login'>
            <LoginForm />
         </Route>
      </div>
   );
}

export default App;

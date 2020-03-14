import React from 'react';
import { Route, Link } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'

function App() {
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
         <PrivateRoute path='/friends' component={FriendsList} />
      </div>
   );
}

export default App;

import React from 'react';

const FriendsList = ({ friends }) => {
   return (
      <div>
         {friends ?
            friends.map(friend => (
               <div key={friend.id}>
                  <h3>Name: {friend.name}</h3>
                  <h3>Age: {friend.age}</h3>
                  <h3>Email: {friend.email}</h3>
               </div>
            ))
            : <p>No Friends Here</p>}
      </div>
   );
}

export default FriendsList;
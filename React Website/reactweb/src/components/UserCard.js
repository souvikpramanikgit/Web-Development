import React from 'react';

function UserCard({ user }) {
  return (
    <div class="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <div class="user-info">
        <h4>{`${user.first_name} ${user.last_name}`}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserCard;

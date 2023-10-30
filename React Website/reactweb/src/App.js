import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import Loader from './components/Loader';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setLoading(false);
  };

  return (
    <div class="app">
      <Navbar getUsers={getUsers} />
      <div class="container">
        {loading ? (
          <Loader />
        ) : (
          <div class="user-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


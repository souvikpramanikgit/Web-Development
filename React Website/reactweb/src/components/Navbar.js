import React from 'react';

function Navbar({ getUsers }) {
  return (
    <div class="header">
      <nav class="navbar">
        <h1 class="brand">React Web App</h1>
      </nav>
      <button class="get-users" onClick={getUsers}>Get Users</button>
    </div>
  );
}

export default Navbar;
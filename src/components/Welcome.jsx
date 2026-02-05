import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Close Circle!</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}   
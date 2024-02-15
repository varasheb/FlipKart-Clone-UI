import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/flipkart/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="bg-yellow-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 px-2 py-1 mb-4 w-full" />
          <label htmlFor="password" className="block mb-2">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 px-2 py-1 mb-4 w-full" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

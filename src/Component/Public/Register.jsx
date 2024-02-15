import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ role }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate passwords first:
    if (password !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return; // Prevent submission if passwords don't match
    }

    // Submit form (assuming the form has a valid action URL)
    // TODO: Add logic to submit the form (e.g., using fetch API)

    // Clear any previous errors after successful submission
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Clear any previous password-related errors on change
    setError('');
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Validate passwords as the user types in the confirm password field
    if (event.target.value !== password) {
      setError('Passwords do not match. Please try again.');
    } else {
      setError(''); // Clear errors if passwords match
    }
  };
  const respond=(event)=>{
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(role) 
    navigate('/verify-otp', { state: { username } });
  }

  return (
    <div className="bg-pink-400  flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Email:
            <input
              onChange={(event) => setUsername(event.target.value)}
              type="email"
              name="email"
              required
              className="border border-gray-300 px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Password:
            <input
              onChange={handlePasswordChange}
              type="password"
              name="password"
              required
              className="border border-gray-300 px-2 py-1 w-full"
            />
          </label>
          <label className="block mb-2">
            Confirm Password:
            <input
              onChange={handleConfirmPasswordChange}
              type="password"
              name="confirmPassword"
              required
              className="border border-gray-300 px-2 py-1 w-full"
            />
            {error && <p className="text-red-500 font-bold">{error}</p>}
          </label>
          <button
           onClick={respond}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled={error}" // Disable button if there's an error
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

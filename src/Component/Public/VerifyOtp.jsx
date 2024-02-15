import React, { useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';

const VerifyOtp = ({ onVerify, loading, error }) => {
  const location = useLocation();
  const { username } = location.state;
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field if a number is entered
    if (value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    console.log('email',username)

    try {
      const response = await fetch('/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email : useremail ,
          otp : enteredOtp
      })
      });
      
      if (response.ok) {
        // OTP verification successful, handle success
        console.log('OTP verified successfully');
        onVerify(); // Call the callback function for successful verification
      } else {
        // OTP verification failed, handle error
        console.error('OTP verification failed');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {loading && <p className="text-blue-500">Verifying OTP...</p>}
      {error && <p className="text-red-500">OTP verification failed: {error}</p>}
      <div className="flex justify-center">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="border border-gray-300 px-2 py-1 w-12 text-center mr-2"
          />
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Verify
      </button>
    </form>
  );
};

export default VerifyOtp;

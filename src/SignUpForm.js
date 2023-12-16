import React, { useState } from 'react';

const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for input validation
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  // Event handlers for input changes
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputValue));
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    // Password validation
    setIsPasswordValid(inputValue.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);

    // Confirm Password validation
    setIsConfirmPasswordValid(inputValue === password);
  };

  // Event handler for form submission
  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form. Please check the input values.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{maxWidth: '400px', width: '100%'}}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}></h1>

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '10px', border: isEmailValid ? '2px solid green' : '2px solid red' }}
        />
        {!isEmailValid && <p style={{ color: 'red', fontSize: '0.8rem' }}>Please enter a valid email address</p>}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '10px', border: isPasswordValid ? '2px solid green' : '2px solid red' }}
        />
        {!isPasswordValid && <p style={{ color: 'red', fontSize: '0.8rem' }}>Password must be at least 8 characters long</p>}

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ width: '100%', padding: '10px', fontSize: '1rem', marginBottom: '10px', border: isConfirmPasswordValid ? '2px solid green' : '2px solid red' }}
        />
        {!isConfirmPasswordValid && <p style={{ color: 'red', fontSize: '0.8rem' }}>Passwords do not match</p>}

        <button
          style={{width: '20%', padding: '10px', fontSize: '1rem', backgroundColor: '#0033aa', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;

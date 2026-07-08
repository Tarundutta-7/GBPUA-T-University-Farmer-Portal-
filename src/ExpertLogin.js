import React, { useState } from 'react';

export default function ExpertLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost/farmer-portal-backend/expert_login.php',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const result = await response.json();

      console.log("API Response:", result);

      if (result.status === 'success') {
        localStorage.setItem(
          'expert',
          JSON.stringify(result.expert)
        );

        if (onLogin) {
          onLogin(result.expert);
        }
      } else {
        alert(result.message);
      }

    } catch (error) {
      console.error(error);
      alert('Login failed. Please confirm XAMPP Apache is running!');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#fff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        textAlign: 'left'
      }}
    >
      <h2 style={{ color: '#004d40', marginTop: 0, marginBottom: '20px', textAlign: 'center' }}>Expert Login Gateway</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>University Email Address:</label>
          <input
            type="email"
            placeholder="e.g., mushroom.center@gbpuat.ac.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '5px' }}>Security Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: '#004d40',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Verify Login Securely
        </button>
      </form>
    </div>
  );
}
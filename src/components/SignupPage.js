import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // 确保你已经在 firebase.js 中正确配置了 Firebase
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // 注册成功后重定向到主页面
    } catch (err) {
      setError('Failed to create an account: ' + err.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="form-container">
        <h1 className="form-title">Create a DEV@Deakin Account</h1>
        <Form onSubmit={handleSignUp}>
          <Form.Field>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Field>
          {error && <p className="error-message">{error}</p>}
          <Button className="creat-button" primary type="submit">Create</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;

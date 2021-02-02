import React, { useState } from 'react';

import { gql, useMutation } from '@apollo/client';

import { Typography, TextField, Button, Divider } from '@material-ui/core';

const REGISTER_USER = gql`
  mutation Register_user($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    register(
      registerInput: { username: $username, email: $email, password: $password, confirmPassword: $confirmPassword }
    ) {
      id
      username
      email
      token
    }
  }
`;

const Auth = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [register, { data, loading, error }] = useMutation(REGISTER_USER);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setConfirmPassword(event.target.value);
  };

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    register({ variables: { username: username, email: email, password: password, confirmPassword: confirmPassword } });
  };

  return (
    <div>
      <Typography>Join Burger Queen!</Typography>

      <form onSubmit={handleRegisterSubmit}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>

        <Button color="primary">Forgot Password</Button>
      </form>

      <Divider />

      <Typography>Alreadly have an account?</Typography>
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </div>
  );
};

export default Auth;

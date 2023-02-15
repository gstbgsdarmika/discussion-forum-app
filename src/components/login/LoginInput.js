import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <Form className="login-input mt-3">
      <Form.Group className="mb-3">
        <Form.Control type="email" value={email} onChange={onEmailChange} placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      </Form.Group>
      <Button type="button" id="btnLogin" onClick={() => login({ email, password })}>Login</Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;

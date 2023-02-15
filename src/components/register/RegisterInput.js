import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import userInput from '../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = userInput('');
  const [email, onEmailChange] = userInput('');
  const [password, onPasswordChange] = userInput('');

  return (
    <Form className="register-input mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" value={name} onChange={onNameChange} placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" value={email} onChange={onEmailChange} placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      </Form.Group>
      <Button type="Button" onClick={() => register({ name, email, password })}>Register</Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import useInput from '../../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChnage] = useInput('');

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
    }
  }

  return (
    <Form className="new-thread-input">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" value={title} onChange={onTitleChange} placeholder="Judul" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control placeholder="Body" as="textarea" value={body} onChange={onBodyChnage} required />
      </Form.Group>
      <Button type="button" onClick={threadInputHandler}>Buat</Button>
    </Form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;

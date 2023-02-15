import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CommentInput({ commentThread }) {
  const [text, setText] = useState('');

  function commentThreadHandler(event) {
    if (text.trim()) {
      commentThread(text);
      setText('');
      event.preventDefault();
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="thread-comment__input">
      <h3>Beri Komentar</h3>
      <Form className="comment-input">
        <Form.Group className="mb-3">
          <Form.Control placeholder="Comment_Input" className="comment-input__field" as="textarea" value={text} onChange={handleCommentChange} />
        </Form.Group>
        <Button type="submit" onClick={commentThreadHandler}>Kirim</Button>
      </Form>
    </div>
  );
}

CommentInput.propTypes = {
  commentThread: PropTypes.func,
};

CommentInput.defaultProps = {
  commentThread: null,
};

export default CommentInput;

import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentList({ comments, like, dislike }) {
  return (
    <div className="comments__list">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            like={like}
            dislike={dislike}
            {...comment}
          />
        ))
      ) : (
        <div className="comment-list__null">- Tidak Ada Komentar -</div>
      )}
    </div>
  );
}

CommentList.propTypes = {
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
};

export default CommentList;

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import CommentButton from './CommentButton';
import { postedAt } from '../../utils';

function CommentItem({
  id, content, owner, createdAt,
  like, dislike, upVotesBy, downVotesBy,
}) {
  const { authUser } = useSelector((states) => states);
  return (
    <div className="comment-item">
      <header className="comment-item__header">
        <div className="comment-item__owner-info">
          <img src={owner.avatar} alt={`${owner.name}`} />
          <p>{owner.name}</p>
        </div>
        <p className="posted-at">{postedAt(createdAt)}</p>
      </header>
      <p className="comment">{parse(content)}</p>
      <CommentButton
        id={id}
        like={like}
        dislike={dislike}
        authUser={authUser}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
      />
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
};

export { commentItemShape };

CommentItem.defaultProps = {
  like: null,
  dislike: null,
};

export default CommentItem;

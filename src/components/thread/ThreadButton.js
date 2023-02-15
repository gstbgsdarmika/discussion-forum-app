import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownAlt, MdOutlineThumbUp, MdOutlineThumbDown,
} from 'react-icons/md';

function ThreadButton({
  id, authUser, like, dislike, upVotesBy, downVotesBy,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisLiked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    dislike(id);
  };

  return (
    <div>
      {
        authUser === null || authUser === undefined ? (
          <div className="d-flex justify-content-between gap-3">
            <button type="button" className="thread-upvote__button" onClick={() => alert('You must be logged in to vote.')}>
              {isThreadLiked ? <MdThumbUpAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbUp />}
              <span className="thread-upvote__label">
                {' '}
                {upVotesBy.length}
              </span>
            </button>
            <button type="button" className="thread-downvote__button" onClick={() => alert('You must be logged in to vote.')}>
              {isThreadDisLiked ? <MdThumbDownAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbDown />}
              <span className="thread-downvote__label">
                {' '}
                {downVotesBy.length}
              </span>
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-between gap-3">
            <button type="button" className="thread-upvote__button" onClick={onLikeClick}>
              {isThreadLiked ? <MdThumbUpAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbUp />}
              <span className="thread-upvote__label">
                {' '}
                {upVotesBy.length}
              </span>
            </button>
            <button type="button" className="thread-downvote__button" onClick={onDislikeClick}>
              {isThreadDisLiked ? <MdThumbDownAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbDown />}
              <span className="thread-downvote__label">
                {' '}
                {downVotesBy.length}
              </span>
            </button>
          </div>
        )
      }
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadButton.propTypes = {
  like: PropTypes.func,
  dislike: PropTypes.func,
  id: PropTypes.string.isRequired,
  authUser: PropTypes.shape(userShape),
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadButton.defaultProps = {
  like: null,
  dislike: null,
  authUser: null,
};

export default ThreadButton;

import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownAlt, MdOutlineThumbUp, MdOutlineThumbDown,
} from 'react-icons/md';

function CommentButton({
  id, authUser, like, dislike, upVotesBy, downVotesBy,
}) {
  const isCommentLiked = upVotesBy.includes(authUser);
  const isCommentDisLiked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    dislike(id);
  };

  return (
    <div className="comment-footer">
      {
        authUser === null || authUser === undefined ? (
          <>
            <button type="button" className="comment-upvote__button" onClick={() => alert('You must be logged in to vote.')}>
              {isCommentLiked ? <MdThumbUpAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbUp />}
              <span className="comment-upvote__label">
                {' '}
                {upVotesBy.length}
              </span>
            </button>
            <button type="button" className="comment-downvote__button" onClick={() => alert('You must be logged in to vote.')}>
              {isCommentDisLiked ? <MdThumbDownAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbDown />}
              <span className="comment-downvote__label">
                {' '}
                {downVotesBy.length}
              </span>
            </button>
          </>
        ) : (
          <>
            <button type="button" className="comment-upvote__button" onClick={onLikeClick}>
              {isCommentLiked ? <MdThumbUpAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbUp />}
              <span className="comment-upvote__label">
                {' '}
                {upVotesBy.length}
              </span>
            </button>
            <button type="button" className="comment-downvote__button" onClick={onDislikeClick}>
              {isCommentDisLiked ? <MdThumbDownAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbDown />}
              <span className="comment-downvote__label">
                {' '}
                {downVotesBy.length}
              </span>
            </button>
          </>
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

CommentButton.propTypes = {
  like: PropTypes.func,
  dislike: PropTypes.func,
  id: PropTypes.string.isRequired,
  authUser: PropTypes.shape(userShape),
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentButton.defaultProps = {
  like: null,
  dislike: null,
  authUser: null,
};

export default CommentButton;

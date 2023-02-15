import React from 'react';
import PropTypes from 'prop-types';
import {
  MdThumbUpAlt, MdThumbDownAlt, MdOutlineThumbUp, MdOutlineThumbDown,
} from 'react-icons/md';
import { postedAt } from '../../utils';

function ThreadDetailFooter({
  id, owner, authUser, like, dislike, upVotesBy, downVotesBy, createdAt,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisLiked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    like(id);
  };

  const onDisLikeClick = (event) => {
    event.stopPropagation();
    dislike(id);
  };
  return (
    <footer className="thread-footer">
      {
        authUser === null || authUser === undefined ? (
          <>
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
          </>
        ) : (
          <>
            <button type="button" className="thread-upvote__button" onClick={onLikeClick}>
              {isThreadLiked ? <MdThumbUpAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbUp />}
              <span className="thread-upvote__label">
                {' '}
                {upVotesBy.length}
              </span>
            </button>
            <button type="button" className="thread-downvote__button" onClick={onDisLikeClick}>
              {isThreadDisLiked ? <MdThumbDownAlt style={{ color: '#2d3e50' }} /> : <MdOutlineThumbDown />}
              <span className="thread-downvote__label">
                {' '}
                {downVotesBy.length}
              </span>
            </button>
          </>
        )
      }
      <div className="owner-info d-flex">
        <img src={owner.avatar} alt={owner.name} />
        <p className="ms-2">{owner.name}</p>
      </div>
      <p className="thread-item__created-date">{postedAt(createdAt)}</p>
    </footer>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetailFooter.propTypes = {
  like: PropTypes.func,
  dislike: PropTypes.func,
  id: PropTypes.string.isRequired,
  authUser: PropTypes.shape(userShape),
  owner: PropTypes.shape(userShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetailFooter.defaultProps = {
  like: null,
  dislike: null,
  authUser: null,
};

export default ThreadDetailFooter;

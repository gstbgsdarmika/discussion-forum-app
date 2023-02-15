import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentInput from '../comment/CommentInput';
import CommentList from '../comment/CommentsList';
import { asyncToggleUpVoteCommentDetail, asyncToggleDownVoteCommentDetail } from '../../states/threadDetail/action';

function ThreadDetailComment({ addCommentThread, authUser, detail }) {
  const { comments } = detail;
  const dispatch = useDispatch();
  const onLikeComment = (commentId) => {
    dispatch(asyncToggleUpVoteCommentDetail(commentId));
  };

  const onDislikeComment = (commentId) => {
    dispatch(asyncToggleDownVoteCommentDetail(commentId));
  };
  return (
    <div className="thread-comment">
      <div className="thread-comment__input">
        {
          authUser === null || authUser === undefined ? (
            <p className="thread-comment__not_login">
              <Link to="/login">Login</Link>
            &nbsp;untuk memberi komentar
            </p>
          ) : (
            <CommentInput commentThread={addCommentThread} />
          )
        }
      </div>
      <div className="thread-comment__list">
        <h3>{`Komentar (${comments.length})`}</h3>
      </div>
      <CommentList comments={comments} like={onLikeComment} dislike={onDislikeComment} />
    </div>
  );
}

const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
};

const commentItemShape = {
  id: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userShape),
  upVotesCommentBy: PropTypes.arrayOf(PropTypes.string),
  downVotesCommentBy: PropTypes.arrayOf(PropTypes.string),
};

const detailItemShape = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  category: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.shape(userShape),
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)),
};

ThreadDetailComment.propTypes = {
  detail: PropTypes.shape(detailItemShape).isRequired,
  authUser: PropTypes.shape(userShape),
  addCommentThread: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)),
};

ThreadDetailComment.defaultProps = {
  authUser: null,
  comments: null,
};

export default ThreadDetailComment;

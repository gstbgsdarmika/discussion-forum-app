import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BiShare } from 'react-icons/bi';
import { postedAt } from '../../utils';
import ThreadButton from './ThreadButton';

function ThreadItemFooter({
  id, user, like, dislike,
  upVotesBy, downVotesBy,
  totalComments, createdAt,
}) {
  const { authUser } = useSelector((states) => states);
  return (
    <footer className="thread-item__footer">
      <ThreadButton
        id={id}
        like={like}
        dislike={dislike}
        authUser={authUser}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
      />
      <p className="thread-item__total-comments">
        <BiShare />
        {' '}
        {totalComments}
      </p>
      <p className="thread-item__created-date">{postedAt(createdAt)}</p>
      <p className="thread-item__owner">
        Dibuat oleh
        {' '}
        <span className="ms-1">{user.name}</span>
      </p>
    </footer>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadItemFooter.propTypes = {
  id: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadItemFooter.defaultProps = {
  like: null,
  dislike: null,
};

export default ThreadItemFooter;

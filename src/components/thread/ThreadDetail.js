import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ThreadDetailFooter from './ThreadDetailFooter';

function ThreadDetail({
  id, category, title, body, owner, createdAt,
  like, dislike, upVotesBy, downVotesBy,
}) {
  const { authUser } = useSelector((states) => states);
  return (
    <>
      <header className="thread-header">
        <p className="thread-header__category">{`#${category}`}</p>
      </header>
      <div className="thread-content">
        <h2>{title}</h2>
        <div className="thread-item__body">{parse(body)}</div>
      </div>
      <ThreadDetailFooter
        id={id}
        like={like}
        owner={owner}
        authUser={authUser}
        dislike={dislike}
        createdAt={createdAt}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
      />
    </>
  );
}

const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
};

const threadDetailShape = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

ThreadDetail.propTypes = {
  ...threadDetailShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
};

ThreadDetail.defaultProps = {
  like: null,
  dislike: null,
};

export default ThreadDetail;

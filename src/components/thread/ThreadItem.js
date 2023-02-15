import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import ThreadItemFooter from './ThreadItemFooter';

function ThreadItem({
  id, title, body, user, category,
  like, dislike, upVotesBy, downVotesBy,
  createdAt, totalComments,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === '') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className="thread-item">
      <header className="thread-item__header" role="button" onClick={onThreadClick} onKeyDown={onThreadPress} tabIndex={0}>
        <span className="thread-item__category">
          {`#${category}`}
        </span>
        <h4 className="thread-item__title mt-3">{title}</h4>
      </header>
      <div className="thread-item__body">{parse(body)}</div>
      <ThreadItemFooter
        id={id}
        like={like}
        dislike={dislike}
        createdAt={createdAt}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        totalComments={totalComments}
        user={(user === undefined) ? '' : user}
      />
    </div>
  );
}

const userShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
};

ThreadItem.defaultProps = {
  like: null,
  dislike: null,
};

export { threadItemShape };

export default ThreadItem;

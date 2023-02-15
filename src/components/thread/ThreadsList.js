import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads, like, dislike }) {
  return (
    <div className="threads-list">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          like={like}
          dislike={dislike}
          {...thread}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  like: PropTypes.func,
  dislike: PropTypes.func,
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

ThreadsList.defaultProps = {
  like: null,
  dislike: null,
};

export default ThreadsList;

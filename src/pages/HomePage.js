import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiPlus } from 'react-icons/bi';
import ThreadsList from '../components/thread/ThreadsList';
import ThreadCategoryList from '../components/category/ThreadCategoryList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToggleUpVoteThread, asyncToggleDownVoteThread } from '../states/threads/action';
import useInput from '../hooks/useInput';

function HomePage({ authUser }) {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, onCategoryChange] = useInput('');

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const threadCategoryList = threadsList.filter((thread) => thread.category === category);
  const newThread = () => {
    navigate('/new');
  };

  return (
    <section className="home-page">
      <header>
        <h3>Kategori populer</h3>
        <ThreadCategoryList onCategoryChange={onCategoryChange} />
      </header>
      <h2>Diskusi Tersedia</h2>
      {
        category === ''
          ? <ThreadsList threads={threadsList} like={onLike} dislike={onDislike} />
          : <ThreadsList threads={threadCategoryList} />
      }
      {
        (authUser === null || authUser === undefined) ? ''
          : (
            <button type="button" to="/new" className="new-thread-button" onClick={newThread}>
              {' '}
              <BiPlus />
            </button>
          )
      }
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
};

HomePage.propTypes = {
  authUser: PropTypes.shape(userShape),
};

HomePage.defaultProps = {
  authUser: null,
};

export default HomePage;

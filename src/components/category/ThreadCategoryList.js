import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ThreadCategoryItem from './ThreadCategoryItem';
import { asyncPopulateUsersAndThreads } from '../../states/shared/action';
import useInput from '../../hooks/useInput';

function ThreadCategoryList({ onCategoryChange }) {
  const [selected, setSelected] = useInput('');
  const {
    threads = [],
  } = useSelector((state) => state);

  const categoryThread = threads.map(({ category }) => category);
  const uniqueCategoryThread = [...new Set(categoryThread)];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const categoryClick = (e) => {
    onCategoryChange(e);
    setSelected(e);
  };

  return (
    <div className="categories-list mb-4">
      {
      uniqueCategoryThread.map((category, key) => (
        <ThreadCategoryItem
          key={key}
          category={category}
          onCategoryClick={categoryClick}
          selected={selected}
        />
      ))
      }
    </div>
  );
}

ThreadCategoryList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default ThreadCategoryList;

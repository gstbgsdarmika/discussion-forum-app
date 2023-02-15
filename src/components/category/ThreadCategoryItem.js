import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function ThreadCategoryItem({ category, onCategoryClick, selected }) {
  if (category === selected) {
    return (
      <Button
        type="button"
        className="category-item selected"
        onClick={onCategoryClick}
        value={category}
      >
        {`#${category}`}
      </Button>
    );
  }
  return (
    <Button type="button" className="category-item" onClick={onCategoryClick} value={category}>
      {`#${category}`}
    </Button>
  );
}

ThreadCategoryItem.propTypes = {
  selected: PropTypes.string,
  category: PropTypes.string.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

ThreadCategoryItem.defaultProps = {
  selected: '',
};

export default ThreadCategoryItem;

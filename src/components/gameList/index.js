import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../carousel';
import FeaturedList from '../FeaturedList';
import CategoryList from '../categoryList';

export default function GameList({ list, listType }) {
  return (
    <div>
      {list === 'All' && listType === 'index' && (
        <>
          <Carousel />
          <FeaturedList />
        </>
      )}
      {(listType === 'cat' || listType === 'genre') && (
        <>
          <CategoryList categoryID={list} listType={listType} />
        </>
      )}
    </div>
  );
}

GameList.propTypes = {
  list: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};

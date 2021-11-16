import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../carousel';
import FeaturedList from '../FeaturedList';
import CategoryList from '../categoryList';
import GenreList from '../genreList';

export default function GameList({ list, listType }) {
  return (
    <div>
      {list === 'All' && listType === 'index' && (
        <>
          <Carousel />
          <FeaturedList />
        </>
      )}
      {(listType === 'cat') && (
        <>
          <CategoryList categoryID={list} />
        </>
      )}
      {(listType === 'genre') && (
        <>
          <GenreList genreID={list} />
        </>
      )}
    </div>
  );
}

GameList.propTypes = {
  list: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};

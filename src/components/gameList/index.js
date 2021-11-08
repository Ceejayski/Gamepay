import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../carousel';
import FeaturedList from '../FeaturedList';

export default function GameList({ list, listType }) {
  return (
    <div>
      {list === 'All' && listType === 'index' && (
        <>
          <Carousel />
          <FeaturedList />
        </>
      )}
    </div>
  );
}

GameList.propTypes = {
  list: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};

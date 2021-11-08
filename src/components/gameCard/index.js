import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function GameCard(props) {
  return (
    <div className="game-card" />
  );
}

GameCard.propTypes = {
  gameId: PropTypes.number.isRequired,
};

export default GameCard;

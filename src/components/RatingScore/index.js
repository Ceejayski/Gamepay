import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function RatingScore({ score }) {
  const [color, setColor] = useState('-success');

  useEffect(() => {
    if (score < 40) {
      setColor('-danger');
    } else if (score >= 40 && score < 70) {
      setColor('-warning');
    } else {
      setColor('-success');
    }
  }, []);
  return (
    <div>
      <p className="mb-0 score-text">
        <span className={`score-span px-2 py-1 border border${color} text${color}`}>
          {score}
        </span>
      </p>
    </div>
  );
}

RatingScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RatingScore;

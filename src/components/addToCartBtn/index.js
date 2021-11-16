import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addGame } from '../../redux/cart/cart.action';

function AddToCartBtn({
  text, id, classes, price, name,
}) {
  const game = { id, price, name };
  const addGameAction = addGame(game);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className={`btn btn-labeled btn-${classes} btn-sm`}
      onClick={() => {
        dispatch(addGameAction);
      }}
    >
      <span className="btn-label"><i className="fas fa-plus me-1" /></span>
      {text}
    </button>
  );
}

AddToCartBtn.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  classes: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddToCartBtn;

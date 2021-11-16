import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTypes from '../../redux/cart/cart.types';

function CartItems(props) {
  const { cart, dispatch } = props;
  const total = cart.reduce((prev, current) => (prev + +parseFloat(current.price.replace(/[$,]/g, ''), 10)), 0);
  const checkout = () => dispatch({ type: CartTypes.CLEAR_CART });
  return (
    <div className="dropdown">
      <button type="button" className="btn main-btn btn-success cart-btn position-relative" data-toggle="dropdown">
        <i className="fa fa-shopping-cart" aria-hidden="true" />
        Cart
        <span className="badge rounded-pill bg-danger position-absolute item-number">{cart.length}</span>
      </button>
      <div className="dropdown-menu bg-dark text-white">
        <div className="row total-header-section">
          <div className="col-lg-6 col-sm-6 col-6">
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            {' '}
            <span className="badge rounded-pill bg-danger">{cart.length}</span>
          </div>
          <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
            <p>
              Total:
              <span className="text-info">
                $
                {Math.round(total * 100) / 100}
              </span>
            </p>
          </div>
        </div>
        {cart.map((game) => (
          <Link to={`/game/${game.id}`} className="sidebar-links" key={game.id}>
            <div className="row cart-detail">
              <div className="col-lg-4 col-sm-4 col-4 cart-detail-img">
                <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.id}/capsule_184x69.jpg`} alt="pic" />
              </div>
              <div className="col-lg-8 col-sm-8 col-8 cart-detail-product text-truncate">
                <p>{game.name}</p>
                <span className="price text-info">
                  {game.price}
                </span>

              </div>
            </div>
          </Link>
        ))}
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
            <button type="button" className="btn btn-primary btn-block" onClick={checkout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItems.propTypes = {
  cart: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cartData.cartItems,
});

export default connect(mapStateToProps)(CartItems);

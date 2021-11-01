import React from 'react';
import SearchBar from '../searchBar';
import logo from '../../assets/gplogo.png';
import './style.scss';

export default function componentName() {
  return (
    <header className="container-xl">
      <nav className="d-flex justify-content-around align-items-center">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="brand text-center">
            <span className="main-brand">GAME</span>
            <span className="extra-brand">Pay</span>
          </p>
        </div>
        <div className="search-section">
          <SearchBar />
        </div>
        <div className="cart">cart</div>
      </nav>
    </header>
  );
}

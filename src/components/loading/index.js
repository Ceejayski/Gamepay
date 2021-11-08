import React from 'react';
import loader from '../../assets/loader.svg';
import './style.scss';

export default function Loading() {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
}

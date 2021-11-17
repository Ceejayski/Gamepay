import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import Footer from '../footer';

function Template(props) {
  const { children } = props;
  return (
    <div className="app">
      <Navbar />
      <div className="container-xl">
        <div className="row align-items-start">
          <div className="col-md-2 sticky-top">{children[0]}</div>
          <div className="col-md-10">{children[1]}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;

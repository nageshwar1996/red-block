import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';


function Layouts({children, title}) {
  return (
    <div className="container">
        <Sidebar />
        <div className="content">
            <Header title={title} />
          {children}
          <Footer />
        </div>  
    </div>
  );
}

Layouts.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Layouts;
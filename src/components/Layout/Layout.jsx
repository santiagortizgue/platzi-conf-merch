import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

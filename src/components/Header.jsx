import React from 'react';
import NavBar from './Nav';

const Header = () => {
  return (
    <header className="bg-secondary-custom text-main-custom fixed-top">
      <NavBar />
    </header>
  );
};

export default Header;
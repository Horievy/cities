import React from 'react';
import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

interface HeaderProps {
  isNavHidden?: boolean,
}

function Header({isNavHidden}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isNavHidden
            ? null
            : <HeaderNav/>}
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);

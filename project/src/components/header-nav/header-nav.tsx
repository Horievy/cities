import { Link } from 'react-router-dom';

interface HeaderNavProps {
  isLoggedIn: boolean
}

export default function HeaderNav({isLoggedIn}: HeaderNavProps) {

  return (
    <nav className="header__nav">
      {
        isLoggedIn
          ?
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link to='/login' className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to='/login' className="header__nav-link">
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </ul>
          :
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link to='/login' className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
      }
    </nav>
  );
}

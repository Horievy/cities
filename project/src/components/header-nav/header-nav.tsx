import { Link } from 'react-router-dom';
import {AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderNavUser from '../header-nav-user/header-nav-user';

export default function HeaderNav() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      {
        isAuthorized
          ? <HeaderNavUser />
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

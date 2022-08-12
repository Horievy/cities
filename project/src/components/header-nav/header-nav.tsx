import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logoutAction } from '../../store/api-actions';

export default function HeaderNav() {
  const {authorizationStatus} = useAppSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function logOut() {
    dispatch(logoutAction());
  }

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
  }, [authorizationStatus]);

  return (
    <nav className="header__nav">
      {
        authorizationStatus === AuthorizationStatus.Auth
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
              <a href='#logout' className="header__nav-link" onClick={logOut}>
                <span className="header__signout">Sign out</span>
              </a>
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

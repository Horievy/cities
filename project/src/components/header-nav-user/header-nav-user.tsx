import {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchFavorites, logoutAction } from '../../store/api-actions';
import { getFavoritePlacesList } from '../../store/app-data/selectors';
import { getUserData } from '../../store/user-process/selectors';

export default function HeaderNavUser() {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const favoritesAmount = useAppSelector(getFavoritePlacesList).length;

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);


  function logOut(e:React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    dispatch(logoutAction());
  }
  // eslint-disable-next-line no-console
  console.log(userData?.avatarUrl);
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{backgroundImage: `url(${userData?.avatarUrl})`, borderRadius: '50%'}}
          >
          </div>
          <span className="header__user-name user__name">{userData?.email}</span>
          <span className="header__favorite-count">{favoritesAmount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a href='#logout' className="header__nav-link" onClick={logOut}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>

  );
}

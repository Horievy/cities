import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APIRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { toggleFavorite } from '../../store/api-actions';
import { getFavoritePlacesList } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function BookmarkBtn({classPrefix, placeId}: {classPrefix: string, placeId: number}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteList = useAppSelector(getFavoritePlacesList);

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const isFavorite = !!favoriteList.find((item) => item.id === placeId) || false;


  function handleClick() {
    if (!isAuthorized) {
      navigate(APIRoute.Login);
    }

    const status = String(Number(!isFavorite));

    dispatch(toggleFavorite({placeId: placeId, status: status}));
  }

  return (
    <button onClick={handleClick} className={`${isFavorite && isAuthorized ? `${classPrefix}__bookmark-button--active` : ''} button ${classPrefix}__bookmark-button`} type='button'>
      <svg className={`${classPrefix}__bookmark-icon`} width='100%' height='100%'>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{isFavorite ? 'To bookmarks' : 'bebe'}</span>
    </button>
  );
}

export default React.memo(BookmarkBtn);

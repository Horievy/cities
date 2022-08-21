import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleFavorite } from '../../store/api-actions';


function BookmarkBtn({isFavorite, classPrefix, placeId}: {isFavorite: boolean, classPrefix: string, placeId: number}) {
  const [favorite, setFavorite] = useState(isFavorite);
  const firstUpdate = useRef(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const status = String(Number(favorite));
    dispatch(toggleFavorite({placeId: placeId, status: status}));
  }, [favorite]);

  return (
    <button onClick={() => setFavorite(!favorite)} className={`${favorite ? `${classPrefix}__bookmark-button--active` : ''} button ${classPrefix}__bookmark-button`} type='button'>
      <svg className={`${classPrefix}__bookmark-icon`} width='100%' height='100%'>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{favorite ? 'To bookmarks' : 'bebe'}</span>
    </button>
  );
}

export default React.memo(BookmarkBtn);

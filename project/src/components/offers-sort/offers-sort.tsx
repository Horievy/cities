import { useState } from 'react';
import { SORT_OPTIONS } from '../../const';
import { changeSortType } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { SortType } from '../../types/mainTypes';
import React from 'react';

function OffersSort() {
  const {sortType} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const [filterOpenstate, setFilterState] = useState(false);

  function handleOpenState() {
    setFilterState(!filterOpenstate);
  }

  function onFilterSelection(sortOption: SortType) {
    dispatch(changeSortType({sortType: sortOption}));
  }

  return (
    <form onClick={handleOpenState} className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {sortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${filterOpenstate ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((sortOption: SortType) => (
          <li key={sortOption}
            className='places__option'
            tabIndex={0}
            onClick={() => onFilterSelection(sortOption)}
          >
            {sortOption}
          </li>))}
      </ul>
    </form>
  );
}

export default React.memo(OffersSort);

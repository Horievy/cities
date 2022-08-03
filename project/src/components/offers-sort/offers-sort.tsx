import { useState } from 'react';
import { SORT_FILTERS } from '../../const';
import { SortOffersFunc } from '../../types/mainTypes';

interface OffersSortProps {
  sortOffers: SortOffersFunc,
  filter: string
}

export default function OffersSort({sortOffers, filter}: OffersSortProps) {
  const [filterOpenstate, setFilterState] = useState(false);

  function handleOpenState() {
    setFilterState(!filterOpenstate);
  }

  function onFilterSelection(filterOption: string) {
    sortOffers(filterOption);
  }

  return (
    <form onClick={handleOpenState} className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {filter}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${filterOpenstate ? 'places__options--opened' : ''}`}>
        {SORT_FILTERS.map((filterOption) => (
          <li key={filterOption}
            className='places__option'
            tabIndex={0}
            onClick={() => onFilterSelection(filterOption)}
          >
            {filterOption}
          </li>))}
      </ul>
    </form>
  );
}

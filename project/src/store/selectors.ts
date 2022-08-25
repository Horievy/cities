import { createSelector } from 'reselect';

import { City, Offer, SortType } from '../types/mainTypes';
import { getCity, getPlacesList, getSortType } from './app-data/selectors';

export const getFilteredOffers = createSelector(
  [getPlacesList, getCity],
  (places:Offer[], city: City) => places.filter((place) => place.city.name === city.title)
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortType],
  (filteredOffers: Offer[], sortType: SortType) => {
    switch (sortType) {
      case 'Popular':
        return filteredOffers.sort((a, b) => a.id - b.id);
      case 'Price: low to high':
        return filteredOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return filteredOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      default:
        return filteredOffers.sort((a, b) => a.id - b.id);
    }
  }
);

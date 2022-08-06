import { createSelector } from 'reselect';
import { City, InitialState, Offer, SortType } from '../types/mainTypes';

export const selectPlacesList = (state: InitialState) => state.placesList;
export const selectCity = (state: InitialState) => state.city;
export const getSortType = (state: InitialState) => state.sortType;

export const getFilteredOffers = createSelector(
  [selectPlacesList, selectCity],
  (places:Offer[], city: City) => places.filter((place) => place.city.name === city.title)
);

export const getSortedOffers = createSelector(
  [getFilteredOffers, getSortType],
  (filteredOffers: Offer[], sortType: SortType) => {
    switch (sortType) {
      case 'Popular':
        return filteredOffers;
      case 'Price: low to high':
        return filteredOffers.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return filteredOffers.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return filteredOffers.sort((a, b) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
  }
);

import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, setDataLoadingStatus, setPlaces, requireAuthorization, setPlace, setReviews, setPlaceId} from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { InitialState } from '../types/mainTypes';

export const initialState: InitialState = {
  city: CITIES[0],
  placesList: [],
  sortType: 'Popular',
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Auth,
  currentPlaceId: 0
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;

      return { ...state, city};
    })
    .addCase(setPlaces, (state, action) => {
      const {placesList} = action.payload;

      return { ...state, placesList};
    })
    .addCase(setPlace, (state, action) => {
      state.currentPlace = action.payload;
    })
    .addCase(setPlaceId, (state, action) => {
      state.currentPlaceId = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;

      return { ...state, sortType};
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};


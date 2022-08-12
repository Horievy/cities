import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, setDataLoadingStatus, setPlaces, requireAuthorization} from './action';
import { AuthorizationStatus, CITIES } from '../const';
import { InitialState } from '../types/mainTypes';

export const initialState: InitialState = {
  city: CITIES[0],
  placesList: [],
  sortType: 'Popular',
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Auth
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

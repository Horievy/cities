import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, setPlaces} from './action';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';
import { InitialState } from '../types/mainTypes';

export const initialState: InitialState = {
  city: CITIES[0],
  placesList: offers,
  sortType: 'Popular'
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
    });
});

export {reducer};

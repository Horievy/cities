import {createReducer} from '@reduxjs/toolkit';
import {changeCity, getPlaces} from './action';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';

const initialState = {
  city: CITIES[0],
  placesList: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {city} = action.payload;

      return { ...state, city};
    })
    .addCase(getPlaces, (state, action) => {
      const {placesList} = action.payload;

      return { ...state, placesList};
    });
});

export {reducer};

import {createSlice} from '@reduxjs/toolkit';
import {changeCity, changeSortType, setPlaceId} from '../action';
import {CITIES, NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { addReview, fetchFavorites, fetchNearestPlaces, fetchOffer, fetchPlaces, fetchReviews } from '../api-actions';

export const initialState: AppData = {
  city: CITIES[0],
  placesList: [],
  sortType: 'Popular',
  isDataLoading: false,
  currentPlaceId: 0,
  favoritePlaces: []
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(fetchPlaces.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.placesList = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchPlaces.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.currentPlace = action.payload;
      })
      .addCase(setPlaceId, (state, action) => {
        state.currentPlaceId = action.payload;
      })
      .addCase(fetchNearestPlaces.fulfilled, (state, action) => {
        state.nearestPlaces = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(changeSortType, (state, action) => {
        state.sortType = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoritePlaces = action.payload;
      });
  }
});

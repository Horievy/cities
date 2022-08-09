import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {setPlaces, setDataLoadingStatus} from './action';
import {APIRoute} from '../const';
import { Offer } from '../types/mainTypes.js';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'main/setPlaces',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));

    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setPlaces({placesList: data}));

    dispatch(setDataLoadingStatus(false));
  },
);

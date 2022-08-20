import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {setPlaces, setDataLoadingStatus, setPlace, setNearestPlaces, setReviews, redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import { AuthData, Offer, Review, ReviewData, UserData } from '../types/mainTypes.js';
import {saveToken, dropToken} from '../services/token';

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

export const fetchOffer = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/setPlace',
  async (_arg, {dispatch, getState, extra: api}) => {
    try {
      const id = getState().currentPlaceId;

      const {data} = await api.get<Offer>(`${APIRoute.Hotels}${id}`);
      dispatch(setPlace(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const fetchNearestPlaces = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/setNearestPlacs',
  async (_arg, {dispatch, getState, extra: api}) => {
    const id = getState().currentPlaceId;

    const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}${id}${APIRoute.Nearby}`);
    dispatch(setNearestPlaces(data));
  },
);

export const fetchReviews = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/setReviews',
  async (_arg, {dispatch, getState, extra: api}) => {
    const id = getState().currentPlaceId;

    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${id}`);
    dispatch(setReviews(data));
  },
);

export const addReview = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/addReview',
  async ({rating, comment}, {dispatch, getState, extra: api}) => {
    const id = getState().currentPlaceId;

    const {data} = await api.post<Review[]>(`${APIRoute.Reviews}${id}`, {rating, comment});
    dispatch(setReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

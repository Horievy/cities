import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute, NameSpace} from '../const';
import { AuthData, FavoriteData, Offer, Review, ReviewData, UserData } from '../types/mainTypes.js';
import {saveToken, dropToken} from '../services/token';

export const fetchPlaces = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPlaces',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<Offer|undefined, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, getState, extra: api}) => {
    try {
      const id = getState()[NameSpace.Data].currentPlaceId;

      const {data} = await api.get<Offer>(`${APIRoute.Hotels}${id}`);
      return data;
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const fetchNearestPlaces = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearestPlaces',
  async (_arg, {dispatch, getState, extra: api}) => {
    const id = getState()[NameSpace.Data].currentPlaceId;

    const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}${id}${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (_arg, {dispatch, getState, extra: api}) => {
    const id = getState()[NameSpace.Data].currentPlaceId;

    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}${id}`);
    return data;
  },
);

export const addReview = createAsyncThunk<Review[], ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addReview',
  async ({rating, comment}, {dispatch, getState, extra: api}) => {
    const id = getState()[NameSpace.Data].currentPlaceId;

    const {data} = await api.post<Review[]>(`${APIRoute.Reviews}${id}`, {rating, comment});
    return data;
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

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));

    return email;
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

export const toggleFavorite = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/toggleFavorite',
  async ({placeId, status}, {dispatch, getState, extra: api}) => {

    await api.post<Offer>(`${APIRoute.Favorite}${placeId}/${status}`);
    dispatch(fetchFavorites());
  },
);

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

import {createAction} from '@reduxjs/toolkit';
import { City, Offer, Review, SortType } from '../types/mainTypes';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeCity = createAction<{city: City}>('main/changeCity');

export const changeSortType = createAction<{sortType: SortType}>('main/changeSortType');

export const setPlaces = createAction<{placesList: Offer[]}>('main/setPlaces');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setPlaceId = createAction<number>('offer/setPlaceId');

export const setPlace = createAction<Offer>('offer/setPlace');

export const setNearestPlaces = createAction<Offer[]>('offer/setNearestPlacs');

export const setReviews = createAction<Review[]>('offer/setReviews');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

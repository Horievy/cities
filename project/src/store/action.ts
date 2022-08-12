import {createAction} from '@reduxjs/toolkit';
import { City, Offer, SortType } from '../types/mainTypes';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<{city: City}>('main/changeCity');

export const changeSortType = createAction<{sortType: SortType}>('main/changeSortType');

export const setPlaces = createAction<{placesList: Offer[]}>('main/setPlaces');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

import {createAction} from '@reduxjs/toolkit';
import { City, SortType } from '../types/mainTypes';
import {AppRoute} from '../const';

export const changeCity = createAction<City>('data/changeCity');

export const changeSortType = createAction<SortType>('data/changeSortType');

export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');

export const setPlaceId = createAction<number>('data/setPlaceId');

export const clearCurrentPlace = createAction('data/clearCurrentPlace');

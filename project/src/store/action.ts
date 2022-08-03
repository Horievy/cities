import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types/mainTypes';

export const changeCity = createAction<{city: City}>('main/changeCity');
export const getPlaces = createAction<{placesList: Offer[]}>('main/getPlaces');

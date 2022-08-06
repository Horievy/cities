import {createAction} from '@reduxjs/toolkit';
import { City, Offer } from '../types/mainTypes';

export const changeCity = createAction<{city: City}>('main/changeCity');
export const setPlaces = createAction<{placesList: Offer[]}>('main/setPlaces');

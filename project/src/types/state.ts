import { AuthorizationStatus } from '../const';
import {store} from '../store/index';
import { City, Offer, Review, SortType } from './mainTypes';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type AppData = {
  city: City,
  placesList: Offer[],
  sortType: SortType,
  isDataLoading: boolean,
  currentPlaceId: number,
  currentPlace?: Offer,
  nearestPlaces?: Offer[],
  reviews?: Review[]
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

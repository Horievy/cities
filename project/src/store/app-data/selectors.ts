import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { City, Offer, Review, SortType } from '../../types/mainTypes';

export const getPlacesList = (state: State): Offer[] => state[NameSpace.Data].placesList;

export const getCurrentPlace = (state: State): Offer | undefined => state[NameSpace.Data].currentPlace;

export const getCurrentPlaceId = (state: State): number => state[NameSpace.Data].currentPlaceId;

export const getNearestPlaces = (state: State): Offer[] | undefined => state[NameSpace.Data].nearestPlaces;

export const getReviews = (state: State): Review[] | undefined => state[NameSpace.Data].reviews;

export const getCity = (state: State): City => state[NameSpace.Data].city;

export const getSortType = (state: State): SortType => state[NameSpace.Data].sortType;

export const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;

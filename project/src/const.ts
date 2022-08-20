import { City, SortType } from './types/mainTypes';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES: City[] = [
  {
    title: 'Paris',
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  {
    title: 'Cologne',
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  {
    title: 'Brussels',
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  {
    title: 'Amsterdam',
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  {
    title: 'Hamburg',
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
  {
    title: 'Dusseldorf',
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  }
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const SORT_OPTIONS: SortType[] = [
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
  'Popular'
];

export enum APIRoute {
  Hotels = '/hotels/',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Reviews = '/comments/'
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER'
}

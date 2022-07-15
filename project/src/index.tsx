import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {PlaceListItemType} from './types/mainTypes';

const placesList:PlaceListItemType[] = [
  {
    mark: 'Premium',
    imgSrc: 'img/apartment-01.jpg',
    price : '120',
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
    isBookmarked: false,
    id: 0,
    rating: 4,
  },
  {
    imgSrc: 'img/room.jpg',
    price : '80',
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
    isBookmarked: true,
    id: 1,
    rating: 4
  },
  {
    imgSrc: 'img/apartment-02.jpg',
    price : '132',
    priceText: 'night',
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isBookmarked: false,
    id: 2,
    rating: 4
  },
  {
    mark: 'Premium',
    imgSrc: 'img/apartment-03.jpg',
    price : '180',
    priceText: 'night',
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isBookmarked: false,
    id: 3,
    rating: 5,
  },
  {
    imgSrc: 'img/room.jpg',
    price : '80',
    priceText: 'night',
    name: 'Wood and stone place',
    type: 'Private room',
    isBookmarked: true,
    id: 4,
    rating: 4,
  }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesList={placesList}/>
  </React.StrictMode>,
);

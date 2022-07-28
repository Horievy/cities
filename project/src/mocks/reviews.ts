import {Review} from '../types/mainTypes';

export const reviews: Review[] = [
  {
    'id': 1,
    'user': {
      'id': 11,
      'isPro': true,
      'name': 'Jack',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/2.jpg'
    },
    'rating': 4.7,
    'comment': 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    'date': '2022-06-05T12:25:36.939Z'
  },
  {
    'id': 2,
    'user': {
      'id': 13,
      'isPro': false,
      'name': 'Zak',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/4.jpg'
    },
    'rating': 2.4,
    'comment': 'Bathed in the nature. Completely unplugged. Unforgettable.',
    'date': '2022-06-05T12:25:36.939Z'
  }
];

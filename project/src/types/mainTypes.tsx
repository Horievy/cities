export type Offer = {
  bedrooms: number
  city: {
    location: {
    latitude: number
    longitude: number
    zoom: number
    }
    name: string
  }
  description: string
  goods: string[]
  host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
  }
  id: number
  images: string[]
  isFavorite: boolean
  isPremium: boolean
  location: {
    latitude: number
    longitude: number
    zoom: number
  }
  maxAdults: number
  previewImage: string
  price: number
  rating: number
  title: string
  type: string
}

export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
  }
}

export type City = {
  title: string;
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  title: string;
  latitude: number;
  longitude: number;
};

export type Points = Point[];

export interface SearchFunc {
  (place: Offer): void;
}

export type SortType = 'Popular' | 'Price: low to high'|'Price: high to low'|'Top rated first';

export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
}

export type ReviewData = {
  rating: number;
  comment: string;
}

export type FavoriteData = {
  placeId: number;
  status: string;
}

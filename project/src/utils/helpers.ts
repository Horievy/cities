import { Offer, Point, Points } from '../types/mainTypes';

export function getMapPoints(offers:Offer[]):Points {
  return offers.map((offer):Point => {
    const {title, location: {latitude, longitude}} = offer;

    return {
      title,
      latitude,
      longitude
    };
  });
}

import React from 'react';
import {Offer, SearchFunc} from '../../types/mainTypes';
import PlaceListItem from '../place-list-item/place-list-item';

interface PlaceLisProps {
  placesList: Offer[],
  classPrefix: string
  getSelectedOffer?: SearchFunc
}

function PlaceList({classPrefix, placesList, getSelectedOffer}: PlaceLisProps) {
  return (
    <div className={`${classPrefix}__places-list places__list`}>
      {
        placesList.map((place:Offer) => (
          <PlaceListItem key={place.id}
            place={place}
            classPrefix={classPrefix}
            getSelectedOffer={getSelectedOffer}
          />))
      }
    </div>
  );
}

export default React.memo(PlaceList);

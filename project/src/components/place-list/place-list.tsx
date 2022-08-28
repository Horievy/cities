import React from 'react';
import {Offer, SearchFunc} from '../../types/mainTypes';
import PlaceListItem from '../place-list-item/place-list-item';

interface PlaceLisProps {
  placesList: Offer[],
  classPrefix: string
  onPlaceItemHover?: SearchFunc
}

function PlaceList({classPrefix, placesList, onPlaceItemHover}: PlaceLisProps) {
  return (
    <div className={`${classPrefix}__places-list places__list`}>
      {
        placesList.map((place:Offer) => (
          <PlaceListItem key={place.id}
            place={place}
            classPrefix={classPrefix}
            onPlaceItemHover={onPlaceItemHover}
          />))
      }
    </div>
  );
}

export default React.memo(PlaceList);

import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types/mainTypes';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      const {location} = city;

      if (map) {
        map.setView([location.latitude, location.longitude], 12);

        return;
      }

      if (mapRef.current !== null && !mapRef.current.firstChild && map === null) {

        const instance = new Map(mapRef.current, {
          center: {
            lat: location.latitude,
            lng: location.longitude
          },
          zoom: 12
        });

        const layer = new TileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          }
        );

        instance.addLayer(layer);

        setMap(instance);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [mapRef, map, city]);

  return map;
}

export default useMap;

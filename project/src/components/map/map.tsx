import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City, Offer, Points} from '../../types/mainTypes';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Offer;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 50],
  iconAnchor: [30, 50]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 50],
  iconAnchor: [30, 50]
});


function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;
  const {location: {latitude: selectedPointLat, longitude: selectedPointLong}} = selectedPoint;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && (point.latitude === selectedPointLat && point.longitude === selectedPointLong)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%', width: '100%'}} ref={mapRef}></div>;
}

export default Map;

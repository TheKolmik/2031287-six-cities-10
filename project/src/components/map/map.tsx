import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap/useMap';
import {City, Points} from '../../types/coordinates';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../mocks/map-markers';
import { Offer } from '../../types/offers';

type Props = {
  city: City,
  points: Points [],
  activePoint: Offer | null,
}

function Map ({points, city, activePoint}: Props): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect (() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },{
            icon: point.id === activePoint?.id ? currentCustomIcon : defaultCustomIcon,
          }

          ).addTo(map);
      });
    }
  }, [map, points, activePoint]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );

}

export default Map;

import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap/useMap';
import {City, Points} from '../../types/coordinates';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../mocks/map-markers';

type Props = {
  city: City,
  POINTS: Points [],
}

function Map ({POINTS, city}: Props): JSX.Element {

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
    if(map) {
      POINTS.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },{
            icon: defaultCustomIcon,
          }

          ).addTo(map);
      });
    }
  }, [map, POINTS]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );

}

export default Map;

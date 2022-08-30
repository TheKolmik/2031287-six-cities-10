import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { ratingStar } from './mocks/rating-star';
import { POINTS, CITY, NEARPLACES} from './mocks/coordinates';

const Setting = {
  PLACES: 5,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      places = {Setting.PLACES}
      offers = {offers}
      ratings = {ratingStar}
      POINTS = {POINTS}
      city = {CITY}
      nearPlaces = {NEARPLACES}
    />
  </React.StrictMode>,
);

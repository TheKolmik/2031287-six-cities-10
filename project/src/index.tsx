import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { ratingStar } from './mocks/rating-star';

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
    />
  </React.StrictMode>,
);

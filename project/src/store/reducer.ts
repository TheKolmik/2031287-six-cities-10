import { createReducer } from '@reduxjs/toolkit';
import { switchCity, toParis } from './action';
import { FIRST_CITY } from '../const';

const CITY_COUNT = 1;

const initialState = {
  paris: 0,
  city: FIRST_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state) => {
      state.city = state.city + CITY_COUNT;
    })
    .addCase(toParis, (state) => {
      state.paris = 0;
      state.city = FIRST_CITY;
    });
});

export {reducer};

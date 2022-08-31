import { createReducer } from '@reduxjs/toolkit';
import { switchCity } from './action';
import { FIRST_CITY } from '../const';
import { listCompletion } from './action';

const CITY_COUNT = 1;

const initialState = {
  rentalList: 0,
  city: FIRST_CITY,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state) => {
      state.city = state.city + CITY_COUNT;
    })
    .addCase(listCompletion, (state) => {
      state.rentalList = 0;
      state.city = FIRST_CITY;
    });
});

export {reducer};

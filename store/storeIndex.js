import {configureStore} from '@reduxjs/toolkit';
import dateReducer from './dateSlice';

const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});

export default store;

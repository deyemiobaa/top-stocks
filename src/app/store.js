import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from '../redux/stocks/stocksSlice';

const store = configureStore({
  reducer: {
    stocksData: stocksReducer,
  },
});

export default store;

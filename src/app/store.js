import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from '../redux/stocks/stocksSlice';
import companyInfoReducer from '../redux/stocks/stocksInfoSlice';

const store = configureStore({
  reducer: {
    stocksData: stocksReducer,
    companyInfo: companyInfoReducer,
  },
});

export default store;

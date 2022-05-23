import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from '../redux/stocks/stocksSlice';
import companyInfoReducer from '../redux/stocks/stocksInfoSlice';
import searchReducer from '../redux/stocks/searchSlice';

const store = configureStore({
  reducer: {
    stocksData: stocksReducer,
    companyInfo: companyInfoReducer,
    search: searchReducer,
  },
});

export default store;

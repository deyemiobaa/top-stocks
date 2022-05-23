import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchSlice';

const baseURL = 'https://financialmodelingprep.com/api/v3/actives?apikey=35de2c47f94378e1c19ffc243e30900c';

export const getStocks = createAsyncThunk(
  'topStocks/FETCH_STOCKS_DATA',
  async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  },
);

export const stocksSlice = createSlice({
  name: 'topStocks',
  initialState: {
    rejected: false,
    loading: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getStocks.pending]: (state) => {
      const newState = {
        ...state,
        loading: true,
      };
      return newState;
    },
    [getStocks.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        data: action.payload,
      };
      return newState;
    },
    [getStocks.rejected]: (state) => {
      const newState = {
        ...state,
        rejected: true,
        loading: false,
        data: [],
      };
      return newState;
    },
  },
});

export const selectStocksData = (state) => state.stocksData.data;

export const selectFilteredStocks = (state) => {
  const allStocks = selectStocksData(state);
  const searchTerm = selectSearchTerm(state);

  return allStocks.filter((stock) => stock.companyName.toLowerCase()
    .includes(searchTerm.toLowerCase()));
};

export default stocksSlice.reducer;

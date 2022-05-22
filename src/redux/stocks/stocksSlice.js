import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseURL = 'https://financialmodelingprep.com/api/v3/actives?apikey=35de2c47f94378e1c19ffc243e30900c';

export const getStocks = createAsyncThunk(
  'topStocks/FETCH_STOCKS_DATA',
  async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  },
);

// const detailsAPI = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=35de2c47f94378e1c19ffc243e30900c'

// export const getCompanyDetails = createAsyncThunk(
//   'topStocks/company/DETAILS',
//   async () => {
//     const response = await fetch(detailsAPI)
//     const data = await response.json()
//     const result = data.map(company =>
//       result = {
//         name: company.companyName,
//         symbol: company.symbol,
//         price: company.price,
//         changes: company.changes,
//         mktCap: company.mktCap,
//         website: company.website,
//         about: `${company.description.split('.').slice(0, 4).join('.')}....`,
//         image: company.image,
//         ceo: company.ceo,
//         sector: company.sector,
//         country: company.country,
//         state: company.state
//       }
//     )
//   }
// )

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

export default stocksSlice.reducer;

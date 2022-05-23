import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCompanyDetails = createAsyncThunk(
  'topStocks/company/DETAILS',
  async (ticker) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=35de2c47f94378e1c19ffc243e30900c`);
    const data = await response.json();
    const result = data.map((company) => ({
      name: company.companyName,
      symbol: company.symbol,
      price: company.price,
      mktCap: company.mktCap,
      website: company.website,
      about: `${company.description.split('.').slice(0, 4).join('.')}....`,
      image: company.image,
      ceo: company.ceo,
      sector: company.sector,
      country: company.country,
      state: company.state,
    }));
    return result;
  },
);

export const companyInfoSlice = createSlice({
  name: 'topStocks',
  initialState: {
    loading: false,
    rejected: false,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [getCompanyDetails.pending]: (state) => {
      const result = {
        ...state,
        loading: true,
      };
      return result;
    },
    [getCompanyDetails.fulfilled]: (state, action) => {
      const result = {
        ...state,
        loading: false,
        data: action.payload,
      };
      return result;
    },
    [getCompanyDetails.rejected]: (state) => {
      const result = {
        ...state,
        rejected: true,
        loading: false,
        data: [],
      };
      return result;
    },
  },
});

export default companyInfoSlice.reducer;

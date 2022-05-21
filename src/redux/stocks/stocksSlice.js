import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "https://financialmodelingprep.com/api/v3/actives?apikey=35de2c47f94378e1c19ffc243e30900c";
export const getStocks = createAsyncThunk(
  'topStocks/FETCH_STOCKS_DATA',
  async () => {
    const response = await fetch(baseURL)
    const data = await response.json()
    return data
  }
)

export const stocksSlice = createSlice({
  name: 'topStocks',
  initialState: {
    loading: false,
    data: []
  },
  reducers: {},
  extraReducers: {
    [getStocks.pending]: (state, action) => {
      state.loading = false
    },
    [getStocks.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    }
  }
})


export default stocksSlice.reducer
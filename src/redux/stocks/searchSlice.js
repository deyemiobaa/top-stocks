import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'topStocks/',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => action.payload,
  },
});

export const { setSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search;

export default searchSlice.reducer;

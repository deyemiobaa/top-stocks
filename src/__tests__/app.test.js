import stocksReducer, { getStocks } from '../redux/stocks/stocksSlice';
import { getCompanyDetails } from '../redux/stocks/stocksInfoSlice';

it('Expect Stocks reducer to return the initial state', () => {
  expect(stocksReducer(undefined, {})).toEqual({
    data: [],
    loading: false,
    rejected: false,
  });
});

it('getStock should return a promise', () => {
  expect(getStocks()).toEqual(expect.any(Function));
});

it('getCompanyDetails should return a promise', () => {
  expect(getCompanyDetails()).toEqual(expect.any(Function));
});

it('Expect Stocks reducer to handle getStocks', () => {
  expect(stocksReducer({}, [getStocks.fulfilled])).not.toBeNull();
});

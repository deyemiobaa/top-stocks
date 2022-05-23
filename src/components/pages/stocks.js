import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../features/header';
import Stock from '../features/stock';
import Search from '../features/search';
import Loading from '../features/loading';
import Rejected from '../features/rejected';
import { selectFilteredStocks } from '../../redux/stocks/stocksSlice';
import '../assets/stocks.css';

export default function Stocks() {
  const { loading } = useSelector((state) => state.stocksData);
  const { rejected } = useSelector((state) => state.stocksData);
  const data = useSelector(selectFilteredStocks);

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  if (rejected) {
    return (
      <>
        <Header />
        <Rejected />
      </>
    );
  }
  return (
    <>
      <Header />
      <Search />
      <ul className="stock-data-body transition-all duration-500">
        {data.map((stocks) => (
          <Stock
            key={stocks.ticker}
            name={stocks.companyName}
            ticker={stocks.ticker}
            price={stocks.price}
            change={stocks.changesPercentage}
          />
        ))}
      </ul>
    </>
  );
}

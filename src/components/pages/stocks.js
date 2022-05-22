import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from '../../redux/stocks/stocksSlice';
import Header from '../features/header';
import Stock from '../features/stock';
import Loading from '../features/loading';
import '../assets/stocks.css';

export default function Stocks() {
  const { loading } = useSelector((state) => state.stocksData);
  const { rejected } = useSelector((state) => state.stocksData);
  const { data } = useSelector((state) => state.stocksData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocks());
  }, []);

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
        <p>Rejected</p>
      </>
    );
  }
  return (
    <>
      <Header />
      <ul className="stock-data-body">
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

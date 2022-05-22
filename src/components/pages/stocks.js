import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStocks } from '../../redux/stocks/stocksSlice';
import Stock from '../features/stock';
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
    return <p>Spinner</p>;
  }

  if (rejected) {
    return <p>Rejected</p>;
  }
  return (
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
  );
}

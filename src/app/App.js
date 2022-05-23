import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getStocks } from '../redux/stocks/stocksSlice';
import Stocks from '../components/pages/stocks';
import Footer from '../components/features/footer';
import CompanyInfo from '../components/pages/stockInfo';
import '../components/assets/App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocks());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Stocks />} />
        <Route path="/details/:ticker" element={<CompanyInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

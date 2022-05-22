import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Stocks from '../components/pages/stocks';
import Footer from '../components/features/footer';
import CompanyInfo from '../components/pages/stockInfo';
import '../components/assets/App.css';

function App() {
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

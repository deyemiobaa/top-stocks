import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Stock({
  name, ticker, price, change,
}) {
  return (
    <Link to={`/details/${ticker}`}>
      <li className="stock-data transition duration-300 hover:-translate-y-1 hover:shadow">
        <div className="top">
          <div>
            <p className="name text">{name}</p>
            <p className="symbol text">
              $
              {ticker}
            </p>
          </div>
          {!change.includes('-') && (
          <p className="change positive text">
            +
              {Number(change).toFixed(2)}
          </p>
          )}
          {change.includes('-') && <p className="change negative text">{Number(change).toFixed(2)}</p>}
        </div>
        <div className="bottom">
          <div className="icon" />
          <div className="amount">
            <p className="currency text">USD</p>
            <p className="price text">
              {price}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

Stock.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
};

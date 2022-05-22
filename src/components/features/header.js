import React from 'react';
import '../assets/header-footer.css';

export default function Header() {
  return (
    <header>
      <h1>
        Top
        <span><img src="favicon.png" alt="logo" /></span>
        tocks
      </h1>
      <div className="search">
        <input type="text" value="" placeholder="search" />
      </div>
    </header>
  );
}

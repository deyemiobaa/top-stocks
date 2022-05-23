import React from 'react';
import '../assets/header-footer.css';
import icon from '../assets/favicon.ico';

export default function Header() {
  return (
    <header>
      <h1 className="text-4xl">
        Top
        <span><img src={icon} alt="logo" /></span>
        tocks
      </h1>
    </header>
  );
}

import './style.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer';

export default function App() {
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

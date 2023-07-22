import './style.css';
import { useEffect } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotal, getCartItems } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';

function App() {
  const { cartItem, isLoading } = useSelector((store) => {
    return store.cart;
  });
  const { isOpen } = useSelector((store) => {
    return store.modal;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItem]);

  useEffect(() => {
    dispatch(getCartItems());
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </div>
  );
}
export default App;

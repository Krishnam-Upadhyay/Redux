import './style.css';
import { useEffect  } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer';
import {calculateTotal } from './features/cart/cartSlice'
import {useDispatch,useSelector} from 'react-redux';

function App(){
  const {cartItem} = useSelector(((store)=>{
    return store.cart;
  }))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotal());

  },[cartItem])
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
};
export default App;

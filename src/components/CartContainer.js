import CartItem from './CartItem';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../features/cart/cartSlice';
import {openModal} from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItem, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2> Your bag </h2>
          <h4 className="empty-cart">Your car is empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItem.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;

import CartItem from './CartItem';
import React from 'react';
import {useSelector} from 'react-redux';

const CartContainer = () => {
  const {cartItem,amount,total} = useSelector((store)=>store.cart);

  if(amount<1){
    return <section className = 'cart'>
      <header>
        <h2> Your bag </h2>
        <h4 className = 'empty-cart'>Your car is empty</h4>
      </header>


    </section>
    
  }
  return <section className = 'cart'>
  <header>
    <h2> Your bag </h2>
    
  </header>
  <div>{cartItem.map((item)=>{
    return <CartItem key = {item.id} {...item} />
  })}</div>


</section>;
};
export default CartContainer;

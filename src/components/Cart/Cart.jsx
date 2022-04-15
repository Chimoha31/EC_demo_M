import React,{useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from '../../store/cart-context';

const Cart = ({hideCartHandler}) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCartHandler}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

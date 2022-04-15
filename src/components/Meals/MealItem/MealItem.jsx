import React,{useContext  } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({name, description, price, id}) => {
  const CartCtx = useContext(CartContext);
  const priceFixed = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      proce: price
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

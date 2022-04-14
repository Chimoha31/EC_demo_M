import React from "react";
import classes from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = ({showCartHandler}) => {

  return (
    <button className={classes.button} onClick={showCartHandler} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

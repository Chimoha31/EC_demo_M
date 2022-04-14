import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ hideCartHandler }) => {
  return <div className={classes.backdrop} onClick={hideCartHandler} />;
};

const ModalOverlay = ({children}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = ({ children, hideCartHandler }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={hideCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay children={children}>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

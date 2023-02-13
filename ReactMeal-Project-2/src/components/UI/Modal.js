import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.whenClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalEment = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop whenClose={props.whenClose} />,
        portalEment
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEment
      )}
    </Fragment>
  );
};

export default Modal;

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, content }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div></div>,
        document.body
      )
    : null;

export default Modal;

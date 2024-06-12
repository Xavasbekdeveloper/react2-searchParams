import React from "react";

import "./modal.scss";

const Modal = ({ children, close }) => {
  return (
    <div className="modal">
      <div onClick={close} className={`${close ? "modal__overlay" : ""}`}></div>
      {/* {children} */}
    </div>
  );
};

export default Modal;

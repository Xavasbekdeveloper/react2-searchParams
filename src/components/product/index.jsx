import React from "react";

const Product = ({ detail }) => {
  return (
    <>
      <div key={detail?.id} className="modal__box">
        <div className="modal__img">
          <img src={detail?.images[0]} alt={detail?.title} />
        </div>
        <div className="modal__info">
          <h3>{detail?.title}</h3>
          <p>{detail?.description}</p>
          <p>{detail?.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;

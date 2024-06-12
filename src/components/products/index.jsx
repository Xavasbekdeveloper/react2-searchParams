import React, { memo, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Modal from "../modal";
import Product from "../product";

import "./products.scss";

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [categoriesData, setCategoriesData] = useState(null);
  const [productsData, setProductsData] = useState(null);
  const [detail, setDetail] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("detail");

  useEffect(() => {
    if (id) {
      setDetailLoading(true);
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => setDetail(res.data))
        .catch((err) => console.log(err))
        .finally(() => setDetailLoading(false));
    }
  }, [searchParams]);

  const closeModal = useCallback(() => {
    setDetail(null);
    setSearchParams({});
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/categories`)
      .then((res) => setCategoriesData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, {
        params: { limit: +searchParams.get("limit") },
      })
      .then((res) => setProductsData(res.data.products))
      .catch((err) => console.log(err));
  }, [searchParams]);

  let categories = categoriesData?.map((category) => (
    <li key={category.id}>{category.name}</li>
  ));

  let products = productsData?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__card__img">
        <img
          onClick={() => setSearchParams({ detail: product.id })}
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="products__card__info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  ));

  return (
    <>
      <section className="products">
        <div className="container">
          <h1 className="products__title">Готовые наборы</h1>

          <ul className="products__categories">{categories}</ul>

          <div className="products__cards">{products}</div>
          <div className="products__btns">
            <button
              onClick={() =>
                setSearchParams({ limit: +searchParams.get("limit") + 6 })
              }
            >
              Показать ещё
            </button>
          </div>
        </div>
      </section>
      {searchParams.get("detail") ? (
        <Modal close={closeModal}>
          {detailLoading ? <h1>Loading...</h1> : <Product detail={detail} />}
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Products);

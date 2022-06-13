import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  addtocartapi,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";
import { getproductapi } from "../../../store/product/product.actions";

const Product = () => {
  const id = null;

  const dispatch = useDispatch();

  let { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    getproductapi(dispatch);
  }, []);


  const handlecart = (id) => {
    addtocartapi(dispatch,id)
  }


  if (loading) return <h3>Loading...</h3>;

  if(error) return <h3>Someting went wrong</h3>

  if(data)
  return (
    <div data-cy={`product-${id}`}>
      {data.map((el) => (
        <div key={el.id}>
          <h3 data-cy="product-name">{el.name}</h3>
          <h6 data-cy="product-description">{el.description}</h6>
          <button onClick={() => handlecart(el.id)} data-cy="product-add-item-to-cart-button">Add to cart</button>
          <div>
            <button data-cy="product-increment-cart-item-count-button">+</button>
            <span data-cy="product-count">0</span>
            <button data-cy="product-decrement-cart-item-count-button">-</button>
            <button data-cy="product-remove-cart-item-button">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

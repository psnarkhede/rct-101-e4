// Product actions here

import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";
import axios from "axios";


export const getproductapi = (dispatch) => {

    dispatch({type:GET_PRODUCTS_LOADING});

    axios
    .get("http://localhost:8080/products")
    .then((res) => {dispatch({type:GET_PRODUCTS_SUCCESS, payload:res.data})})
    .catch(() => dispatch({type:GET_PRODUCTS_ERROR}))
};


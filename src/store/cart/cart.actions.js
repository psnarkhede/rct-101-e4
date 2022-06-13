// Cart Actions here

import axios from "axios"
import { ADD_ITEM_TO_CART_LOADING } from "./cart.types"


export const addtocartapi = (dispatch,id) => {
    dispatch({type:ADD_ITEM_TO_CART_LOADING})

    axios
    .get(`http://localhost:8080/cartItems/${id}`)
    .then((res) => console.log(res.data))
    .catch(() => 

    axios
    .post("http://localhost:8080/cartItems",{
        "productId": id,
      "count": 1,
    }).then((res) => console.log(res.data))
    );

   /* axios.patch(`http://localhost:8080/cartItems/${id}`,{count:res.data.count+1})
    .then((res) => dispatch({type:ADD_ITEM_TO_CART_LOADING}))
    )*/
}
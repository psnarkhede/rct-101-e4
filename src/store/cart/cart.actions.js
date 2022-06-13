// Cart Actions here

import axios from "axios"
import { ADD_ITEM_TO_CART_LOADING } from "./cart.types"


export const addtocartapi = (dispatch,id) => {
    dispatch({type:ADD_ITEM_TO_CART_LOADING})
}
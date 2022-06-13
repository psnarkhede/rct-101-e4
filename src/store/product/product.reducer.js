import { bindActionCreators } from "redux";
import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";

// Note: Do not update/change the initial state
let cartitem = JSON.parse(localStorage.getItem("cartitem"))
const productInitalState = {
  loading: false,
  error: false,
  data: cartitem ? cartitem : [],
};

export const productReducer = (state = productInitalState,action) => {
  
  switch(action.type){

    case GET_PRODUCTS_LOADING:{
      
      return {
        ...state,
        loading:true,
        error:false,
      }
    }

    case GET_PRODUCTS_SUCCESS:{
      localStorage.setItem("cartitem",JSON.stringify(action.payload))
      return {
        ...state,
        loading:false,
        error:false,
        data:action.payload,
      }
    }

    case GET_PRODUCTS_LOADING:{
      return {
        ...state,
        loading:false,
        error:true,
      }
    }

    default :{
      return{
        state
      }
    }
  }
};

// Auth Actions here

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";


export const loginApi = (dispatch) => {
    dispatch({type:AUTH_SIGN_IN_LOADING})

    dispatch({type:AUTH_SIGN_IN_SUCCESS, payload:true})

    dispatch({type:AUTH_SIGN_IN_ERROR,payload:"err"})
};

export const logoutApi = (dispatch) =>{
    dispatch({type:AUTH_SIGN_OUT})
}
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";

// Note: Do not update/change the initial state
let condition = localStorage.getItem("isAuth");
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: condition ? true : false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, action) => {
  
  switch (action.type){

    case AUTH_SIGN_IN_LOADING:{
      return {
        ...state,
        loading:true,
        error:false,
      }
    }

    case AUTH_SIGN_IN_SUCCESS:{
      localStorage.setItem("isAuth",true)
      return{
        ...state,
        loading:false,
       error:false,

       ...state,data:{isAuthenticated:true}
      }
    }

    case AUTH_SIGN_IN_ERROR:{
      
      return {
        ...state,
        loading:false,
        error:true,
      }
    }

    case AUTH_SIGN_OUT:{
      localStorage.removeItem("isAuth")
      return{
        ...state,
        loading:false,
       error:false,

       ...state,data:{isAuthenticated:false}
      }
    }
    
    default:{
      return state;
    }
  }
};

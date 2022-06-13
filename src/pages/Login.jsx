import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginApi } from "../store/auth/auth.actions";

const Login = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  let {loading, data, err} = useSelector((state) => state.auth)


  const handlelogin = (e) => {
    e.preventDefault();
    loginApi(dispatch);
    console.log("123");
  }

  useEffect(() => {
    if(data.isAuthenticated){
      navigate(location.state || "/")
    }
  },[data.isAuthenticated])

  return (
    <div>
      <form onSubmit={handlelogin} >
        <input data-cy="login-email" />
        <input data-cy="login-password" />
        <button data-cy="login-submit" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;

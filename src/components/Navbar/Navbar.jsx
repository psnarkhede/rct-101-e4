import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutApi } from "../../store/auth/auth.actions";

const Navbar = () => {

  const dispatch = useDispatch();

  let {loading, data, err} = useSelector((state) => state.auth)

  const handlelogout = () => {
    logoutApi(dispatch);
  }

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-link">Home</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">count:{0}</div>
        <Link to="/login">
          {" "}
          <button onClick={() => handlelogout()} data-cy="navbar-login-logout-button">{data.isAuthenticated ? "Log out" : "Log in"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

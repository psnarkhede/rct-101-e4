import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {

  const location = useLocation();

  const {data} = useSelector((state) => state.auth)

  if(data.isAuthenticated)  return children;

  return ( <Navigate to={"/login"} state={location.pathname}/>)
};

export default RequiredAuth;

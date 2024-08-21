import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      state={{ from: location }}
      to={"/logIn"}
      replace={true}
    ></Navigate>
  );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

 
  if (user) {
    return children;
  }

  return <Navigate to="/sign-in" />;

};
export default PrivateRoute;
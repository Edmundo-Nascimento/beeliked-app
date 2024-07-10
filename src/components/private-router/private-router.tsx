import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAuthenticated }: any) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;

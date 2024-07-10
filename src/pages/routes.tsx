import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import AuthPage from "./auth-page";
import PrivateRoute from "../components/private-router/private-router";
import HomePage from "./home-page";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <PrivateRoute isAuthenticated={true} >
        <HomePage />
      </PrivateRoute >
    )
  },
  {
    //TODO: Create a species of the guard to not allow an authenticated user see the auth page, redirect to HomePage
    path: "/",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router
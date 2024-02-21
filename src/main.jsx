import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import AuthProvider from "./providers/AuthProvider";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Private from "./components/Private"
import AddProductPage from "./pages/AddProductPage";
import CartPage from "./pages/CartPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <h1>Home Page.</h1>,
      },
      {
        path: '/products/:id',
        element: <Private><ProductDetailsPage /></Private>,
      },
      {
        path: '/add-product',
        element: <private><AddProductPage /></private>,
      },
      {
        path: '/update-product/:id',
        element: <Private><UpdateProductPage /></Private>,
      },
      {
        path: '/cart',
        element: <Private><CartPage /></Private>,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <RegistrationPage />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
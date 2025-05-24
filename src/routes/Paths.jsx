import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import ProductListingPage from "../pages/ProductListingPage";
import NotFoundPage from "../components/NotFoundPage";


const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/produtos', element: <ProductListingPage /> },
    { path: '*', element: <NotFoundPage /> },
]);

const Paths = () => <RouterProvider router={routes} />

export default Paths;

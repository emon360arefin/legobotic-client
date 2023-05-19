import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Landing from './Component/Landing/Landing';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Component/Authentication/AuthProvider';
import ToyDetail from './Component/ToyDetail/ToyDetail';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddToy from './Component/AddToy/AddToy';
import AllToys from './Component/AllToys/AllToys';

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
    {
        path: '/',
        element: <Landing></Landing>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>
            },
            {
                path: 'add',
                element: <AddToy></AddToy>
            },
            {
                path: 'all',
                element: <AllToys></AllToys>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)

import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, defer, RouterProvider} from "react-router-dom";
import {Cart} from "./pages/Cart/Cart.tsx";
import {Layout} from "./layout/Menu/Layout.tsx";
import {ProductComponent} from "./pages/Product/Product.tsx";
import axios from "axios";
import {PREFIX} from "./helpers/API.ts";
import {Error as ErrorPage} from "./pages/Error/Error.tsx";
import {AuthLayout} from "./layout/Auth/AuthLayout.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Register} from "./pages/Register/Register.tsx";


const Menu = lazy(() => import('./pages/Menu/Menu.tsx'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <><Suspense fallback={<>Ladet.......</>}><Menu/></Suspense></>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: '/product/:id',
                element: <ProductComponent/>,
                errorElement: <ErrorPage/>,
                loader: async ({params}) => {
                    return defer({
                        data: await axios.get(`${PREFIX}/products/${params.id}`).then((res) => res.data)
                    });
                }
            }
        ]
    },
    {
        path: "auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "login",
                element: <Login/>,
            }, {
                path: "register",
                element: <Register/>,
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);


export default Menu;

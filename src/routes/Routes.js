import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from '../components/Cart';
import Products from '../components/Products';
import Root from '../layout/Root';
import Home from '../layout/Home';
import LogIn from '../layout/LogIn';
import Register from '../layout/Register';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/products',
                    element: <Products />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                },
                {
                    path: '/login',
                    element: <LogIn />,
                },
                {
                    path: '/register',
                    element: <Register />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;
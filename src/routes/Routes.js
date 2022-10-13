import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from '../components/Cart';
import Home, { loader as productsLoader } from '../components/Home';
import Products from '../components/Products';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Home />,
            loader: productsLoader,
            children: [
                {
                    path: 'products',
                    element: <Products />,
                },
                {
                    path: '/cart',
                    element: <Cart />
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;
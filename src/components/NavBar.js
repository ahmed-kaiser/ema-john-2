import  { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from './Home';

const NavBar = () => {
    const {cart} = useContext(ShopContext);

    return (
        <nav className="bg-slate-700 text-slate-300 sticky top-0 z-10">
            <div className="sm:container mx-auto flex items-center h-16 px-2 md:px-6">
                <img src="./images/logo.svg" alt="" className="w-30"/>
                <div className="grow flex justify-center">
                    <NavLink className="mx-3 hover:text-slate-200" to="/">Home</NavLink>
                    <NavLink className="mx-3 hover:text-slate-200" to="/products">Shop</NavLink>
                    <NavLink className="mx-3 hover:text-slate-200 " to="/">Inventory</NavLink>
                    <NavLink className="mx-3 hover:text-slate-200 " to="/">About Us</NavLink>
                </div>
                <Link to={`/cart`}>
                    <div className="h-8 w-8 relative cursor-pointer hover:text-amber-500">
                        <ShoppingCartIcon />
                        <span className="bg-red-400 text-slate-100 font-semibold text-sm px-1.5 py-.5 rounded-full absolute -top-3 -right-3">{ cart.length }</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
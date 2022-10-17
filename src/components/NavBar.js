import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContextFile";


const activeLink = "mx-3 text-slate-200 underline";
const inActiveLink = "mx-3 hover:text-slate-200"

const NavBar = () => {
  const { cart } = useContext(ShopContext);

  return (
    <nav className="bg-slate-700 text-slate-300 sticky top-0 z-10">
      <div className="sm:container mx-auto flex items-center h-16 px-2 md:px-6">
        <img src="./images/logo.svg" alt="" className="w-30" />
        <div className="grow flex justify-between px-2">
          <div>
            <NavLink to="/" end className={({ isActive }) => isActive? activeLink : inActiveLink }>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive? activeLink : inActiveLink }>
              Shop
            </NavLink>
            <NavLink to="/inventory" className={({ isActive }) => isActive? activeLink : inActiveLink }>
              Inventory
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive? activeLink : inActiveLink }>
              About Us
            </NavLink>
          </div>
          <div>
            <NavLink to="/register" className={({ isActive }) => isActive? activeLink : inActiveLink }>Register</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive? activeLink : inActiveLink }>Log In</NavLink>
          </div>
        </div>
        <Link to={`/cart`}>
          <div className="h-8 w-8 relative cursor-pointer hover:text-amber-500">
            <ShoppingCartIcon />
            <span className="bg-red-400 text-slate-100 font-semibold text-sm px-1.5 py-.5 rounded-full absolute -top-3 -right-3">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

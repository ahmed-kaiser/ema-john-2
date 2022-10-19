import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContextFile";
import { UserAuthContext } from "../context/UserContext";
import logo from '../asset/images/Logo.svg';

const activeLink = "mx-3 text-slate-200 underline";
const inActiveLink = "mx-3 hover:text-slate-200";

const NavBar = () => {
  const { cart } = useContext(ShopContext);
  const { user, userLogOut } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        console.log("logged out");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <nav className="bg-slate-700 text-slate-300 sticky top-0 z-10">
      <div className="sm:container mx-auto flex items-center h-16 px-2 md:px-6">
        <img src={logo} alt="" className="w-30" />
        <div className="grow flex justify-between px-2">
          <div>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/inventory"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              Inventory
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLink : inActiveLink
              }
            >
              About Us
            </NavLink>
          </div>
          <div>
            {user ? (
              <div className="flex items-center">
                <div className="flex items-center cursor-pointer text-yellow-500">
                  <UserIcon className="h-6 w-6" />
                  <p className="ml-1">{user.displayName || "No name"}</p>
                </div>
                <button
                  onClick={handleLogOut}
                  className="mx-3 hover:text-slate-200"
                >
                  Log-Out
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? activeLink : inActiveLink
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? activeLink : inActiveLink
                  }
                >
                  Log In
                </NavLink>
              </>
            )}
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

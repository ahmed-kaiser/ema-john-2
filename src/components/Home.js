import { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export const loader = async () => {
  return await fetch("products.json");
};

export const ShopContext = createContext(null);

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);
  const db = "shoppingCart";

  const getCartFromDb = () => {
    const storedCart = localStorage.getItem(db);
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  };

  const addToDb = (id) => {
    let shoppingCart = getCartFromDb();
    if (shoppingCart) {
      let itemQuantity = shoppingCart[id];
      if (itemQuantity) {
        shoppingCart[id] = itemQuantity + 1;
      } else {
        shoppingCart[id] = 1;
      }
    } else {
      shoppingCart = {};
      shoppingCart[id] = 1;
    }
    localStorage.setItem(db, JSON.stringify(shoppingCart));
  };

  const addToCartHandler = (product) => {
    let findProduct = cart.find((item) => item.id === product.id);
    let newCart;
    if (findProduct) {
      newCart = cart.map((item) => {
        if (item.id === findProduct.id) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const removeFromDB = (productId) => {
    let shoppingCart = getCartFromDb();
    for (let id in shoppingCart) {
      if (id === productId) {
        delete shoppingCart[productId];
      }
    }
    localStorage.setItem(db, JSON.stringify(shoppingCart));
  };

  const removeFromCartHandler = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    removeFromDB(product.id);
  };

  const removeSingleItemFromDB = (productId) => {
    let shoppingCart = getCartFromDb();
    for (let id in shoppingCart) {
      if (id === productId && shoppingCart[productId] > 1) {
        shoppingCart[productId] = shoppingCart[productId] - 1;
      }
    }
    localStorage.setItem(db, JSON.stringify(shoppingCart));
  };

  const removeSingleItemFromCartHandler = (product) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        item.quantity = item.quantity - 1;
      }
      return item;
    });
    setCart(newCart);
    removeSingleItemFromDB(product.id);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.clear();
  };

  useEffect(() => {
    const storedCart = getCartFromDb();
    const cartItemList = [];
    for (const id in storedCart) {
      let product = products.find((item) => item.id === id);
      if (product) {
        product.quantity = storedCart[id];
        cartItemList.push(product);
      }
    }
    setCart(cartItemList);
  }, [products]);

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        addToCartHandler: addToCartHandler,
        removeFromCartHandler: removeFromCartHandler,
        removeSingleItemFromCartHandler: removeSingleItemFromCartHandler,
      }}
    >
      <NavBar />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </ShopContext.Provider>
  );
};

export default Home;

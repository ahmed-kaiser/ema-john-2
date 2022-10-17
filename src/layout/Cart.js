import { useContext } from "react";
import CartItem from "../components/CartItem";
import { ShopContext } from "../context/ShopContextFile";
import OrderSummary from "../components/OrderSummary";
import Loader from "../components/Loader";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <div className="sm:container mx-auto mt-10 px-2 md:px-6">
      <div className="flex gap-10 justify-between">
        <div className="w-2/3">
          <h2 className="font-serif font-bold text-lg mb-8">Shopping Cart</h2>
          <div className="flex items-center border border-l-0 border-r-0 h-10 px-2 my-4 gap-x-3 font-semibold">
            <p className="w-3/6 text-center">Details</p>
            <p className="w-1/6 text-center">Quantity</p>
            <p className="w-1/6 text-center">Price</p>
            <p className="w-1/6 text-center">Remove</p>
          </div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;

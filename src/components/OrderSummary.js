import { useContext } from "react";
import { ShopContext } from "./Home";

const OrderSummary = () => {
  const { cart } = useContext(ShopContext);

  let subtotal = 0;
  let shipping = 0;
  let quantity = 0;

  for (let item of cart) {
    subtotal += item.price * item.quantity;
    shipping += item.shipping * item.quantity;
    quantity += item.quantity;
  }

  return (
    <div className="w-96 p-3 bg-gray-50 drop-shadow-md h-fit sticky top-32">
      <h2 className="font-bold font-serif text-lg text-center border-b-2 border-amber-200 py-2">
        Order Summary
      </h2>
      <div className="my-3 px-2 border-b-2 border-amber-200 min-h-[180px]">
        <p className="font-semibold flex justify-between">
          <span>Total Item :</span>
          <span>{cart.length}</span>
        </p>
        <p className="font-semibold flex justify-between">
          <span>Total Quantity :</span>
          <span>{quantity}</span>
        </p>
        <p className="font-semibold flex justify-between">
          <span>Subtotal :</span>
          <span>${subtotal}</span>
        </p>
        <p className="font-semibold flex justify-between">
          <span>Shipping :</span>
          <span>${shipping}</span>
        </p>
      </div>
      <div className="my-3 px-2">
        <p className="font-semibold flex justify-between">
          <span>Order Total :</span>
          <span>${shipping + subtotal}</span>
        </p>
        <div className="mt-5 text-center">
          <button className="bg-amber-400 text-white font-bold w-1/2 p-2 rounded hover:bg-amber-500">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

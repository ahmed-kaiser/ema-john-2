import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContextFile";

const CartItem = ({ item }) => {
  const {
    removeFromCartHandler,
    addToCartHandler,
    removeSingleItemFromCartHandler,
  } = useContext(ShopContext);

  return (
    <div className="flex items-center border h-36 px-2 my-4 gap-3">
      <div className="w-1/6">
        <img src={item.img} alt="" className="w-32" />
      </div>
      <div className="w-2/6">
        <p className="font-bold text-slate-500">{item.name}</p>
      </div>
      <div className="w-1/6 flex items-center justify-center gap-3">
        <button
          onClick={() => removeSingleItemFromCartHandler(item)}
          type="button"
          className="px-1 py-1 rounded-full hover:bg-red-300"
        >
          <MinusIcon className="w-4" />
        </button>
        <p className="border px-2 py-1">{item.quantity}</p>
        <button
          onClick={() => addToCartHandler(item)}
          type="button"
          className="px-1 py-1 rounded-full hover:bg-green-300"
        >
          <PlusIcon className="w-4" />
        </button>
      </div>
      <div className="w-1/6 text-center font-semibold">
        <p>${item.price}</p>
      </div>
      <div className="w-1/6">
        <TrashIcon
          onClick={() => removeFromCartHandler(item)}
          className="h-6 w-6 text-red-700 mx-auto cursor-pointer hover:text-red-500"
        />
      </div>
    </div>
  );
};

export default CartItem;

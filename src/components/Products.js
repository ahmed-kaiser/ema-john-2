import { useContext } from "react";
import { ShopContext } from "./Home";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="sm:container mx-auto mt-8 px-2 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-14">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContextFile';
import defaultImage from '../asset/images/no-image.jpg';

const Product = ({ product }) => {
    const  { addToCartHandler }  = useContext(ShopContext);
    return (
        <div className="border relative">
            <img 
                src={ product.img } 
                alt="" 
                onError={(e) => {
                    e.currentTarget.src = {defaultImage};
                }}
            />
            <div className="px-2 py-3 mb-12">
                <h3 className="font-sans font-bold text-slate-600">{ product.name }</h3>
                <p className="py-2">
                    <span>Seller:</span> { product.seller }
                </p>
                <p>
                    <span>Price:</span> ${ product.price }
                </p>
            </div>
            <div className="grid grid-cols-2 absolute bottom-1 w-full">
                <button className="flex items-center justify-center border border-lime-500 font-bold text-slate-500 hover:bg-lime-500 hover:text-slate-100 m-1 py-1" type="button">
                    Preview
                    <EyeIcon className="w-4 mx-1"/>
                </button>
                <button 
                    className="flex items-center justify-center border border-amber-500 font-bold text-slate-500 m-1 py-1 hover:bg-amber-500 hover:text-slate-100" 
                    type="button" 
                    onClick={() => addToCartHandler(product)}
                >
                    Add to cart
                    <ShoppingCartIcon className="w-4 mx-1"/>    
                </button>
            </div>
        </div>
    );
};

export default Product;
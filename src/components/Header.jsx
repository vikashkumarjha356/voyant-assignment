import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductsContext';

const Header = () => {
    const { cart, clearCart } = useContext(ProductContext);

    return (
        <header className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl">
            <h1 className="text-2xl font-bold text-white">Products</h1>
            <div className="flex items-center gap-6">
                <button
                    onClick={clearCart}
                    className="text-white hover:text-red-400 font-medium transition duration-200"
                >
                    <i className="fas fa-trash text-white text-2xl"></i>
                </button>
                <div className="relative flex items-center">
                    <span className="material-icons text-white text-2xl">  <i className="fas fa-shopping-cart text-white text-3xl"></i></span>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center font-semibold">
                        {cart.length}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;


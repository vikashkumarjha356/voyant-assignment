import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105">
            <img
                src={product.imageURL}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out"
            />
            <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-800 hover:text-indigo-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 mt-2 text-lg">Rs {product.price}</p>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
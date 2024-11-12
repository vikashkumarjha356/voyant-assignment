import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border rounded shadow-md p-4">
            <div className="h-40 bg-gray-200 mb-4"></div>
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-700">Rs {product.price}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-black text-white mt-2 py-1 px-4 rounded hover:bg-gray-800"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
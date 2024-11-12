import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border rounded shadow-md p-4">
            <img
                src={product.imageURL} // Use the image URL from your product object
                alt={product.name}
                className="h-40 w-full object-cover mb-4 rounded" // Style the image
            />
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
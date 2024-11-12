import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductsContext';

const ProductList = () => {
    const { products, loading, error, addToCart } = useContext(ProductContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products: {error}</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
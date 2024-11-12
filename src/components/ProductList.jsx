import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductsContext';
import Sidebar from './Sidebar';

const ProductList = () => {
    const { products, filteredProducts, loading, error, addToCart } = useContext(ProductContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products: {error}</div>;

    return (

        <div className='flex'>
            <Sidebar />
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
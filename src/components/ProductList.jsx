import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductsContext';
import Sidebar from './Sidebar';

const ProductList = () => {
    const { filteredProducts, loading, error, addToCart } = useContext(ProductContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products: {error}</div>;

    return (

        <div className='flex'>
            <Sidebar />
            <div className="ml-8 w-full h-[calc(100vh-6rem)] overflow-y-scroll scrollbar-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
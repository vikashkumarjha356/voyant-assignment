import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://mocki.io/v1/4ef9fde5-c17f-4b99-9cb5-0a14ed5db18a');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Add to cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{ products, cart, addToCart, clearCart, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};
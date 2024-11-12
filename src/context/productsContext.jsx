import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// Create the context
export const ProductContext = createContext();



function reducer(state, action) {

}

const initialState = {
    product: [],
    filteredProducts: [],
}
// Provider component
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [filters, setFilters] = useState({
        color: [],
        type: [],
        gender: [],
        price: []
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const filteredProducts = products.filter(product => {
        const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
        const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
        const matchesGender = filters.gender.length === 0 || filters.gender.includes(product.gender);

        const matchesPrice = filters.price.length === 0 || filters.price.some(priceRange => {
            const [min, max] = priceRange.replace('Rs', '').split('-').map(Number);
            return product.price >= min && product.price <= max;
        });

        const searched = [product.name, product.color, product.type]
            .some(attr => attr.toLowerCase().includes(searchTerm))

        return matchesColor && matchesType && matchesGender && matchesPrice && searched;
    });


    console.log(searchTerm);

    // Fetch products from the API
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

    // Add product to cart
    const addToCart = (product) => {
        let existingProduct = cart.filter(cartProduct => cartProduct.id === product.id);
        if (existingProduct.length < product.quantity)
            setCart([...cart, product]);
        else
            toast.error("Max limit reached. Can't add more product of this type")
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                cart,
                filters,
                searchTerm,
                loading,
                error,
                setFilters,
                setSearchTerm,
                addToCart,
                clearCart,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};


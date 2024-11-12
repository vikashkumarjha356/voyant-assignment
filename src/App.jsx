import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBar from './components/Searchbar';
import ProductList from './components/ProductList';
import { ProductProvider } from './context/ProductsContext';

const App = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductProvider>
      <div className="flex">
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className="flex-1">
          <Header cartCount={cart.length} clearCart={clearCart} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductList />
        </div>
      </div>
    </ProductProvider>

  );
};

export default App;
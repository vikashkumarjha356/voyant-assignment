
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductsContext';


const SearchBar = () => {
    const [localSearchTerm, setLocalSearchTerm] = useState('')
    const { setSearchTerm, toggleSidebar } = useContext(ProductContext);

    return (
        <div className="flex items-center justify-center w-full max-w-lg mx-auto bg-transparent pb-1 px-1 border-b-2 mt-3 mb-2 border-gray-300">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search..."
                className="flex-grow p-2 bg-transparent border-none focus:outline-none text-gray-700 text-lg"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value.toLowerCase())}
            />

            {/* Search Button */}
            <button
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300 shadow-md"
                onClick={() => setSearchTerm(localSearchTerm)}
            >
                <i className="fas fa-search text-lg"></i>
            </button>

            {/* Filter Button - Only Visible on Mobile View */}
            <button
                className="p-2 ml-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300 shadow-md block md:hidden"
                onClick={() => toggleSidebar()}
            >
                <i className="fas fa-filter text-lg"></i>
            </button>
        </div>

    );
};

export default SearchBar;

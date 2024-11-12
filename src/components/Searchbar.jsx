
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center p-4 space-x-2">
            <input
                type="text"
                placeholder="Search for products..."
                className="border border-gray-300 rounded-lg p-3 w-full bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out duration-300 shadow-md hover:shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-all ease-in-out duration-300 shadow-md">
                <span className="material-icons">search</span>
            </button>
        </div>

    );
};

export default SearchBar;


import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center p-4">
            <input
                type="text"
                placeholder="Search for products..."
                className="border rounded p-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="ml-2 p-2 bg-gray-300 rounded">
                <span className="material-icons">search</span>
            </button>
        </div>
    );
};

export default SearchBar;

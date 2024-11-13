import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductsContext';

const Sidebar = () => {
    const { products, setFilters, isMobileSidebarOpen } = useContext(ProductContext);
    const uniqueColors = [...new Set(products.map(product => product.color))];
    const uniqueType = [...new Set(products.map(product => product.type))];
    const uniqueGender = [...new Set(products.map(product => product.gender))];
    const handleChange = (e, category) => {
        const { value, checked } = e.target;
        setFilters(prevFilters => {
            // If checked, add the category field with the value
            if (checked) {
                return {
                    ...prevFilters,
                    [category]: [...(prevFilters[category] || []), value]
                };
            } else {
                // If unchecked, remove the value from the array
                return {
                    ...prevFilters,
                    [category]: prevFilters[category].filter(item => item !== value)
                };
            }
        });
    };

    return (
        <aside className={`${isMobileSidebarOpen ? 'w-full absolute z-[999] animate-slide-in' : 'hidden'} md:block p-6 bg-white shadow-xl rounded-base w-80 space-y-6  h-[calc(100vh-6rem)] overflow-y-scroll scrollbar-hidden`}>

            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Color</h2>
                <div className="space-y-2">
                    {uniqueColors.map((color) => (
                        <label key={color} className="flex text-base items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="color"
                                value={color}
                                onChange={(e) => handleChange(e, 'color')}
                                className="form-checkbox h-4 w-4 text-indigo-600"
                            />
                            <span className="text-gray-700">{color}</span>
                        </label>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Gender</h2>
                <div className="space-y-2">
                    {uniqueGender.map((gender) => (
                        <label key={gender} className="flex text-base items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="gender"
                                value={gender}
                                onChange={(e) => handleChange(e, 'gender')}
                                className="form-checkbox h-4 w-4 text-indigo-600"
                            />
                            <span className="text-gray-700">{gender}</span>
                        </label>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Price</h2>
                <div className="space-y-2">
                    {['0-Rs250', 'Rs251-450', 'Rs450-500'].map((range) => (
                        <label key={range} className="flex text-base items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="price"
                                value={range}
                                onChange={(e) => handleChange(e, 'price')}
                                className="form-checkbox h-4 w-4 text-indigo-600"
                            />
                            <span className="text-gray-700">{range}</span>
                        </label>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Type</h2>
                <div className="space-y-2">
                    {uniqueType.map((type) => (
                        <label key={type} className="flex text-base items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="type"
                                value={type}
                                onChange={(e) => handleChange(e, 'type')}
                                className="form-checkbox h-4 w-4 text-indigo-600"
                            />
                            <span className="text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>

    );
};

export default Sidebar;

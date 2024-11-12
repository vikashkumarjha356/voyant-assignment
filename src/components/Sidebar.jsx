import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductsContext';

const Sidebar = () => {
    const { filters, setFilters } = useContext(ProductContext);

    const handleChange = (e, category) => {
        console.log(e.target.value)
        setFilters({ ...filters, [category]: e.target.value });
    };

    return (
        <aside className="p-4 bg-white shadow-md">
            <div className="mb-4">
                <h2 className="font-bold">Colour</h2>
                {['Red', 'Blue', 'Green'].map((color) => (
                    <label key={color} className="block">
                        <input type="checkbox" name="color" value={color} onChange={(e) => handleChange(e, 'color')} />
                        {color}
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <h2 className="font-bold">Gender</h2>
                {['Men', 'Women'].map((gender) => (
                    <label key={gender} className="block">
                        <input type="checkbox" name="gender" value={gender} onChange={(e) => handleChange(e, 'gender')} />
                        {gender}
                    </label>
                ))}
            </div>
            <div className="mb-4">
                <h2 className="font-bold">Price</h2>
                {['0-Rs250', 'Rs251-450', 'Rs450+'].map((range) => (
                    <label key={range} className="block">
                        <input type="checkbox" name="price" value={range} onChange={(e) => handleChange(e, 'price')} />
                        {range}
                    </label>
                ))}
            </div>
            <div>
                <h2 className="font-bold">Type</h2>
                {['Polo', 'Hoodie', 'Basic'].map((type) => (
                    <label key={type} className="block">
                        <input type="checkbox" name="type" value={type} onChange={(e) => handleChange(e, 'type')} />
                        {type}
                    </label>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;

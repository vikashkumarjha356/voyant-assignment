import React from 'react';

const Sidebar = ({ filters, setFilters }) => {
  const handleChange = (e, category) => {
    setFilters({ ...filters, [category]: e.target.value });
  };

  return (
    <aside className="p-4 bg-white shadow-md">
      <div className="mb-4">
        <h2 className="font-bold">Colour</h2>
        <div>
          {['Red', 'Blue', 'Green'].map((color) => (
            <label key={color} className="block">
              <input type="radio" name="color" value={color} onChange={(e) => handleChange(e, 'color')} />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Gender</h2>
        <div>
          {['Men', 'Women'].map((gender) => (
            <label key={gender} className="block">
              <input type="radio" name="gender" value={gender} onChange={(e) => handleChange(e, 'gender')} />
              {gender}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-bold">Price</h2>
        <div>
          {['0-Rs250', 'Rs251-450', 'Rs450+'].map((range) => (
            <label key={range} className="block">
              <input type="radio" name="price" value={range} onChange={(e) => handleChange(e, 'price')} />
              {range}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold">Type</h2>
        <div>
          {['Polo', 'Hoodie', 'Basic'].map((type) => (
            <label key={type} className="block">
              <input type="radio" name="type" value={type} onChange={(e) => handleChange(e, 'type')} />
              {type}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

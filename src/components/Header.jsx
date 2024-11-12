const Header = ({ cartCount, clearCart }) => {
    return (
      <header className="flex justify-between items-center p-4 shadow-md bg-gray-100">
        <h1 className="text-lg font-semibold">Products</h1>
        <div className="flex items-center gap-4">
          <button onClick={clearCart} className="text-red-500 hover:underline">Clear Cart</button>
          <div className="relative">
            <span className="material-icons">shopping_cart</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
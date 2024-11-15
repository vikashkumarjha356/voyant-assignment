import Header from './components/Header';
import SearchBar from './components/Searchbar';
import ProductList from './components/ProductList';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from './context/ProductsContext';

const App = () => {
  return (
    <ProductProvider>
      <div className="flex">
        <div className="flex-1">
          <Header />
          <SearchBar />
          <ProductList />
        </div>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#e0f7fa", // Light teal background for success
              color: "#00796b", // Dark teal text color
              borderRadius: "10px",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              border: "1px solid #004d40", // Subtle border for definition
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            },
            iconTheme: {
              primary: "#00796b",
              secondary: "#ffffff",
            },
          },
          error: {
            duration: 3000,
            style: {
              backgroundColor: "#ffebee", // Light red background for error
              color: "#c62828", // Dark red text color
              borderRadius: "10px",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              border: "1px solid #b71c1c", // Subtle border for definition
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            },
            iconTheme: {
              primary: "#c62828",
              secondary: "#ffffff",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      />


    </ProductProvider>

  );
};

export default App;
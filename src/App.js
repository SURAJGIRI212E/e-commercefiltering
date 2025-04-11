// src/App.js
import { useState } from "react";
import { CartProvider } from "./CartContext"; // Import the CartProvider
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Cart from "./Navigation/Cart"; // Import the Cart component
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [query, setQuery] = useState("");
  const [showCart, setShowCart] = useState(false); // Use context to get showCart and toggleCart

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCompany(event.target.value);
  };

  function filteredData(products, selected, selectedcompany, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      if (selected === "50") {
        filteredProducts = filteredProducts.filter(
          ({ price }) => parseFloat(price.replace(/[^0-9.-]+/g,"")) <= 50
        );
      } else if (selected === "100") {
        filteredProducts = filteredProducts.filter(
          ({ price }) => parseFloat(price.replace(/[^0-9.-]+/g,"")) > 50 && parseFloat(price.replace(/[^0-9.-]+/g,"")) <= 100
        );
      } else if (selected === "150") {
        filteredProducts = filteredProducts.filter(
          ({ price }) => parseFloat(price.replace(/[^0-9.-]+/g,"")) > 100 && parseFloat(price.replace(/[^0-9.-]+/g,"")) <= 150
        );
      } else if (selected === "200") {
        filteredProducts = filteredProducts.filter(
          ({ price }) => parseFloat(price.replace(/[^0-9.-]+/g,"")) > 150
        );
      } else {
        filteredProducts = filteredProducts.filter(
          ({ category, color, title }) =>
            category === selected ||
            color === selected ||
          
            title === selected
        );
      }
    }
    if (selectedcompany) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selectedcompany
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, price }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          price={price}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, selectedCompany, query);

  return (
    <CartProvider>
      <Navigation handleInputChange={handleInputChange} toggleCart={toggleCart} showCart={showCart} />
      <Sidebar handleChange={handleChange} />
      {showCart ? (
        <Cart /> // Show Cart component if showCart is true
      ) : (
        <>
          <Recommended handleClick={handleClick} currentcompany={selectedCompany} />
          <Products result={result} />
        </>
      )}
    </CartProvider>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";
import BookDetail from "./Pages/BookDetail";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import AddToCartNotification from "./Components/AddToCartNotification";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    emailjs.init("l_FfsS1lb06S6UsUM"); // Replace with your actual User ID
  }, []);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const addToCart = (book) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
    setNotification(book);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          toggleCart={toggleCart}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} setCart={setCart} />}
            />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/book/:id"
              element={<BookDetail addToCart={addToCart} />}
            />
          </Routes>
        </main>
        <Footer />
        <Cart
          cart={cart}
          setCart={setCart}
          isOpen={isCartOpen}
          toggleCart={toggleCart}
        />
        {notification && (
          <AddToCartNotification
            book={notification}
            onClose={closeNotification}
          />
        )}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

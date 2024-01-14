import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Food_Products from "./components/Food_Products";
import Cart from "./components/Cart";
import CartId from "./components/CartId";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutUs" Component={AboutUs} />
          <Route path="/contact" Component={Contact} />
          <Route path="/LoginPage" Component={LoginPage} />
          <Route path="/SignUpPage" Component={SignUpPage} />
          <Route path="/Food_Products" Component={Food_Products} />
          <Route path="/Food_Products/:id" Component={CartId} />
          <Route path="/Cart" Component={Cart} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

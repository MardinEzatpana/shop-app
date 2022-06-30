import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import LandingPage from "../landing-page/LandingPage";
import ProductContainer from "../ProductContainer";
import ShoppingCart from "../ShoppingCart";
import ViewProduct from "../ViewProduct";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/products/:productId" element={<ViewProduct />} />
          <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default HomePage;

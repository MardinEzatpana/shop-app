import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductContainer from "./pages/ProductContainer";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return <>
   <BrowserRouter>
   <Header />
   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/products" element={<ProductContainer/>} />
     <Route path="/cart" element={<ShoppingCart />} />
   </Routes>
   </BrowserRouter>
  </>;
};

export default App;

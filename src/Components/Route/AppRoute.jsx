import MockmanEs from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router";
import {
  Login,
  Signup,
  Products,
  Wishlist,
  Cart,
  Home,
} from "../../barrelexport/Pageutil";
import { SingleProductPage } from "../../pages/SingleProductPage/SingleProductPage";

export const AppRoute = () => {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="mockman" element={<MockmanEs />} />
        <Route path="products/:productId" element={<SingleProductPage />} />
      </Routes>
  );
};
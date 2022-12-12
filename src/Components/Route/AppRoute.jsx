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
      </Routes>
  );
};
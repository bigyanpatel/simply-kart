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
  Profile,
  PageNotFound,
} from "../../barrelexport/Pageutil";
import { Checkout } from "../../pages/Checkout/Checkout";
import {
  Settings,
  ProfileCard,
  Addresses,
  Orders,
} from "../../pages/Profile/profilePageExport";
import { SingleProductPage } from "../../pages/SingleProductPage/SingleProductPage";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="mockman" element={<MockmanEs />} />
        <Route path="products/:productId" element={<SingleProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile/" element={<Profile />}>
          <Route path="" element={<ProfileCard />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
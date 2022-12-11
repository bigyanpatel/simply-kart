import React from "react";
import {
  Navbar,
  ProductsListCard,
  Filter,
} from "../../barrelexport/Componentutil";
import "./Products.css";

export const Products = () => {
  return (
    <div>
      <Navbar />
      <main className="main-wrapper">
        <Filter />
        <div className="main">
          <ProductsListCard />
          <ProductsListCard />
          <ProductsListCard />
          <ProductsListCard />
        </div>
      </main>
    </div>
  );
};
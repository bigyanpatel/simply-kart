import axios from "axios";
import React, { useEffect } from "react";
import {
  Navbar,
  Filter,
  ProductsListCard,
} from "../../barrelexport/Componentutil";
import {
  getFilterByPrice,
  getFilteredByCategory,
  getSortedData,
  getRatingFilteredData,
} from "../../barrelexport/Filterutil";

import { useDataStore } from "../../contexts/DataStoreContext";
import { useFilter } from "../../contexts/FilterContext";

import "./Products.css";

export const Products = () => {
  const { products, setProducts } = useDataStore();
  const { filterState } = useFilter();
  const { sortBy, categories, rating, price } = filterState;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts([...data.products]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const categoryFilteredData = getFilteredByCategory(products, categories);
  const ratingFilteredData = getRatingFilteredData(
    categoryFilteredData,
    rating
  );
  const priceFilteredData = getFilterByPrice(ratingFilteredData, price);
  const resultData = getSortedData(priceFilteredData, sortBy);

  return (
    <div>
      <Navbar />
      <main className="main-wrapper">
        <Filter />
        <div className="main">
          {resultData.map((item, index) => (
            <ProductsListCard key={index} product={item} />
          ))}
        </div>
      </main>
    </div>
  );
};
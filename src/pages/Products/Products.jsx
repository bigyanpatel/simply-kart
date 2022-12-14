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

import { useDataStore, useFilter } from "../../contexts/contextExport";
import { getFilterBySearch } from "../../helperFunctions/Filter/filterBySearch";

import "./Products.css";

export const Products = () => {
  const { products, setProducts, searchText } = useDataStore();
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

  const filteredBySearch = getFilterBySearch(products, searchText);
  const categoryFilteredData = getFilteredByCategory(
    filteredBySearch,
    categories
  );
  const ratingFilteredData = getRatingFilteredData(
    categoryFilteredData,
    rating
  );
  const priceFilteredData = getFilterByPrice(ratingFilteredData, price);
  const resultData = getSortedData(priceFilteredData, sortBy);

  return (
    <div>
      <Navbar />
      <main className="main-wrapper mg-top">
        <Filter />
        <div className="main">
          {resultData.length ? (
            resultData.map((item, index) => (
              <ProductsListCard key={index} product={item} />
            ))
          ) : (
            <h1>No books available</h1>
          )}
        </div>
      </main>
    </div>
  );
};
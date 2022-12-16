import React from "react";
import { Filter, ProductsListCard } from "../../barrelexport/Componentutil";
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
  const { products, searchText } = useDataStore();
  const { filterState } = useFilter();
  const { sortBy, categories, rating, price } = filterState;

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
    <main className="main-wrapper mg-top">
      <div className="filter-container">
        <Filter />
      </div>
      {resultData.length ? (
        <div className="main">
          {resultData.map((item, index) => (
            <ProductsListCard key={index} product={item} />
          ))}
        </div>
      ) : (
        <p className="fs-lg center-text m-hr-auto">No books available</p>
      )}
    </main>
  );
};
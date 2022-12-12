import React, { useEffect, useState } from "react";
import "./Home.css";
import Introimage from "../../assets/Introimage.svg";
import { Navbar, HomeCard } from "../../barrelexport/Componentutil";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDataStore } from "../../contexts/DataStoreContext";

export const Home = () => {
  const { categories, setCategories, products, setProducts } = useDataStore();

  const [error, setError] = useState("");

  useEffect(() => {
    try {
      getCategories();
      getProducts();
    } catch (error) {
      setError("Server having issues");
    }
  }, []);

  const getCategories = async () => {
    try {
      const { data: categoryData, status } = await axios.get("/api/categories");
      status === 200
        ? setCategories([...categoryData.categories])
        : setCategories([]);
    } catch (error) {
      setError("Server having some issues!!!");
    }
  };

  const getProducts = async () => {
    try {
      const { data: productsData, status } = await axios.get("/api/products");
      status === 200
        ? setProducts([...productsData.products])
        : setProducts([]);
    } catch (error) {
      setError("Server having some issues!!!");
    }
  };

  return (
    <div>
      <Navbar />

      {/* App introduction starts */}
      <div className="app-intro">
        <div className="intro-section">
          <h1 className="intro-header">Welcome to the online B-Shop</h1>
          <h2 className="intro-quote">
            A writer only begins a book. A reader finishes it
          </h2>
          <Link to="/products">
            <button className="btn is-solid cta-button fs-lg mg-vrtl-lg">
              Explore Now
            </button>
          </Link>
        </div>
        <img src={Introimage} className="image" alt="intro image" />
      </div>
      {/* App intrduction ends */}

      {categories.length !== 0 && products.length !== 0 ? (
        <div className="grid-category">
          <h2 className="section-heading center-text">Types</h2>
          <div className="book-type">
            {categories.map((item, index) => {
              return (
                <div key={index} className="type type-fiction">
                  <img src={item.imgSrc} alt="no preview available" />
                  <p>{item.categoryName}</p>
                </div>
              );
            })}
          </div>
          {/* <!-- || Books category ends --> */}

          {/* <!-- || Books trending starts --> */}
          <h2 className="section-heading center-text">India trending</h2>
          <div className="book-trending">
            {products.slice(0, 4).map((item, index) => (
              <HomeCard key={index} product={item} />
            ))}
          </div>
          {/* <!-- || Books trending ends --> */}

          {/* <!-- || High selling books starts --> */}
          <h2 className="section-heading center-text">High Selling Books</h2>
          <div className="book-high-sell">
            {products.slice(5, 9).map((item, index) => (
              <HomeCard key={index} product={item} />
            ))}
          </div>
          {/* <!-- || High selling books ends --> */}
        </div>
      ) : (
        <h1 className="center-text">{error}</h1>
      )}
      {/* App introduction ends */}
    </div>
  );
};
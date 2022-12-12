import React, { useEffect, useState } from "react";
import "./Home.css";
import Introimage from "../../assets/Introimage.svg";
import { Navbar, HomeCard } from "../../barrelexport/Componentutil";
import { Link } from "react-router-dom";
import axios from "axios";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data: categories, status } = await axios.get("/api/categories");
        const { data: productsData, status: statusCode } = await axios.get(
          "/api/products"
        );
        status === 200
          ? setCategories([...categories.categories])
          : setCategories([]);

        statusCode === 200
          ? setHomeProducts([...productsData.products])
          : setHomeProducts([]);

      } catch (error) {
        setError("Server having some issues!!!");
      }
    })();
  }, []);

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

      {categories.length !== 0 || homeProducts.length !== 0 ? (
        <div className="grid-category">
          <h2 className="section-heading center-text">Types</h2>
          <div className="book-type">
            {categories.map((item) => {
              return (
                <div className="type type-fiction">
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
            {homeProducts.slice(0, 4).map((item) => (
              <HomeCard product={item} />
            ))}
          </div>
          {/* <!-- || Books trending ends --> */}

          {/* <!-- || High selling books starts --> */}
          <h2 className="section-heading center-text">High Selling Books</h2>
          <div className="book-high-sell">
            {homeProducts.slice(5, 9).map((item) => (
              <HomeCard product={item} />
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
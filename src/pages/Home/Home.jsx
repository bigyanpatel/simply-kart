import React from "react";
import "./Home.css";
import Introimage from "../../assets/Introimage.svg";
import { Navbar, Card } from "../../barrelexport/Componentutil";
import { Link } from "react-router-dom";

export const Home = () => {
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

      <div class="grid-category">
        {/* <!-- || Books type starts--> */}
        <h2 className="section-heading center-text">Types</h2>
        <div class="book-type">
          <div class="type type-fiction">
            <img
              src="https://n2.sdlcdn.com/imgs/e/h/m/Fiction-0ba2f.jpg"
              alt="no preview available"
            />
            <p>Fiction</p>
          </div>
          <div class="type type-nonfiction">
            <img
              src="https://n2.sdlcdn.com/imgs/e/h/m/NonFiction-3fef2.jpg"
              alt="no preview available"
            />
            <p>Non-Fiction</p>
          </div>
          <div class="type type-philosophy">
            <img
              src="https://n4.sdlcdn.com/imgs/e/h/m/philosphy-ed2c5.jpg"
              alt="no preview available"
            />
            <p>Philosophy</p>
          </div>
          <div class="type type-family">
            <img
              src="https://n3.sdlcdn.com/imgs/e/h/m/family-fcca1.jpg"
              alt="no preview available"
            />
            <p>Family & Relationship</p>
          </div>
          <div class="type type-selfhelp">
            <img
              src="https://n2.sdlcdn.com/imgs/e/h/m/SelfHelp-eeb2f.jpg"
              alt="no preview available"
            />
            <p>Self-Help</p>
          </div>
        </div>
        {/* <!-- || Books category ends --> */}

        {/* <!-- || Books trending starts --> */}
        <h2 class="section-heading center-text">India trending</h2>
        <div class="book-trending">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* <!-- || Books trending ends --> */}

        {/* <!-- || High selling books starts --> */}
        <h2 class="section-heading center-text">High Selling Books</h2>
        <div class="book-high-sell">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {/* <!-- || High selling books ends --> */}
      </div>
      {/* App introduction ends */}
    </div>
  );
};
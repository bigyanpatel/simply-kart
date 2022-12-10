import React from "react";
import { Filter } from "../../components/Filter/Filter";
import { Navbar } from "../../components/Navbar/Navbar";
import { FiHeart } from "react-icons/fi";
import "./Products.css";

export const Products = () => {
  return (
    <div>
      <Navbar />
      <main className="main-wrapper">
        <Filter />
        <div className="main">
          <div className="card">
            <div className="card-image-container">
              <img
                className="image-responsive"
                src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
                alt="No preview available"
              />
              <span className="card-icon favourites fs-lg">
                <FiHeart />
              </span>
            </div>
            <div className="card-body">
              <h3 className="card-title">A line in the river</h3>
              <small className="not">By John Willy</small>
              <p className="card-description">
                Think twice, write it on paper and do it in actions.
              </p>
              <p className="card-sell-price">
                <span>₹325</span>
                <span className="card-cost-price">₹650</span>
                <span className="card-discount">50%off</span>
              </p>
              <button className="btn is-solid is-cart">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img
                className="image-responsive"
                src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
                alt="No preview available"
              />
              <span className="card-icon  favourites fs-lg">
                <FiHeart />
              </span>
            </div>
            <div className="card-body">
              <h3 className="card-title">A line in the river</h3>
              <small className="not">By John Willy</small>
              <p className="card-description">
                Think twice, write it on paper and do it in actions.
              </p>
              <p className="card-sell-price">
                <span>₹325</span>
                <span className="card-cost-price">₹650</span>
                <span className="card-discount">50%off</span>
              </p>
              <button className="btn is-solid is-cart">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img
                className="image-responsive"
                src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
                alt="No preview available"
              />
              <span className="card-icon favourites fs-lg">
                <FiHeart />
              </span>
            </div>
            <div className="card-body">
              <h3 className="card-title">A line in the river</h3>
              <small className="not">By John Willy</small>
              <p className="card-description">
                Think twice, write it on paper and do it in actions.
              </p>
              <p className="card-sell-price">
                <span>₹325</span>
                <span className="card-cost-price">₹650</span>
                <span className="card-discount">50%off</span>
              </p>
              <button className="btn is-solid is-cart">Add to Cart</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image-container">
              <img
                className="image-responsive"
                src="https://n1.sdlcdn.com/imgs/g/p/h/large/The-Secret-Law-of-Blessing-SDL722248518-1-1c081.png"
                alt="No preview available"
              />
              <span className="card-icon favourites fs-lg">
                <FiHeart />
              </span>
            </div>
            <div className="card-body">
              <h3 className="card-title">A line in the river</h3>
              <small className="not">By John Willy</small>
              <p className="card-description">
                Think twice, write it on paper and do it in actions.
              </p>
              <p className="card-sell-price">
                <span>₹325</span>
                <span className="card-cost-price">₹650</span>
                <span className="card-discount">50%off</span>
              </p>
              <button className="btn is-solid is-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
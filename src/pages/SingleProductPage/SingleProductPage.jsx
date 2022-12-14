import React, { useEffect } from "react";
import "./SingleProductPage.css";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import {
  useDataStore,
  useCart,
  useAuth,
  useWishList,
} from "../../contexts/contextExport";
import { Navbar } from "../../barrelexport/Componentutil";
import { addToCart } from "../../Services/CartService";
import { Link } from "react-router-dom";
import { addToWishList } from "../../Services/WishListService";

export const SingleProductPage = () => {
  const { productId } = useParams();
  const { products, toastProps, setShowLoader } = useDataStore();
  const {
    wishListState: { wishListData },
    wishListDispatch,
  } = useWishList();
  const {
    cartDispatch,
    cartState: { cartData },
  } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  const singleProduct = products?.find((item) => item.id === productId);
  const replace = (catName) => {
    return catName.replaceAll("_", " ");
  };
  useEffect(() => {
    if (!products) {
      setShowLoader(false);
      return;
    } else {
      setShowLoader(true);
      return;
    }
  }, []);

  return (
    <div className="main-container flex-center">
      {singleProduct && (
        <div className="product-container">
          <div className="product-image-container flex-center wd-100">
            <img src={singleProduct.imgSrc} alt={singleProduct.title} />
          </div>
          <div className="product-info">
            <p className="fs-xlg">{singleProduct.title}</p>
            <span className="sp-rating high-rating  mg-vrtl-sm">
              <span>{singleProduct.ratings}</span>
              <FaStar className="mg-l" />
            </span>
            <p className="card-sell-price center-text fs-lg">
              <span>₹{singleProduct.sellPrice}</span>
              <span className="card-cost-price">
                ₹{singleProduct.costPrice}
              </span>
            </p>
            <p className="clr-red fs-lg">YOU SAVE {singleProduct.discount}%</p>
            <div className="product-detail mg-vrtl-md">
              <p className="pd-heading fs-btw-ml mg-vrtl-sm">Product Detail:</p>
              <ul className="product-detail-list">
                <li className="mg-vrtl-sm">
                  Category:
                  <span className="list-value">
                    {replace(singleProduct.categoryName)}
                  </span>
                </li>
                <li className="mg-vrtl-sm">
                  Author:
                  <span className="list-value">{singleProduct.author}</span>
                </li>
              </ul>
            </div>
            <div className="action-btn-area">
              {cartData.find((item) => item.id === productId) ? (
                <Link to="/cart">
                  <button className="btn is-solid is-cart wd-100">
                    GO TO CART
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    addToCart(
                      token,
                      singleProduct,
                      cartDispatch,
                      toastProps,
                      navigate
                    )
                  }
                  className="btn is-solid is-cart"
                >
                  ADD TO CART
                </button>
              )}
              {wishListData.find((item) => item.id === productId) ? (
                <Link to="/wishlist">
                  <button className="btn is-btn-secondary is-outlined wd-100">
                    GO TO WISHLIST
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() =>
                    addToWishList(
                      token,
                      singleProduct,
                      wishListDispatch,
                      toastProps,
                      navigate
                    )
                  }
                  className="btn is-btn-secondary is-outlined"
                >
                  ADD TO WISHLIST
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
import react, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsListCard } from "../../barrelexport/Componentutil";
import { useAuth, useWishList } from "../../contexts/contextExport";
import "./Wishlist.css";

export const Wishlist = () => {
  const {
    wishListState: { wishListData },
  } = useWishList();
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    !token && navigate("/login");
  });

  return (
    <>
      {wishListData.length !== 0 ? (
        <div className="grid-container">
          {wishListData.map((item, index) => (
            <ProductsListCard product={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex-center flex-dir-col">
          <h1 className="center-text">Empty wishlist</h1>
          <Link to="/products">
            <button className="btn is-solid fs-lg">Let's shopping</button>
          </Link>
        </div>
      )}
    </>
  );
};
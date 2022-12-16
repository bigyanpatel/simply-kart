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
      {wishListData.length !== 0 && (
        <p className="align-center  fs-lg mg-vrtl-xlg">
          Your wishlist has {wishListData.length}
          {wishListData.length > 1 ? " products" : " product"}
        </p>
      )}
      {wishListData.length !== 0 ? (
        <div className="grid-container">
          {wishListData.map((item, index) => (
            <ProductsListCard product={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex-center flex-dir-col">
          <p className="center-text fs-lg mg-xlg">Empty wishlist</p>
          <Link to="/products">
            <button className="btn is-solid fs-btw-ml">Let's Shopping</button>
          </Link>
        </div>
      )}
    </>
  );
};
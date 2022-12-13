import { Link, useNavigate } from "react-router-dom";
import { Navbar, ProductsListCard } from "../../barrelexport/Componentutil";
import { useAuth } from "../../contexts/AuthContext";
import { useWishList } from "../../contexts/WishListContext";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishListState } = useWishList();
  const { wishListData } = wishListState;
  const navigate = useNavigate();
  const { token } = useAuth();

  !token && navigate("/login");

  return (
    <div>
      <Navbar />
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
    </div>
  );
};
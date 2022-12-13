import { Link } from "react-router-dom";
import { Navbar, ProductsListCard } from "../../barrelexport/Componentutil";
import { useWishList } from "../../contexts/WishListContext";
import { WishListService } from "../../Services/WishListService";
import "./Wishlist.css";

export const Wishlist = () => {
  const { userWishList } = useWishList();

  WishListService();

  return (
    <div>
      <Navbar />
      <div className="grid-container">
        {userWishList.length !== 0 ? (
          userWishList.map((item, index) => <ProductsListCard key={index} product={item} />)
          ) : (
          <div className="flex-center flex-dir-col">
            <h1 className="center-text">Empty wishlist</h1>
            <Link to="/products">
              <button className="btn is-solid fs-lg">Let's shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
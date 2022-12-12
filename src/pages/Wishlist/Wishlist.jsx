import { Link } from "react-router-dom";
import { Navbar, WishListCard } from "../../barrelexport/Componentutil";
import { useAuth } from "../../contexts/AuthContext";
import { useWishList } from "../../contexts/WishListContext";
import { WishListService } from "../../Services/WishListService";
import "./Wishlist.css";

export const Wishlist = () => {
  const { currentUser } = useAuth();
  const { wishList, userWishList } = useWishList();

  WishListService();
  // console.log(wishList.length);

  return (
    <div>
      <Navbar />
      <div className="grid-container">
        {userWishList.length !== 0 ? (
          userWishList.map((item) => <WishListCard product={item} />)
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
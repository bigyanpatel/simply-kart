import axios from "axios";
import "./WishListCard.css";
import { FiTrash } from "react-icons/fi";
import { useAuth } from "../../../contexts/AuthContext";
import { useWishList } from "../../../contexts/WishListContext";

export const WishListCard = ({ product }) => {
  const { _id, title, imgSrc, author, costPrice, sellPrice, discount } =
    product;
  const { wishList, setWishList, userWishList, setUserWishList } =
    useWishList();
  const { token } = useAuth();

  console.log("api wish list", wishList);

  const removeFromWishList = async () => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: token,
        },
      });
      setWishList([...res.data.wishlist]);
      setUserWishList(userWishList.filter((item) => item._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="image-responsive" src={imgSrc} alt="wishlist item" />
        {}
        <span className="card-icon dismiss-icon fs-lg">
          <FiTrash onClick={removeFromWishList} />
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <small>{author}</small>
        <p className="card-sell-price">
          <span>{sellPrice}</span>
          <span className="card-cost-price">{costPrice}</span>
          <span className="card-discount">{discount}</span>
        </p>
        <button className="btn is-solid is-cart">Add to Cart</button>
      </div>
    </div>
  );
};
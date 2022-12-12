import { Navbar, WishListCard } from "../../barrelexport/Componentutil";
import { checkLoginService } from "../../Services/AuthService";
import "./Wishlist.css";

export const Wishlist = () => {

  checkLoginService();
  return (
    <div>
      <Navbar />
      <WishListCard />
    </div>
  );
};
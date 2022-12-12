import { Navbar, WishListCard } from "../../barrelexport/Componentutil";
import { CheckLoginService } from "../../Services/AuthService";
import "./Wishlist.css";

export const Wishlist = () => {

  CheckLoginService();
  return (
    <div>
      <Navbar />
      <WishListCard />
    </div>
  );
};
import { Navbar, WishListCard } from "../../barrelexport/Componentutil";
import { useAuth } from "../../contexts/AuthContext";
import { CheckLoginService } from "../../Services/AuthService";
import "./Wishlist.css";

export const Wishlist = () => {
  const { currentUser } = useAuth();

  CheckLoginService();
  return (
    <div>
      <Navbar />
      <WishListCard />
    </div>
  );
};
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

const CartService = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  useEffect(() => {
    (async () => {
      if (!token) {
        navigate("/login");
        return;
      } else {
        console.log("else part");
        try {
          const res = await axios.get("/api/user/cart", {
            headers: {
              authorization: token,
            },
          });
          console.log(res);
          cartDispatch({ type: "SET_CART_FROM_API", payload: res.data.cart });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);
};
export { CartService };
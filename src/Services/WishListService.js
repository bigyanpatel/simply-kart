import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const WishListService = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!token) {
        navigate("/login");
        return;
      } else {
        console.log("else part");
        try {
          const res=await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);
};

export { WishListService };
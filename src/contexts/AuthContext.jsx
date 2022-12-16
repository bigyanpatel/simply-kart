import axios from "axios";
import { createContext, useContext} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDataStore } from "./DataStoreContext";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const token = localStorageToken?.token || "";
  const currentUser = localStorageToken?.user || "";
  const { toastProps } = useDataStore();

  const navigate = useNavigate();

  const signupHandler = async (formData) => {
    try {
      const { data } = await axios.post("/api/auth/signup", formData);
      localStorage.setItem(
        "loginToken",
        JSON.stringify({ token: data.encodedToken, user: data.createdUser })
      );
      toast.success(`Hi user, you are signed up`, toastProps);
      navigate("/profile/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      });
      localStorage.setItem(
        "loginToken",
        JSON.stringify({ token: data.encodedToken, user: data.foundUser })
      );
      navigate("/profile/");
      toast.success("User logged in!!", toastProps);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        loginHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
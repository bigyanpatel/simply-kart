import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDataStore } from "./DataStoreContext";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();
toast.configure();

const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const token = localStorageToken?.token || "";
  const currentUser = localStorageToken?.user || "";
  const { toastProps } = useDataStore();
  const [signinData, setSigningData] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

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
      const { data } = await axios.post("/api/auth/login", signinData);
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

  const logoutHandler = () => {
    setTimeout(() => {
      localStorage.removeItem("loginToken");
      toast.warn("User logged out!!", toastProps);
      navigate("/");
    }, 1000);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        loginHandler,
        signupHandler,
        signinData,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
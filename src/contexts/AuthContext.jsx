import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "../Hooks/useForm";
import { useDataStore } from "./DataStoreContext";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const { formData } = useForm();
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState(
    localStorageToken && localStorageToken.token
  );
  const { toastProps } = useDataStore();

  const [signinData, setSigningData] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

  const navigate = useNavigate();

  const signupHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/signup", formData);
      localStorage.setItem(
        "loginToken",
        JSON.stringify({ token: data.encodedToken })
      );
      setToken(data.encodedToken);
      setCurrentUser(data.foundUser);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", signinData);
      localStorage.setItem(
        "loginToken",
        JSON.stringify({ token: data.encodedToken })
      );
      setToken(data.encodedToken);
      setCurrentUser(data.foundUser);
      navigate("/");
      toast.success("User logged in!!", toastProps);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    setTimeout(() => {
      localStorage.removeItem("loginToken");
      setToken("");
      setCurrentUser({});
      toast.warn("User logged out!!", toastProps);
      navigate("/");
    }, 1000);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        loginHandler,
        signupHandler,
        signinData,
        logoutHandler,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider };
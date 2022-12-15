import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDataStore } from "./DataStoreContext";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [currentUser, setCurrentUser] = useState(
    {firstName: "Bigyan",
      lastName: "Patel"
    }
  );
  const [token, setToken] = useState(
    localStorageToken && localStorageToken.token
  );
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
      setToken(data.encodedToken);
      setCurrentUser(data.createdUser);
      toast.success(`Hi user, you are signed up`, toastProps);
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
        JSON.stringify({ token: data.encodedToken, user: data.foundUser })
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
        currentUser,
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
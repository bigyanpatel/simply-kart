import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

const CheckLoginService = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  console.log(token);

  useEffect(() => {
    !token && navigate("/login");
  });
};

export { CheckLoginService };
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAutch = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("registeredUsers")) {
      navigate("/register");
    }
  });
};
export default useAutch;

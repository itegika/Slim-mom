import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchToken } from "../../redux/auth/auth-selectors";

export const useAuth = () => {
  const token = useSelector(fetchToken);

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;

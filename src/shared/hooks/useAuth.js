import { useState, useEffect } from "react";

export const useAuth = (initialState) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    if (data) {
      console.log("user is logged in");
      setData(data);
      return true;
    } else {
      console.log("user is logged out");
      return false;
    }
  }, [data]);
};

export default useAuth;

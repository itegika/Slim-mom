import { nanoid } from "nanoid";
import { useRef } from "react";

const useUniqueString = () => {
  const uniqueRef = useRef(nanoid());
  return uniqueRef.current;
};

export default useUniqueString;

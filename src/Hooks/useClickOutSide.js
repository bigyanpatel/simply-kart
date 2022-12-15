import { useRef, useEffect } from "react";

export const useClickOutside = (handler) => {
  const domElementRef = useRef();

  useEffect(() => {
    const subHandler = (event) => {
      if (!domElementRef.current?.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", subHandler);
    return () => {
      document.removeEventListener("mousedown", subHandler);
    };
  });

  return domElementRef;
};
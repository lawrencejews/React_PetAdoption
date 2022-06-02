import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // use one instance for many renders
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    const modalRoot = document.getElementById("model")
    modalRoot.appendChild(elRef.current);

    // Cleaning-Up 
    return () => modalRoot.removeChild(elRef.current);
  }, [])
  return createPortal(<div>{ children}</div>, elRef.current)
}

export default Modal;
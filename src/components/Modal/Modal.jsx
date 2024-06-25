import ReactDom from "react-dom";
const Modal = ({ children }) => {
  return ReactDom.createPortal(
    <div className="formModal">{children}</div>,
    document.getElementById("modal")
  );
};
export { Modal };

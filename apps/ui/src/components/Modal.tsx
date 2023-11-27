import { FC, ReactElement } from "react";

interface ModalProps {
  children: ReactElement;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="absolute bg-white w-[45.75rem] h-4/6 right-8 bottom-28 rounded-[.26rem]">
      <h1>Modal</h1>
      <div>{children}</div>
    </div>
  );
};

export default Modal;

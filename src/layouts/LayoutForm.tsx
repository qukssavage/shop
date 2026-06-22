import { logoIcon } from "@utils/img";
import type { FC, ReactNode } from "react";
import "./Layout.scss";
interface LayoutFormProps {
  children: ReactNode;
}

const LayoutForm: FC<LayoutFormProps> = ({ children }) => {
  return (
    <div className="layoutForm">
      <div className="layoutForm__left">
        <img src={logoIcon} alt="logo" className="layoutForm__left-img"/>
      </div>
      <div className="layoutForm__right">
        {children}
      </div>
    </div>
  );
};

export default LayoutForm;

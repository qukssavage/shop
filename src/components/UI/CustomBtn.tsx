import type { FC } from "react";

interface CustomBtnProps {
  text: string;
  icon?: string;
  width: number;
  height: number;
  center?: boolean;
  gap?: number;
  padding?: string;
  textTransform?: boolean;
}
const CustomBtn: FC<CustomBtnProps> = ({
  text,
  icon,
  center,
  width,
  height,
  gap,
  padding,
  textTransform,
}) => {
  return (
    <>
      <button
        className="customBtn"
        style={{
          maxWidth: width,
          height: height,
          marginLeft: center ? "auto" : "",
          marginRight: center ? "auto" : "",
          gap: gap,
          padding: padding,
        }}
      >
        {icon && <img src={icon} alt="" />}
        <span
          className="customBtn__span"
          style={{ textTransform: textTransform ? "uppercase" : "" }}
        >
          {text}
        </span>
      </button>
    </>
  );
};

export default CustomBtn;

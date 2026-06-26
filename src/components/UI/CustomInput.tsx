import type { FC } from "react";

interface CustomInputProps {
  placeholder: string;
  type: string;
  text: string;
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, type, text }) => {
  return (
    <>
      <div className="layoutForm__right-block_input">
        <span className="layoutForm__right-block_input_span">{text}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="layoutForm__right-block_input-field"
        />
      </div>
    </>
  );
};

export default CustomInput;

import type { FC } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
  placeholder: string;
  type: string;
  text: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
}

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  type,
  text,
  error,
  register,
}) => {
  return (
    <>
      <div className="layoutForm__right-block_input">
        <span className="layoutForm__right-block_input-span">{text}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="layoutForm__right-block_input-field"
          {...register}
        />
        {error && (
          <p className="layoutForm__right-block_input-error">{error.message}</p>
        )}
      </div>
    </>
  );
};

export default CustomInput;

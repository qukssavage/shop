import CustomInput from "@components/UI/CustomInput";
import LayoutForm from "@layouts/LayoutForm";
import CustomBtn from "@components/UI/CustomBtn";
import type { FC } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { ILogin } from "@/types";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ mode: "onChange" });

  const submit = (data: ILogin) => {
    console.log("data", data);
    console.log(errors);
  };
  return (
    <>
      <LayoutForm>
        <div className="layoutForm__right-block">
          <h1 className="layoutForm__right-block_title">Регистрация</h1>
          <form className="layoutForm__right-block_form">
            <CustomInput placeholder="Имя" type="text" text="Ваше Имя" />
            <CustomInput
              placeholder="Ваша почта"
              type="password"
              text="Почта"
            />
            <CustomInput
              placeholder="Ваш пароль"
              type="password"
              text="Пароль"
            />
            <CustomInput
              placeholder="Повторите пароль"
              type="password"
              text="Повторите пароль"
            />
          </form>
          <CustomBtn
            center
            width={248}
            height={60}
            text="Зарегистрироваться"
            padding="20px"
            textTransform
          />

          <div className="layoutForm__right-block_info">
            <span className="layoutForm__right-block_info-text">
              Есть аккаунт?
            </span>
            <Link to="/login" className="layoutForm__right-block_info-link">
              Войти
            </Link>
          </div>
        </div>
      </LayoutForm>
    </>
  );
};

export default Register;

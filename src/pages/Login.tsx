import CustomInput from "@components/UI/CustomInput";
import LayoutForm from "@layouts/LayoutForm";
import CustomBtn from "@components/UI/CustomBtn";
import type { FC } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { ILogin } from "@/types";

const Login: FC = () => {
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
          <h1 className="layoutForm__right-block_title">Вход</h1>
          <form
            className="layoutForm__right-block_form"
            onSubmit={handleSubmit((data) => submit(data))}
          >
            <CustomInput
              placeholder="Ваш логин"
              type="text"
              text="Ваш логин"
              error={errors.username}
              register={register("username", {
                required: "Это поле обязательно для заполнения",
                minLength: {
                  value: 6,
                  message: "Минимальная длина 6 символа",
                },
              })}
            />
            <CustomInput
              placeholder="Ваш пароль"
              type="password"
              text="Ваш пароль"
              error={errors.password}
              register={register("username", {
                required: "Это поле обязательно для заполнения",
                minLength: {
                  value: 8,
                  message: "Минимальная длина 8 символа",
                },
              })}
            />
          </form>
          <CustomBtn
            center
            width={248}
            height={60}
            text="Войти"
            gap={10}
            padding="20px"
            textTransform
          />

          <div className="layoutForm__right-block_info">
            <span className="layoutForm__right-block_info-text">
              Нет аккаунта?
            </span>
            <Link to="/register" className="layoutForm__right-block_info-link">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </LayoutForm>
    </>
  );
};

export default Login;

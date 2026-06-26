import CustomInput from "@components/UI/CustomInput";
import LayoutForm from "@layouts/LayoutForm";
import CustomBtn from "@components/UI/CustomBtn";
import type { FC } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { IRegister } from "@/types";

const Register: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegister>({ mode: "onChange" });

  const password = watch("password");

  const submit = (data: IRegister) => {
    console.log("data", data);
    console.log(errors);
  };
  return (
    <>
      <LayoutForm>
        <div className="layoutForm__right-block">
          <h1 className="layoutForm__right-block_title">Регистрация</h1>
          <form
            className="layoutForm__right-block_form"
            onSubmit={handleSubmit(submit)}
          >
            <CustomInput
              placeholder="Имя"
              type="text"
              text="Ваше Имя"
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
              placeholder="Ваша почта"
              type="email"
              text="Почта"
              error={errors.username}
              register={register("email", {
                required: "Это поле обязательно для заполнения",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Некорректный email",
                },
              })}
            />
            <CustomInput
              placeholder="Ваш пароль"
              type="password"
              text="Пароль"
              error={errors.password}
              register={register("password", {
                required: "Это поле обязательно для заполнения",
                minLength: {
                  value: 8,
                  message: "Минимальная длина 8 символа",
                },
              })}
            />
            <CustomInput
              placeholder="Повторите пароль"
              type="password"
              text="Повторите пароль"
              error={errors.password2}
              register={register("password2", {
                required: "Это поле обязательно для заполнения",
                validate: (value) =>
                  value === password || "Пароли не совпадают",
                minLength: {
                  value: 8,
                  message: "Минимальная длина 8 символов",
                },
              })}
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

import CustomInput from "@components/UI/CustomInput";
import LayoutForm from "@layouts/LayoutForm";
import CustomBtn from "@components/UI/CustomBtn";
import type { FC } from "react";
import { Link } from "react-router";
const Login: FC = () => {
  return (
    <div>
      <LayoutForm>
        <div className="layoutForm__right-block">
          <h1 className="layoutForm__right-block_title">Вход</h1>
          <form className="layoutForm__right-block_form">
            <CustomInput placeholder="Ваш логин" type="text" text="Ваш логин" />
            <CustomInput
              placeholder="Ваш пароль"
              type="password"
              text="Ваш пароль"
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
    </div>
  );
};

export default Login;

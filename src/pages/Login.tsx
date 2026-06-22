import LayoutForm from "@layouts/LayoutForm";
import type { FC } from "react";

const Login: FC = () => {
  return (
    <div>
      <LayoutForm>
        <input type="text" />
        <input type="text" />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          neque laboriosam aperiam expedita hic temporibus illo est, a
          perferendis consequatur adipisci sint, error ea maxime ad! Nihil eius
          harum ullam.
        </h3>
        <button>Login</button>
      </LayoutForm>
    </div>
  );
};

export default Login;

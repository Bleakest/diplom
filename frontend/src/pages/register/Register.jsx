import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { request } from "../../utils/request";
import { useDispatch, useSelector } from "react-redux";
import { SelectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import { setUser } from "../../actions";

const regFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(/\w+$/, "Неверный логин")
    .min(3, "Минимум 3 символа")
    .max(15, "Максимум 15 символов"),
  password: yup
    .string("Заполните пароль")
    .min(6, "Минимум 6 символов")
    .max(30, "Максимум 30 символов"),
});
export const Register = () => {
  const [serverError, setServerError] = useState(null);
  const roleId = useSelector(SelectUserRole);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(regFormSchema),
  });

  const onSubmit = ({ login, password }) => {
    request("/register", "POST", { login, password }).then(
      ({ error, user }) => {
        if (error) {
          setServerError(`Ошибка запроса: ${error}`);
          return;
        }

        console.log("пользователь зареган в бд");

        dispatch(setUser(user));
        sessionStorage.setItem("userData", JSON.stringify(user));
      }
    );
  };

  const formError = errors?.login?.message || errors?.password?.message;

  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="mt-52 text-center w-[400px]">
        <div className="p-4 border border-black rounded-sm">
          {errorMessage && <div className="text-red-800">{errorMessage}</div>}
          <h1 className="text-xl pb-4 font-bold">Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
              <h3 className="pb-2">Электронная почта</h3>
              <input
                name="login"
                {...register("login")}
                placeholder="Введите логин"
                className="border text-center py-1 px-10 border-black rounded-md"
              />
            </div>
            <div className="pb-4">
              <h3 className="pb-2">Пароль</h3>
              <input
                name="password"
                type="password"
                {...register("password")}
                placeholder="Введите пароль"
                className="border text-center py-1 px-10 border-black rounded-md"
              />
            </div>
            <button
              type="submit"
              className="border-2 py-2 px-16 bg-black text-white rounded-md hover:bg-neutral-700"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

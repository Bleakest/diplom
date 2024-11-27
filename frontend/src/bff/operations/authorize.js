import { getUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (authLogin, authPassword) => {
  const user = await getUser();

  if (!user) {
    return {
      error: "Такой пользователь не найден",
      res: null,
    };
  }

  const { id, login, password, role } = user;
  
  if (authPassword !== password) {
    return {
      error: "Неверный пароль",
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id,
      login,
      role,
      session: sessions.create(user),
    },
  };
};

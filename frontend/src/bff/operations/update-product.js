import { setUserRole } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const updateProduct = async (hash, userId, newUserRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  setUserRole(userId, newUserRoleId);

  return {
    error: null,
    res: true,
  };
};
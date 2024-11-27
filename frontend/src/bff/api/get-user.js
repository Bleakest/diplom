import { transformUser } from "../transformers";

export const getUser = async () =>
  fetch("http://localhost:3001/login")
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transformUser(loadedUser));

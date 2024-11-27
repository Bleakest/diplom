export const transformUser = (dbUser) => ({
  id: dbUser._id,
  login: dbUser.login,
  password: dbUser.password,
  role: dbUser.role,
});

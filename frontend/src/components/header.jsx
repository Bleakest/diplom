import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
// import { FaAddressBook } from "react-icons/fa";
import { SelectUserRole } from "../selectors/select-user-role";
import { logout } from "../../../../actions";

function Header() {
  const dispatch = useDispatch();
  const roleId = useSelector(SelectUserRole);

  const onLogout = () => {
    dispatch(logout(session));
    sessionStorage.removeItem("userData");
  };

  return (
    <div className="h-[80px] fixed w-full flex justify-between px-10 py-6 bg-zinc-950	text-white">
      <Link to="/">
        <img width={60} src={logo} />
      </Link>
      {roleId === ROLE.GUEST ? (
        <div className="w-[350px] flex justify-around">
          <div className="flex items-center">
            <Link to="/login" className="hover:text-neutral-400">
              Вход
            </Link>
            <div className="px-1">/</div>
            <Link to="/register" className="hover:text-neutral-400">
              Регистрация
            </Link>
          </div>
        </div>
      ) : (
        <div>aa</div>
      )}
    </div>
  );
}

export default Header;

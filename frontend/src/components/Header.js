import React from "react";
import "../css/header.css";
import { Outlet, Link} from "react-router-dom";
import { createContext } from "react";

export const app_context = createContext();

export const Header = () => {
  return (
    <>
      <div className="nav">
        <div className="conteiner_home">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="container_auth">
          <Link className="link" to="/sign-up">
            Sign-up
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/bowling">Bowling App</Link>
        </li>
        <li>
          <Link to="/user">User App</Link>
        </li>
        <li>
          <Link to="/tictactoe">Tic Tac Toe App</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;

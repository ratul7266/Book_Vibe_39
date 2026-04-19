import { ChevronDown } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <ChevronDown />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-gray-800 text-4xl">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-active bg-green-600 text-white">Sign In</a>
          <a className="btn btn-active bg-cyan-500 text-white">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { useContext, useState } from "react";
import logo from "../assets/garden_logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, setUser, userSignOut } = useContext(AuthContext);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  console.log(user);

  const handleUserLogout = () => {
    userSignOut()
    .then(() => {
      toast.success('User Successfully Logged out');
      setDropDownOpen(false)
    })
    .catch(error => {
      toast.error(error.message)
    })
  }

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/explore-gardeners"}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/browse-tips"}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Browse Tips
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/share-a-garden-tip"}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Share A Garden Tip
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-tips"}
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          My Tips
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="w-11/12 mx-auto">
      <div className="navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost px-0 text-xl">
            <img className="w-32" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end relative">
          {user ? (
            <div
              className="avatar cursor-pointer"
              onClick={() => setDropDownOpen(!dropDownOpen)}
            >
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-outline btn-success hover:text-white"
            >
              Login
            </Link>
          )}

          {dropDownOpen && (
            <ul className="absolute right-0 mt-36 w-48 rounded-md bg-white shadow-lg z-10">
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link to="/settings">Settings</Link>
              </li>
              <li className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Link to={'/'} onClick={handleUserLogout}>Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

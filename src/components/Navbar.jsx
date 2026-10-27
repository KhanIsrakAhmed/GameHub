import React, { useContext } from "react";
import logo from "../assets/ChatGPT Image Oct 22, 2025, 02_20_20 AM.png";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../contexts/AuthContextValue";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => console.error(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "hover:text-blue-600 transition-all duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "hover:text-blue-600 transition-all duration-200"
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "hover:text-blue-600 transition-all duration-200"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600"
              : "hover:text-blue-600 transition-all duration-200"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "hover:text-blue-600 transition-all duration-200"
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-red-100 to-violet-200 shadow-md sticky top-0 z-50 px-5">

      <div className="navbar-start">
     
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-xl">
          <img className="h-16 md:h-30" src={logo} alt="GameHub Logo" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700 text-base gap-6">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <Link to="/profile" title={user.displayName}>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:opacity-90 transition"
                />
              ) : (
                <FaUserCircle className="text-gray-600 size-8" />
              )}
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline border-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <BiLogOut /> Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-sm bg-blue-600 text-white border-none hover:bg-blue-700"
            >
              <FaSignInAlt /> Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-2"
            >
              <MdAssignmentInd /> Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
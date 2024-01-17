import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const NavBar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} width={160} height={32} alt="logo"></img>
      </Link>
      <nav>
        <ul className="flex gap-6 text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* login-SignUp- logOut - Dashboard  */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 border border-richblack-700 py-[8px] px-[12px] rounded-[8px]">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 border border-richblack-700 py-[8px] px-[12px] rounded-[8px]">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 border border-richblack-700 py-[8px] px-[12px] rounded-[8px]"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Successfully");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <buton className="bg-richblack-800 text-richblack-100 border border-richblack-700 py-[8px] px-[12px] rounded-[8px]">
              Dashboard
            </buton>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

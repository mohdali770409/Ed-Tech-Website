import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in Successfully ");
    navigate("/dashboard");
  }
  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <form
        className="flex flex-col mt-6 w-full gap-y-4"
        onSubmit={submitHandler}
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            value={formData.email}
            placeholder="Enter Email Id"
            onChange={changeHandler}
            name="email"
            className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            required
          ></input>
        </label>
        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            name="password"
            placeholder="Enter Password"
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
            required
          ></input>
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="#">
            <p className="text-sm mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] ">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

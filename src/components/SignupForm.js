import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      toast.error("Password do not match");
      return;
    }
    navigate("/dashboard");
    toast.success("Signed up successfully");
  }
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
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
      {/* student instructor tab  */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          Instructor
        </button>
      </div>
      <form className="mt-20 " onSubmit={submitHandler}>
        <div className="flex justify-between mt-4">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
              placeholder="Enter First Name"
            ></input>
          </label>
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
              placeholder="Enter Last Name"
            ></input>
          </label>
        </div>
        <div className="w-full mt-4">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
              placeholder="Enter Email Address"
            ></input>
          </label>
        </div>
        <div className="w-full mt-4 flex justify-between">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
              placeholder="Enter Password"
            ></input>
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword1 ? "text" : "password"}
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={changeHandler}
              className="bg-richblack-800 rounded-[0.85rem] text-richblack-5 w-full p-[12px] border-b border-richblack-100"
              placeholder="Confirm Password"
            ></input>
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] w-full mt-6 ">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

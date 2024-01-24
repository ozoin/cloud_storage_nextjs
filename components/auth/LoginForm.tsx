import { LoginResponseDTO } from "@/api/dto/auth.dto";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import * as Api from "@/api";
import { setCookie } from "nookies";
import Spinner from "../Spinner";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [signup, setSignup] = useState(false);
  const toggleSignup = () => {
    setSignup(!signup);
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (signup) {
        const response = await Api.auth.register(formData);
        const { token } = response;
        setCookie(null, "_token", token, {
          path: "/",
        });
        toast.success("You are signed up!");
        setLoading(false);
        location.href = "/dashboard";
      } else {
        const response = await Api.auth.login({
          email: formData.email,
          password: formData.password,
        });
        const { token } = response;
        setCookie(null, "_token", token, {
          path: "/",
        });
        toast.success("You are logged in!");
        setLoading(false);
        location.href = "/dashboard";
      }
    } catch (error) {
      toast.error("Invalid credentials.  " + error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-[50%]  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
              {signup ? "Sign up to your account" : "Sing in to your account"}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {signup && (
                <div>
                  <label className="block mb-2 text-sm font-medium  dark:text-white">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInput}
                    className=" border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              )}
              <div>
                <label className="block mb-2 text-sm font-medium  dark:text-white">
                  Your email
                </label>
                <input
                  //   type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInput}
                  className="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium  dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInput}
                  className="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              {loading ? (
                <div className="w-full flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-red-500  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {signup ? "Sign up" : "Sign in"}
                </button>
              )}

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {signup
                  ? "Already have an account? "
                  : "Don’t have an account yet? "}
                <a
                  onClick={toggleSignup}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

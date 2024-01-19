import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import * as Api from "@/api";

const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("dashboard");
  const address = "Address";
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const onClickLogout = async () => {
    await Api.auth.logout();
    location.href = "/";
  };
  return (
    <nav className="flex bg-navcolor justify-between text-white shadow-2xl w-full">
      <div className="px-5 xl:px-4 py-4 flex w-full justify-between justify-items-center">
        <div>
          {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
          <h1 className="text-2xl font-bold font-heading hover:cursor-pointer">
            Cloud Storage
          </h1>
        </div>
        <div className=" hidden md:flex items-center">
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li className="flex items-center">
              <a
                className="hover:cursor-pointer hover:text-red-200"
                onClick={() => router.push("/dashboard")}
              >
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="hover:cursor-pointer hover:text-red-200"
                onClick={() => router.push("/dashboard/profile")}
              >
                Profile
              </a>
            </li>
            <li className="flex items-center">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div
          className="flex justify-items-center items-center navbar-burger self-center md:hidden"
          onClick={() => setToggleDrawer((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div
          className={`absolute top-[60px] right-0 left-0 bg-navcolor z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="flex flex-col justify-center b-4 ">
            <li className={"flex items-center p-4"}>Test 1</li>
            <li className={"flex items-center p-4"}>Test 1</li>
            <li className={"flex items-center p-4"}>Test 1</li>
            <li className="flex items-center p-5">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
            {/* {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex items-center p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  router.push(link.link);
                }}
              >
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

"use client";

import { useState } from "react";

import SideNav from "@/app/UI/SideNav/sideNav";
import Dashboard from "./UI/Dashboard/dashboard";

export default function Home() {
  const [toggleNav, setToggleNav] = useState(false);

  function toggleSideNav(): void {
    setToggleNav(!toggleNav);
  }
  return (
    <main
      className={`flex md:min-h-screen sm:w-fit lg:w-full w-fit bg-lightGray `}
    >
      <div
        className={`fixed top-2 left-1 p-4 cursor-pointer ${
          toggleNav ? "z-50" : ""
        }`}
        onClick={toggleSideNav}
      >
        {toggleNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-darkText z-50 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-darkText z-50 md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      <div
        className={`md:hidden fixed inset-0 ${
          toggleNav ? "z-50 bg-navBlue h-full w-2/3" : "hidden"
        }`}
      >
        <div className="flex justify-end items-center p-4">
          <div className="cursor-pointer" onClick={toggleSideNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-darkText"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <SideNav />
      </div>

      <div className="relative hidden md:block flex-none md:w-[244px]">
        <SideNav />
      </div>

      <div className={`md:w-full w-fit ${toggleNav ? "blurred" : ""}`}>
        <Dashboard />
      </div>
    </main>
  );
}

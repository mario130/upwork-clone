import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileNavOpen, setMobileNav] = useState(false);

  return (
    <div className=" border-b border-gray-200 mb-3 sticky top-0 bg-white z-50">
      <div className="container mx-auto">
        <div className="nav-wrapper px-3 mr-1 flex items-center justify-between h-14">
          {/* Left part of mobile nav */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileNav(!isMobileNavOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#656565"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M4 6h18M4 13h18M4 20h18"
                />
              </svg>
            </button>
            <svg
              className="text-complementary ml-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102.4 30"
              width="106"
              height="30"
              role="img"
              aria-hidden="true"
            >
              <path
                fill="#494949"
                d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
              ></path>{" "}
              <path
                fill="#6fda44"
                d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
              ></path>
            </svg>

            {/* DESKTOP NAV */}
            <div className="hidden lg:block mx-16 text-gray-800">
              <ul className="flex space-x-10">
                <li>
                  <Link to="/login"><span className="cursor-pointer">Find Talent</span></Link>
                </li>
                <li>
                  <Link to="/login"><span className="cursor-pointer">Find Work</span></Link>
                </li>
                <li>
                  <span className="cursor-pointer">Why Upwork</span>
                </li>
                <li>
                  <span className="cursor-pointer">Enterprise</span>
                </li>
              </ul>
            </div>
            {/* SEARCH DESKTOP */}
            <div className="p-3 relative my-auto hidden xl:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-5 absolute top-6 left-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                className="w-full rounded-full py-2 px-2 pl-9 focus:outline-none border"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li>
                <Link to="/login">
                  <p>Log In</p>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <span className="bg-primary text-white rounded-lg px-4 py-1">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right part of mobile nav */}
          <div className="lg:hidden">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link to="/login">
                  <p>Log In</p>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <p>Sign Up</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* MOBILE NAV OPEN FULL SCREEN */}
        {isMobileNavOpen ? (
          <div className="fixed w-full h-full lg:hidden bg-white z-50">
            <div className="flex flex-col justify-between">
              <div className="p-3 relative mb-4 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-5 absolute top-6 left-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full rounded-full py-2 px-2 pl-9 focus:outline-none border"
                  placeholder="Search"
                />
              </div>

              <ul className="space-y-8 font-bold p-3 mb-4">
                <li>
                  <Link to="/login"><span className="cursor-pointer">Find Talent</span></Link>
                </li>
                <li>
                  <Link to="/login"><span className="cursor-pointer">Find Work</span></Link>
                </li>
                <li>
                  <span className="cursor-pointer">Why Upwork</span>
                </li>
                <li>
                  <span className="cursor-pointer">Enterprise</span>
                </li>
              </ul>
            </div>

            <div className="mx-3">
              <Link to="/signup">
                <button className="w-full bg-primary text-white font-bold rounded-lg my-4 py-2">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

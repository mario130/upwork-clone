import React, { useState } from "react";
import ListItem from "../freelancer/listItem";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navLists] = useState([
    {
      title: "Find Work",
      list: [
        "Find Work",
        "Saved Jobs",
        "Proposals",
        "Profile",
        "My Stats",
        "Upwork Readiness Test",
        "My Project Dashboard",
      ],
    },
    {
      title: "My Jobs",
      list: ["My Jobs", "All Contracts", "Work Diary"],
    },
    {
      title: "Reports",
      list: [
        "Overview",
        "My Reports",
        "Lifetime Billings by Client",
        "Connects History",
        "Transaction History",
        "Certificate of Earnings",
      ],
    },
  ]);

  return (
    <div className="border-b border-gray-200 mb-3 bg-complementary z-50 text-white">
      <div className="container mx-auto">
        <div className="nav-wrapper px-3 mr-1 flex items-center justify-between h-14">
          {/* hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M4 6h18M4 13h18M4 20h18"
              />
            </svg>
          </button>

          {/* Logo */}
          <svg
            className="text-white ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102.4 30"
            width="106"
            height="30"
            role="img"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M65.4 6.9c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm0 12.9c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8c2.6 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.9-4.8 4.9zM83.4 10.8c-2.3 0-4.2 1.9-4.2 4.2v7.7h-3.5V7.4h3.5v2.4c1-1.5 2.7-2.4 4.5-2.4h1.1v3.4h-1.4zM48.2 7.4L50.8 18l2.9-10.6h3.4l-4.4 15.3h-3.5L46.5 12l-2.7 10.7h-3.5L35.9 7.4h3.4L42.2 18l2.7-10.6zM95 14.4c2.6-1.4 4.1-4.1 4.1-7.1h-3.4c0 2.6-2.1 4.6-4.6 4.6h-.5V0h-3.5v22.7h3.5v-7.2h.4c.4 0 .8.2 1 .5l4.9 6.7h4.2L95 14.4z"
            ></path>{" "}
            <path
              fill="#6fda44"
              d="M27.6 6.9c-3.8 0-6.7 2.5-7.9 6.5-1.8-2.7-3.1-5.7-4-8.8h-4.1v10.6c0 2.1-1.7 3.8-3.8 3.8S4 17.3 4 15.2V4.7H0v10.6c0 4.3 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9v-1.8c.8 1.7 1.8 3.3 2.9 4.8L16.2 30h4.2l1.8-8.5c1.6 1.1 3.5 1.7 5.5 1.7 4.5 0 8.1-3.6 8.1-8.1-.1-4.5-3.7-8.2-8.2-8.2zm0 12.2c-1.7-.1-3.3-.7-4.6-1.8l.3-1.6v-.1c.3-1.7 1.3-4.6 4.2-4.6 2.2-.1 4 1.7 4.1 3.9.1 2.2-1.7 4-3.9 4.1l-.1.1z"
            ></path>
          </svg>

          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* nav mobile open */}
        {isOpen ? (
          <div className="sticky top-0 bottom-0 w-full h-full lg:hidden bg-complementary z-50">
            {/* search */}
            <div className="p-3 relative mt-2">
              <div className="container mx-auto border-b border-navBorder pb-4">
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
                  className="w-full rounded-full py-2 px-2 pl-9 focus:outline-none bg-twilight placeholder-white"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="px-3">
              <div className="flex justify-between items-center border-b border-navBorder">
                {/* user icon */}
                <div className="flex container mx-auto items-center pb-3">
                  <img
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                    width="40"
                    className="mr-2"
                    alt=""
                  />
                  <h4 className="text-sm">Mario Magdy</h4>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:hidden mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* lists */}
            <div className="px-3">
              {navLists.map((list, i) => (
                <ListItem list={list} i={i} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;

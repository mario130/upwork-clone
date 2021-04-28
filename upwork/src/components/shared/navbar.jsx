import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../../store/actions/logoutAction";
import axios from 'axios';
import { localBackend } from './../../services/basedUrl';

const Nav = (props) => {
  const dispatch = useDispatch()
  const logoutUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return dispatch(logout())
  }
  const isFreelancer = localStorage.getItem("userType") === "freelancer";
  const [isOpen, setIsOpen] = useState(false);
  const [navLists] = useState([
    {
      title: "Find Work",
      list: [
        {
          title: "Find Work",
          link: "/freelancer"
        },
        {
          title: "Proposals",
          link: "/proposals"
        },
        {
          title: "Profile",
          link: "/freelancer-profile"
        },
      ],
    },
    {
      title: "My Jobs",
      list: [
        {
          title: "My Jobs",
          link: "/proposals"
        },
        {
          title: "All Contracts",
          link: "/proposals"
        },
      ],
    },
    {
      title: "Messages",
    },
    {
      title: "Help",
      icon: (
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Notifications",
      icon: (
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
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
    },
    {
      title: "Direct Contracts",
      icon: (
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Settings",
      rightIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Log out",
      rightIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
    },
  ]);

  const [isNotificationsOpen, setNotifications] = useState(false)
  const [notifications, setNotificationsData] = useState([]);
  const [fullName, setFullName] = useState('');

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("user");
  const fullNameFromLocalStorage = localStorage.getItem("fullName");

  useEffect(()=>{
    if (isFreelancer) {
      axios
        .get(
          `${localBackend}/profile/get-all-notifications/${email}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        }
        )
        .then((data) => {
          console.log(data.data.notifications);
          setNotificationsData(data.data.notifications);
        }).catch((err) => {
          console.log(err)
        })
    }
    setFullName(fullNameFromLocalStorage)
  }, [email, token, isFreelancer, fullNameFromLocalStorage])


  return (
    <div className="lg:p-2 border-b border-gray-200 bg-complementary z-50 text-white">
      <div className="container mx-auto max-w-5xl">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M4 6h18M4 13h18M4 20h18"
              />
            </svg>
          </button>

      {/* Logo */}
      {isFreelancer
      ? <Link to="/freelancer">
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
        </Link>
        : 
        <Link to="/client/home">
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
        </Link>
      }

          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 lg:hidden"
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

          {/* desktop search */}
          <div className="flex-1 mx-3 p-3 relative mt-2 hidden lg:block max-w-xs">
            <div className="container mx-auto pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-5 absolute top-6 left-5 text-white text-sm"
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

          {/* desktop links */}
          {props.variation === 'freelancer'
            ? <div className="hidden lg:block">
              <ul className="flex space-x-5">
                <li className="cursor-pointer text-light font-medium">
                  <Link to="/freelancer">
                    Find Work
                </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/proposals">
                    My Jobs
                </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/freelancer-profile">
                    My Profile
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={logoutUser}>Logout</li>
              </ul>
            </div>
            : <div className="hidden lg:block">
              <ul className="flex space-x-5">
                <li className="cursor-pointer text-light font-medium">
                  <Link to="/client/job-post">
                    Post job
              </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/job-list">
                    My Jobs
              </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/active-jobs">
                    Active jobs
              </Link>
                </li>
                <li className="cursor-pointer" onClick={logoutUser}>Logout</li>
              </ul>
            </div>}

          {/* desktop icons */}
          {isFreelancer &&
            <ul className="space-x-4 hidden lg:flex">
              <button onClick={()=>setNotifications(!isNotificationsOpen)} className="flex text-sm rounded-full focus:outline-none">
                <li className="relative">
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  {notifications.length > 0 
                  ? <span className="absolute top-0 right-0 bg-red-400 w-2 h-2 rounded-full"></span>
                  : null}
                </li>
              </button>
              <div className="ml-3 relative">
                <div>
                </div>
                <div className={`origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 shadow-categ ${isNotificationsOpen ? "" : "hidden"}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {notifications.map(noti => (
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href={noti.jobLink}
                    >
                      <b>{noti.message}</b>
                      <br />
                      <small className="text-light"><b>{noti.date}</b></small>
                    </a>
                  ))}
                  {notifications.length === 0 && <b className="block px-4 py-2 text-sm text-gray-700">No new notifications.</b>}
                </div>
              </div>

            </ul>
          }

          <div className="hidden lg:block">
            <img
              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              width="40"
              className="mr-2"
              alt=""
            />
          </div>
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
                  <h4 className="text-sm">{fullName}</h4>
                </div>
              </div>
            </div>

            {/* lists */}
            <div className="px-3">
              {navLists.map((list, i) => (
                <ListItem list={list} key={i} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;

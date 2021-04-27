/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <div className="py-2 bg-white text-darkText">
    <ul className="px-4 md:px-6 flex space-x-6 font-bold container mx-auto max-w-5xl">
      <Link to="/job-list">
        <li className="cursor-pointer" className={`${props.activeLink === "jobs" ? "text-primary" : ""}`}>My Jobs</li>
      </Link>
      <Link to="/active-jobs">
        <li className="cursor-pointer" className={`${props.activeLink === "active-jobs" ? "text-primary" : ""}`}>Active contracts</li>
      </Link>
      <Link to="/client/job-post">
        <li className="cursor-pointer" className={`${props.activeLink === "post-job" ? "text-primary" : ""}`}>Post a Job</li>
      </Link>
    </ul>
  </div>
)

export default Navbar;
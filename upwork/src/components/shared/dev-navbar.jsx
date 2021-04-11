import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [links] = useState([
    { title: "Guest home", link: "/" },
    { title: "Frealancer home", link: "/freelancer" },
    { title: "Job", link: "/job" },
    { title: "F-profile", link: "/freelancer-profile" },
    { title: "profile-step1", link: "/ProfileStep1" }
  ]);

  return (
    <div className="my-1">
      <ul className="text-center flex flex-wrap">
        {links.map((link, i) => (
          <li className="my-1 mx-1">
            <NavLink to={link.link} exact key={i}>
              <span className="bg-complementary text-white px-3 py-1 rounded-full">{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

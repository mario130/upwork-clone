import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [links] = useState([
    { title: "Guest homepage", link: "/" },
    { title: "Frealancer homepage", link: "/freelancer" },
    { title: "Job", link: "/job" }
  ]);

  return (
    <div className="">
      <ul className="text-center">
        {links.map((link, i) => (
          <li className="my-2">
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

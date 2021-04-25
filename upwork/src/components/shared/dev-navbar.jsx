import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [links] = useState([
    { title: "Guest home", link: "/" },
    { title: "Frealancer home", link: "/freelancer" },
    { title: "Job", link: "/job/6078554ae48496a93f483c0d" },
    { title: "F-profile", link: "/freelancer-profile" },
    { title: "Proposal", link: "/proposal/6078554ae48496a93f483c0d" },
    { title: "Proposals", link: "/proposals" },
    { title: "Applicants", link: "/applicants" },
    { title: "JobsList", link: "/job-list" },
    { title: "ActiveJobs", link: "/active-jobs" },
    { title: "Contract", link: "/contract/6078554ae48496a93f483c0d" },
    { title: "clientHome", link: "/client/home" },
    { title: "job post", link: "/client/job-post" },
    { title: "signup", link: "/signup" },
    { title: "Signup details", link: "/signup/details" },
    { title: "login", link: "/login" },
    { title: "create-profile", link: "/freelancer/create-profile/step1" },
    // { title: "profile-step4", link: "/ProfileStep4" },
    // { title: "profile-step5", link: "/ProfileStep5" },
    // { title: "profile-step7", link: "/ProfileStep7" },
    // { title: "profile-step8", link: "/ProfileStep8" },
    // { title: "profile-step10", link: "/ProfileStep10" },
    // { title: "profile-step11", link: "/ProfileStep11" },
    // { title: "profile-step12", link: "/ProfileStep12" },
    // { title: "profile-step1", link: "/ProfileStep1" }, // duplicate
    // { title: "profile-step2", link: "/ProfileStep2" }, // verification email
    // { title: "profile-step6", link: "/ProfileStep6" }, // skills
    // { title: "profile-step9", link: "/ProfileStep9" }, // hourly rate



  ]);

  return (
    <div className="my-1">
      <ul className="text-center flex flex-wrap">
        {links.map((link, i) => (
          <li className="my-1 mx-1">
            <NavLink to={link.link} exact key={i}>
              <span className="bg-complementary opacity-90 hover:opacity-100 transition-all text-white px-3 py-1 rounded-full">{link.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { localBackend } from "../../services/basedUrl";

const Profile = () => {
  const [freelancer] = useState({
    description:
      "Developer with 10+ years of experience. Have been working for different areas from enterprise, web & mobile to game development. Looking for a project with clear requirements and product goals, high technology level, responsibility for results",
    profiles: ["Front End Development", "Full Stack Development"],
    earnings: {
      total: "3k",
      jobs: 21,
      totalHours: 441,
    },
    pastJobs: [
      {
        type: "Hourly",
        title:
          "Full Stack Dev Support - Native App & Backend .Net, XAML, MONGO DB",
        rating: 5,
        feedback:
          "He came up to speed very quickly on project. Unfortunately out project is approaching funding, and we do not have continuous work for he at this point. He decided to jump on another project until we have a more steady workflow and team for him.",
        earned: 2370,
        hourlyRate: 30,
        totalHours: 79,
        // todo: add date range
      },
      {
        type: "Fixed",
        title: "VPN Mobile App Developer",
        rating: 4.4,
        feedback:
          "He did a great job creating the App for us from scratch. We can't wait till we work with him again. Excellent communications and adherence to timelines",
        earned: 500,
      },
    ],
    portfolio: [
      {
        title: "website 1",
        imageUrl: "http://placehold.it/600/200",
      },
      {
        title: "website 2",
        imageUrl: "http://placehold.it/600/200",
      },
      {
        title: "website 3",
        imageUrl: "http://placehold.it/600/200",
      },
    ],
    skills: ["JavaScript", "HTML", "CSS"],
    availability: {
      state: "Available",
      limit: "Less than 30 hrs/week",
    },
    languages: [
      {
        language: "English",
        level: "Fluent",
      },
      {
        language: "Arabic",
        level: "Native or Bilingual",
      },
      {
        language: "Russian",
        level: "Intermediate",
      },
    ],
    education: [
      {
        title:
          'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
        speciality:
          "Master of Computer Applications (M.C.A.), Applied Mathematics",
        duration: "2008-2014",
      },
    ],
    employmentHistory: [
      {
        title: "Lead Developer / Product Manager | Huboxt",
        duration: "July 2020 - Present",
        url: "https://huboxt.com",
      },
      {
        title: "Senior Back End Developer | Atelier Technology",
        duration: "September 2018 - February 2020",
        url: "https://atelier.technology/",
      },
    ],
  });
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {

    axios
      .get(
        `${localBackend}/profile/freelance-profile`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }
      )
      .then((data) => {
        console.log(data);
        setProfile(data.data);
        console.log(profile)
      })
  }, [token]);

  return (
    <div className="bg-gray-100 mt-4 md:mx-12 lg:container lg:mx-auto lg:max-w-5xl lg:grid lg:grid-cols-3">
      <div className="flex p-4 bg-white border md:rounded-lg lg:rounded-none lg:rounded-t-lg mb-3 lg:mb-0 lg:col-start-1 col-span-3">
        <div className="relative">
          <img
            className="mr-4"
            width="80"
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt=""
          />
          <div className="bg-primary w-5 h-5 absolute right-4 bottom-7 rounded-full border-4 border-white"></div>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl flex items-center">
            {profile.user && profile.user[0].userName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </h2>

          <h4 className="flex items-center font-light text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Asyut, Egypt
          </h4>

          <h4 className="text-sm">11:54am local time</h4>

          <div className="mt-6 flex">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              aria-hidden="true"
              role="img"
              className="w-4 mr-1"
            >
              <polygon
                points="7 0 0 0 0 9.21 7 14 14 9.21 14 0 7 0"
                fill="#1caf9d"
              ></polygon>
            </svg>
            <h4 className="uppercase text-complementary font-extrabold tracking-wide text-xs">
              rising talent
            </h4>
          </div>
        </div>
      </div>

      <div className="lg:border-l lg:border-b lg:bg-white lg:rounded-bl-lg lg:mb-3">
        {/* DESKTOP PROFILES */}
        <div className="hidden lg:block lg:border-b">
          <h2 className="px-6 pt-6 pb-3 font-extrabold text-lg">
            View profile
          </h2>
          <ul>
            {/* <li className="px-6 py-1 my-1 font-bold text-darkText text-sm">Front End Development</li> */}
            {freelancer.profiles.map((profile, i) => (
              <li className="px-6 py-1 my-1 font-bold text-darkText text-sm border-l-4 border-transparent" key={i}>
                {profile}
              </li>
            ))}
            <li className="px-6 py-1 my-1 font-bold text-darkText text-sm border-l-4 border-primary flex justify-between items-center">
              <h5>All Work</h5>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/* EARNINGS */}
        <div className="flex p-4 lg:p-6 bg-white md:rounded-lg lg:rounded-none mb-3 lg:mb-0 border lg:border-0 lg:border-b">
          <div className="w-1/3">
            <h4 className="font-extrabold">${freelancer.earnings.total}</h4>
            <p className="text-sm">Total Earnings</p>
          </div>
          <div className="w-1/3">
            <h4 className="font-extrabold">{freelancer.earnings.jobs}</h4>
            <p className="text-sm">Total Jobs</p>
          </div>
          <div className="w-1/3">
            <h4 className="font-extrabold">{freelancer.earnings.totalHours}</h4>
            <p className="text-sm">Total Hours</p>
          </div>
        </div>

        {/* FREELANCER INFO DESKTOP!! */}
        <div className="bg-white hidden lg:block">
          <div className="p-6 mb-4">
            <div className="flex items-center mb-2">
              <h2 className="font-extrabold">Availability</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>

            <div className="text-sm mb-4">
              <h5 className="font-bold">{freelancer.availability.state}</h5>
              <p>{freelancer.availability.limit}</p>
            </div>

            <div className="mb-2">
              <div className="flex items-center mb-3">
                <h2 className="font-extrabold">Languages</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 border rounded-full "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 border rounded-full p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>

            <div className="text-sm mb-4">
              <ul className="space-y-1">
                {freelancer.languages.map((lang, i) => (
                  <li key={i}>
                    <span className="font-bold">{lang.language}:</span>{" "}
                    <span className="text-gray-500">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-2">
              <div className="flex items-center mb-2">
                <h2 className="font-extrabold">Education</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 border rounded-full "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="flex items-start mb-4 text-sm">
                <div>
                  {freelancer.education.map((edu, i) => (
                    <div key={i}>
                      <h2 className="font-extrabold">{edu.title}</h2>
                      <p>{edu.speciality}</p>
                      <p className="text-gray-500">{edu.duration}</p>
                    </div>
                  ))}
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 border rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg> */}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 border rounded-full p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 border rounded-full p-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main profile */}
      <div className="bg-white border md:rounded-lg mb-3 lg:col-start-2 lg:col-span-2 lg:rounded-none lg:rounded-br-lg lg:border-t-0">
        <div className="">
          {/* View profile MOBILE */}
          <div className="p-4 flex lg:hidden">
            <h2 className="font-extrabold">View profile</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 border rounded-full "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 border rounded-full p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>

          <div className="px-4 lg:hidden">
            <select
              name="profile"
              id="profile"
              className="px-4 py-1 w-full border border-gray-200 rounded-lg bg-white text-sm"
            >
              <option value="all">All Work</option>
              {freelancer.profiles.map((profile, i) => (
                <option key={i} value={profile}>{profile}</option>
              ))}
            </select>
          </div>

          <div className="lg:flex lg:justify-between">
            <div className="px-4 lg:px-6 flex mt-6 items-center">
              <h2 className="font-extrabold text-lg">Full Stack Developer</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>

            <div className="px-4 lg:px-6 flex mt-4 items-center">
              <h3 className="font-bold">$60.00/hr</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>

          <div className="p-4 lg:p-6 flex border-b border-gray-200">
            <p className="text-sm flex-1 mb-2">{freelancer.description}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 border rounded-full p-1 flex-3 mt-5 lg:mt-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>

          {/* work history */}
          <div className="mb-4">
            <div className="p-4 lg:p-6 flex items-center mb-4 lg:mb-0">
              <h4 className="font-extrabold">Work History</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>

            <ul className="px-4 lg:px-6 pt-4 mb-4 flex text-primary font-bold border-b border-gray-200">
              <li className="border-b-2 border-primary text-sm">
                Completed jobs (21)
              </li>
            </ul>

            {freelancer.pastJobs.map((job, i) => (
              <div className="p-4 lg:p-6 border-b border-gray-200" key={i}>
                <h4 className="text-primary text-sm font-bold">{job.title}</h4>

                {/* STARS */}
                <div className="flex items-center">
                  {Array.apply(null, { length: Math.floor(job.rating) }).map(
                    (e, i) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        key={i}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )
                  )}
                  <h5 className="font-bold text-sm ml-2">
                    {job.rating.toFixed(2)}
                  </h5>
                </div>

                <h5 className="text-sm italic mt-1">"{job.feedback}"</h5>

                <div className="flex mt-2">
                  <h5 className="font-bold text-sm w-1/3">${job.earned}</h5>

                  {job.type.toLowerCase() === "hourly" ? (
                    <div className="w-2/3 flex">
                      <h5 className="w-1/2 text-sm">
                        <span className="font-bold">${job.hourlyRate}</span> /hr
                      </h5>
                      <h5 className="w-1/2 text-sm">{job.totalHours} hours</h5>
                    </div>
                  ) : (
                    <h5 className="w-1/2 text-sm">Fixed price</h5>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio */}
          <div className="p-4 lg:p-6 border-b border-gray-200 mb-4">
            <div className="flex items-center mb-4">
              <h2 className="font-extrabold">Portfolio (3)</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>

            {/* LOOP ON PORTFOLIO */}
            <div className="flex mb-4 mt-2 flex-wrap box-border">
              {freelancer.portfolio.map((proj, i) => (
                <div className="w-1/2 px-2 py-2" key={i}>
                  <img src={proj.imageUrl} alt="" />
                  <h5 className="text-primary font-bold mt-1">{proj.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="p-4 lg:p-6 mb-4">
            <div className="flex items-center mb-4">
              <h2 className="font-extrabold">Skills</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <div className="space-x-2">
              {freelancer.skills.map((skill, i) => (
                <span className="px-2 py-1 text-darkText bg-gray-100 rounded-full text-sm" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FREELANCER INFO MOBILE!! */}
      <div className="lg:hidden">
        <div className="bg-white p-4 mb-4 border md:rounded-lg">
          <div className="flex items-center mb-2">
            <h2 className="font-extrabold">Availability</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 border rounded-full p-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>

          <div className="text-sm mb-4">
            <h5 className="font-bold">{freelancer.availability.state}</h5>
            <p>{freelancer.availability.limit}</p>
          </div>

          <div className="mb-2">
            <div className="flex items-center mb-3">
              <h2 className="font-extrabold">Languages</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full p-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
          </div>

          <div className="text-sm mb-4">
            <ul className="space-y-1">
              {freelancer.languages.map((lang, i) => (
                <li key={i}>
                  <span className="font-bold">{lang.language}:</span>{" "}
                  <span className="text-gray-500">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-2">
            <div className="flex items-center mb-2">
              <h2 className="font-extrabold">Education</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 border rounded-full "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="flex items-start mb-4 text-sm">
              <div>
                {freelancer.education.map((edu, i) => (
                  <div key={i}>
                    <h2 className="font-extrabold">{edu.title}</h2>
                    <p>{edu.speciality}</p>
                    <p className="text-gray-500">{edu.duration}</p>
                  </div>
                ))}
              </div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 border rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg> */}
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 border rounded-full p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 border rounded-full p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employment history */}
      <div className="bg-white lg:col-start-1 lg:col-span-3 border mb-6 md:rounded-lg">
        <div className="">
          <div className="p-4 lg:p-6 flex justify-between border-b border-gray-200 items-center">
            <h3 className="font-bold text-lg">Employment history</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 border rounded-full "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>

          <div className="p-4 lg:p-6 text-sm">
            {freelancer.employmentHistory.map((job, i) => (
              <div className="mb-3" key={i}>
                <div className="flex justify-between">
                  <h4 className="font-bold">{job.title}</h4>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-3 border rounded-full p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-3 border rounded-full p-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-500">{job.duration}</p>
                <p className="text-primary font-bold">{job.url}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

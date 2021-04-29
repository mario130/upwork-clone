import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Spinner from '../shared/spinner';
import { localBackend } from '../../services/basedUrl';

const Main = () => {
  const [jobs, setJobs] = useState([])
  const [searchedJobs, setSearchedJobs] = useState([])
  const [activeFilterSkill, setActiveFilterSkill] = useState('')
  const [skills] = useState(['HTML', "CSS", 'Javascript', "React", "Angular", "NodeJS", "Express", 'MongoDB'])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `${localBackend}/jobs/getAllJobs`
      )
      .then((data) => {
        setJobs(data.data);
        setSearchedJobs(data.data);
        setLoading(false)
      });
  }, []);

  const handelSearch = (event) => {
    const result = jobs.filter((job) => {
      return job.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    })
    setSearchedJobs(result);
  }

  const filterBySkill = (skill) => {
    if (skill === "") {
      setSearchedJobs(jobs)
      setActiveFilterSkill("")
      return
    }
    const result = jobs.filter(job => {
      return job.skills.includes(skill)
    })
    setSearchedJobs(result)
    setActiveFilterSkill(skill)
  }

  const mobileFilter = (ev) => {
    filterBySkill(ev.target.value)
  }

  return (
    <main className="bg-bodyGray h-full container mx-auto  max-w-5xl sm:px-10 lg:grid lg:grid-cols-10 lg:mt-5">
      <div className="lg:hidden mb-4 sm:mb-8">
        <ul className="bg-white rounded-lg sm:mt-4">
          <Link to="/proposals">
            <li className="p-4 border-b border-gray-200 flex justify-between">
                <button className="font-bold text-gray-800">My Proposals</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
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
          </Link>
          <Link to="/freelancer-profile">
            <li className="p-4 border-b border-gray-200 flex justify-between">
              <button className="font-bold text-gray-800">My Profile</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
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
          </Link>
        </ul>
      </div>

      {/* LEFT AREA!!! */}
      <div className="hidden lg:block lg:col-start-1 lg:col-span-2">
        <h3 className="font-bold text-2xl mb-12">Find Work</h3>
        <ul className="space-y-1 mb-8">
          {/* <li className="font-bold text-black px-2 py-1 border-l-4 border-primary cursor-default">
            My Feed
          </li>
          <li className="font-bold text-gray-700 px-2 py-1 cursor-default">Best Matches</li>
          <li className="font-bold text-gray-700 px-2 py-1 cursor-default">Recommended</li>
          <li className="font-bold text-gray-700 px-2 py-1 cursor-default">Custom search 1</li>
          <li className="font-bold text-gray-700 px-2 py-1 cursor-default">Custom search 2</li>
          <li className="font-bold text-gray-700 px-2 py-1 cursor-default">Custom search 3</li> */}
        </ul>

        {/* SKILLS */}
        <h3 className="font-bold text-black px-2 py-1">Filter by skill</h3>
        <ul className="space-y-1">
          <li className="text-gray-600 font-bold ml-2">
            <span className={`cursor-pointer `} onClick={() => filterBySkill('')}>Remove filter</span>
          </li>
          {skills.map((skill, i) => (
            <li className="text-primary font-bold ml-2" key={i}>
              <span className={`cursor-pointer ${activeFilterSkill === skill ? "text-darkGreen" : ""}`} onClick={() => filterBySkill(skill)}>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CENTER */}
      <div className="lg:col-start-3 lg:col-span-6">
        {/* desktop main top search */}
        <div className="hidden lg:block my-2">
          <div className="flex">
            <input
              type="text"
              className="w-full px-5 py-1 border-gray-200 rounded-l-md"
              placeholder="Search for jobs"
              onChange={handelSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-8 bg-primary text-white p-1 rounded-r-md"
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
          <button className="py-1 text-primary font-bold">
            Advanced Search
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-t-md mb-4">
          {/* job feed */}
          <ul className="lg:hidden flex mt-3 ml-3 p-2 space-x-10 border-b border-gray-200">
            <li className="cursor-pointer font-bold text-sm text-primary">My Feed</li>
            <li className="cursor-pointer font-bold text-sm text-gray-800">Best Matches</li>
            <li className="cursor-pointer font-bold text-sm text-gray-800">Recommended</li>
          </ul>

          <div className="lg:hidden p-5 border-b border-gray-200">
            <h5 className="mb-3 font-bold text-sm">Filter:</h5>
            <select
              name="view"
              id="view"
              className="w-full bg-white border p-2 rounded-lg"
              onChange={(ev)=>mobileFilter(ev)}
            >
              <option value="">No filter</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </div>

          <div className="hidden lg:flex p-5 justify-between items-center border-b border-gray-200">
            <h2 className="font-bold text-xl">My Feed</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 p-2 rounded-full border"
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

          {jobs.length === 0 && loading ? <div className="text-center my-14">
            <Spinner />
          </div> : null}
          {/* IF NO JOBS */}
          {searchedJobs.length === 0
            ? loading ? null
              : <div>
                <div className="text-center my-6 font-bold">
                  No jobs found
              </div>
              </div>
            : null}
          {searchedJobs.map((job, i) => (
            <div className="p-5 border-b border-gray-200" key={i}>
              {/* title */}
              <div className="flex justify-between space-x-4">
                <div>
                  <h2 className="font-bold">
                    <Link to={"job/" + job._id}>
                      {job.title}
                    </Link>
                  </h2>
                  <p className="text-sm font-bold text-gray-500">{job.type}</p>
                </div>
                {/* icons */}
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 p-2 border rounded-full text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 p-2 border rounded-full text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* job info flex */}
              <div className="flex space-x-8 my-4">
                {job.hours ? (
                  <div className="text-sm w-32">
                    <p className="font-bold">{job.hours}</p>
                    <p className="font-light text-gray-700">Hours Needed</p>
                  </div>
                ) : (
                  <div className="text-sm w-32">
                    <p className="font-bold">${job.budget}</p>
                    <p className="font-light text-gray-700">Budget</p>
                  </div>
                )}

                {job.duration ? (
                  <div className="text-sm w-32">
                    <p className="font-bold">{job.duration}</p>
                    <p className="font-light text-gray-700">Duration</p>
                  </div>
                ) : null}

                <div className="text-sm w-32">
                  <p className="font-bold">{job.experience}</p>
                  <p className="font-light text-gray-700">Experience</p>
                </div>
              </div>

              <p className="text-sm font-medium mb-4">{job.description}</p>

              <div className="flex flex-wrap text-sm mb-4">
                {job?.skills.map((skill, i) => (
                  <div className="" key={i}>
                    <span onClick={() => filterBySkill(skill)} className="px-2 py-1 mb-2 block bg-gray-100 rounded-full mr-2 font-semibold text-gray-800 cursor-pointer">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* past payments */}
              <div className="flex space-x-7 items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="#14bff4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <p className="font-bold text-gray-500">Payment verified</p>
                </div>

                {/* <div className="font-light text-gray-500 text-sm">
                  <span className="font-bold text-black">${job.client?.spent ? job.client.spent : 400}+</span>{" "}
                  spent
                </div> */}
              </div>
            </div>
          ))}

          {/* {searchedJobs.length !== 0 ? <div className="text-center bg-white p-4">
            <button className="px-6 py-2 border rounded-full text-primary font-bold">
              Load more
            </button>
          </div> : null} */}
        </div>
      </div>

      {/* RIGHT AREA!!! */}
      <div className="hidden lg:block lg:col-start-9 lg:col-span-2 pl-6 mt-20">
        <div className="flex items-center mt-2">
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            width="30"
            className="mr-2"
            alt=""
          />
          <h4 className="text-md font-bold flex-1">My Profile</h4>
        </div>
        <div className="flex items-center text-primary mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <Link to="/freelancer-profile">
            <p className="text-sm font-bold ">View Profile</p>
          </Link>
        </div>

        <div>
          <h3 className="mt-6 font-bold text-sm">Visibility</h3>
          <div className="flex justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              <h5>Public</h5>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-2 bg-white rounded-full" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="mt-6 font-bold text-sm">Availability</h3>
          <div className="flex justify-between mt-1">
            <div className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h5>As needed -<br /> Open to offers</h5>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 p-2 bg-white rounded-full" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </div>
        <div>
          {/* <Link to="/proposals"><h3 className="mt-6 font-bold text-lg mb-2">Proposals</h3> </Link>
          <ul className="space-y-2">
            <Link to="/proposals">
              <li className="text-primary font-bold">1 active candidacy</li>
            </Link>
            <Link to="/proposals">
              <li className="text-primary font-bold">4 submitted proposals</li>
            </Link>
          </ul> */}
          <Link to="/proposals" className="flex text-primary mt-6 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-sm font-bold">Proposals</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;

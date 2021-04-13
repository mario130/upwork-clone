import React, { useState } from "react";

const Main = () => {
  const [jobs] = useState([
    {
      title: "Full stack developer needed for urgent project",
      description: "Contact for more info",
      type: "Hourly",
      hours: "30+ hrs/week",
      duration: "More than 6 months",
      experience: "Expert",
      paymentVerified: true,
      spent: "90k",
    },
    {
      title:
        "Front end developer needed to convert landing page design to Netlify",
      description: "Contact for more info",
      type: "Fixed-price",
      budget: "1k",
      experience: "Intermediate",
      paymentVerified: false,
      spent: "0",
    },
  ]);

  return (
    <main className="bg-bodyGray h-full container mx-auto  max-w-5xl sm:px-10 lg:grid lg:grid-cols-10 lg:mt-5">
      <div className="lg:hidden mb-4 sm:mb-8">
        <ul className="bg-white rounded-lg sm:mt-4">
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
        </ul>
      </div>

      {/* LEFT AREA!!! */}
      <div className="hidden lg:block lg:col-start-1 lg:col-span-2">
        <h3 className="font-bold text-2xl mb-12">Find Work</h3>
        <ul className="space-y-1 mb-8">
          <li className="font-bold text-black px-2 py-1 border-l-4 border-primary">
            My Feed
          </li>
          <li className="font-bold text-gray-700 px-2 py-1">Best Matches</li>
          <li className="font-bold text-gray-700 px-2 py-1">Recommended</li>
          <li className="font-bold text-gray-700 px-2 py-1">Custom search 1</li>
          <li className="font-bold text-gray-700 px-2 py-1">Custom search 2</li>
          <li className="font-bold text-gray-700 px-2 py-1">Custom search 3</li>
        </ul>

        <h3 className="font-bold text-black px-2 py-1">Recent Searches</h3>
        <ul className="space-y-1">
          <li className="text-primary font-bold ml-2">Search 1</li>
          <li className="text-primary font-bold ml-2">Search 2</li>
          <li className="text-primary font-bold ml-2">Search 3</li>
          <li className="text-primary font-bold ml-2">Search 4</li>
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

        <div className="bg-white border border-gray-200 rounded-t-md">
          {/* job feed */}
          <ul className="lg:hidden flex mt-3 ml-3 p-2 space-x-10 border-b border-gray-200">
            <li className="font-bold text-sm text-primary">My Feed</li>
            <li className="font-bold text-sm text-gray-800">Best Matches</li>
            <li className="font-bold text-sm text-gray-800">Recommended</li>
          </ul>

          <div className="lg:hidden p-5 border-b border-gray-200">
            <h5 className="mb-3 font-bold text-sm">View:</h5>
            <select
              name="view"
              id="view"
              className="w-full bg-white border p-2 rounded-lg"
            >
              <option value="default">My Feed</option>
              <option value="search-1">Search 1</option>
              <option value="search-2">Search 2</option>
              <option value="search-3">Search 3</option>
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

          {jobs.map((job) => (
            <div className="p-5 border-b border-gray-200">
              {/* title */}
              <div className="flex justify-between space-x-4">
                <div>
                  <h2 className="font-bold">{job.title}</h2>
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

              {/* past payments */}
              <div className="flex space-x-7 items-center">
                {job.paymentVerified ? (
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
                ) : null}

                <div className="font-light text-gray-500 text-sm">
                  <span className="font-bold text-black">${job.spent}+</span>{" "}
                  spent
                </div>
              </div>
            </div>
          ))}

          <div className="text-center bg-white p-4">
            <button className="px-6 py-2 border rounded-full text-primary font-bold">
              Load more
            </button>
          </div>
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
          <p className="text-sm font-bold ">View Profile</p>
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
          <h3 className="mt-6 font-bold text-lg mb-2">Proposals</h3>
          <ul className="space-y-2">
            <li className="text-primary font-bold">1 active candidacy</li>
            <li className="text-primary font-bold">4 submitted proposals</li>
            <li className="text-primary font-bold">120 available connects</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;

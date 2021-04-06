import React, { useState } from "react";

const Main = () => {
  const [jobs] = useState([
    {
      title: 'Full stack developer needed for urgent project',
      description: 'Contact for more info',
      type: 'Hourly',
      hours: '30+ hrs/week',
      duration: 'More than 6 months',
      experience: 'Expert',
      paymentVerified: true,
      spent: '90k',
    },
    {
      title: 'Front end developer needed to convert landing page design to Netlify',
      description: 'Contact for more info',
      type: 'Fixed-price',
      budget: '1k',
      experience: 'Intermediate',
      paymentVerified: false,
      spent: '0',
    },
  ])

  return(
  <main className="lg:hidden bg-bodyGray h-full container mx-auto">
    <div className="mb-4 sm:mb-8">
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

    <div className="bg-white border border-gray-200">
      {/* job feed */}
      <ul className="flex mt-3 ml-3 p-2 space-x-10 border-b border-gray-200">
        <li className="font-bold text-sm text-primary">My Feed</li>
        <li className="font-bold text-sm text-gray-800">Best Matches</li>
        <li className="font-bold text-sm text-gray-800">Recommended</li>
      </ul>

      <div className="p-5 border-b border-gray-200">
        <h5 className="mb-3 font-bold text-sm">View:</h5>
        <select name="view" id="view" className="w-full bg-white border p-2 rounded-lg">
          <option value="default">My Feed</option>
          <option value="search-1">Search 1</option>
          <option value="search-2">Search 2</option>
          <option value="search-3">Search 3</option>
        </select>
      </div>

      {jobs.map(job=> (
        <div className="p-5 border-b border-gray-200">
          {/* title */}
          <div className="flex justify-between space-x-4">
            <div>
              <h2 className="font-bold">{job.title}</h2>
              <p className="text-sm font-bold text-gray-500">{job.type}</p>
            </div>
            {/* icons */}
            <div className="flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 border rounded-full text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 border rounded-full text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          {/* job info flex */}
          <div className="flex space-x-8 my-4">
            {job.hours
            ? 
            <div className="text-sm w-32">
              <p className="font-bold">{job.hours}</p> 
              <p className="font-light text-gray-700">Hours Needed</p>
            </div>
            : 
            <div className="text-sm w-32">
              <p className="font-bold">${job.budget}</p> 
              <p className="font-light text-gray-700">Budget</p>
            </div>
            }

            {job.duration
            ?
            <div className="text-sm w-32">
              <p className="font-bold">{job.duration}</p> 
              <p className="font-light text-gray-700">Duration</p>
            </div>
            :null}

            <div className="text-sm w-32">
            <p className="font-bold">{job.experience}</p> 
              <p className="font-light text-gray-700">Experience</p>
            </div>
          </div>

            <p className="text-sm font-medium mb-4">{job.description}</p>

            {/* past payments */}
            <div className="flex space-x-7 items-center">
              {job.paymentVerified
              ?
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="#14bff4" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <p className="font-bold text-gray-500">Payment verified</p>
              </div>
              : null}

              <div className="font-light text-gray-500 text-sm">
                <span className="font-bold text-black">${job.spent}+</span> spent
              </div>
            </div>
        </div>
      ))}

      <div className="text-center bg-white p-4">
        <button className="px-6 py-2 border rounded-full text-primary font-bold">Load more</button>
      </div>
    </div>
    
  </main>
  )
};

export default Main;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../shared/spinner";
import Navbar from "./Jobs-navbar";
import { localBackend } from "../../services/basedUrl";

const Jobs = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [allJobs] = useState([
    {
      category: 'Full Stack Development',
      title: "Project number 1",
      freelancer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      hireDate: new Date(),
    },
    {
      category: 'Back End Development',
      title: "Project number 2",
      freelancer: {
        name: "John Doe",
        email: "john@doe.com"
      },
      hireDate: new Date(),
    },
  ])

  return (
    <>
      <Navbar activeLink="active-jobs" />
        <>
          <h1 className="px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">
            All Jobs
          </h1>





<div class={`${isModalOpen === false ? "hidden" : ""} fixed z-10 inset-0 overflow-y-auto`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-50 sm:mx-0 sm:h-10 sm:w-10">
            {/* <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="px-2 text-lg leading-6 font-medium text-gray-900 " id="modal-title">
              End contract
            </h3>
            <div class="mt-2">
              <p class="px-2 text-sm text-gray-500 mb-4">
                Are you sure you want to End the contract? This action cannot be undone.
              </p>
              <textarea name="feedback" id="feedback" className="w-full px-2 py-1 focus:outline-none rounded-md focus:ring-complementary border-2 border-gray-400 focus:border-complementary" placeholder="Please give some feedback!" cols="30"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={()=>setModalOpen(false)} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm">
          End contract
        </button>
        <button onClick={()=>setModalOpen(false)} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>



          <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
            <div className="">
              <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">
                Active Jobs ({allJobs.length})
              </h2>

              {allJobs.map((job) => (
                  <div className="p-4 md:px-6 border-b border-gray-200">
                    <div className="md:flex py-2 justify-between cursor-pointer items-center">
                      <div className="md:max-w-xs">
                        <h2 className="text-primary font-bold">{job.title}</h2>
                        <h5>
                          {job.category} applicants
                        </h5>
                        <h5 className="text-gray-500">
                          {job.hireDate.toString()}
                        </h5>
                      </div>
                      <div className="flex-1 md:text-center">
                        <h4 className="font-bold text-primary">Freelancer info:</h4>
                        <p>{job.freelancer.name}</p>
                        <p className="text-gray-500">{job.freelancer.email}</p>
                      </div>
                        <button onClick={()=>setModalOpen(true)} className="mt-4 ml-auto md:mt-0 bg-primary text-white px-3 py-2 rounded-full flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          End contract
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
    </>
  );
};

export default Jobs;

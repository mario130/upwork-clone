/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../shared/spinner';
import Navbar from './Jobs-navbar';
import { localBackend } from '../../services/basedUrl';

const Jobs = () => {
  const [allJobs, setAlljobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  useEffect(() => {

    axios
      .get(
        `${localBackend}/jobs/getAll`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }
      )
      .then((data) => {
        setLoading(false);
        console.log(data);
        const activeJobs = data.data.jobs.filter(job => job.status !== 'closed')
        console.log(activeJobs)
        setAlljobs(activeJobs);
      }).catch((err) => {
        setLoading(true);
      })
  }, [token]);

  return (
    <>
      <Navbar activeLink="jobs" />
      {loading ?
        <div className="text-center my-4">
          <Spinner />
        </div>
        : <><h1 className="px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">All Jobs</h1>
          <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
            <div className="">
              {allJobs.length === 0
                ? <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Jobs ({allJobs.length})</h2>
                : <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Jobs ({allJobs && allJobs.length})</h2>}


              {allJobs && allJobs.map((job, i) => (
                <div className="p-4 md:px-6 border-b border-gray-200" key={i}>
                  <Link to={`/applicants/${job._id}`}>
                    <div className="flex py-2 justify-between cursor-pointer items-center">
                      <div>
                        <h2 className="text-primary font-bold">{job.title}</h2>
                        <h5 className="text-gray-500">{job.proposals.length} applicants</h5>
                      </div>
                      <button className="bg-primary text-white px-3 py-1 rounded-full flex items-center">View job
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>}
    </>
  )
}

export default Jobs;
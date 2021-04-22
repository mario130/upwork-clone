import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { localBackend } from '../../services/basedUrl';

const Jobs = () => {
  const [proposals] = useState({
    active: [
      {
        title: "Job post 1",
        applicants: 3,
        description: 'API Developer Needed To Fix/Rebuild API',
        category: "Full Stack Development"
      },
      {
        title: "Job post 2",
        applicants: 7,
        description: 'Front end developer needed to convert landing page design to Netlify',
        category: "Full Stack Development"
      },
    ],
    others: [
      {
        title: "Job post 1",
        applicants: 3,
        description: 'API Developer Needed To Fix/Rebuild API',
        category: "Full Stack Development"
      },
    ]
  })
  useEffect(() => {
    axios.get(`${localBackend}/proposal/getFreelancerProposals`,
    {
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    }).then((data)=>{
      console.log(data)
    }).catch(err=>console.log(err))
  
  }, [])
  return (
    <>
      <h1 className="px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">My Proposals</h1>  
      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Active proposals ({proposals.active.length})</h2>

          {proposals.active.map(proposal => (
            <div className="p-4 md:px-6 border-b border-gray-200">
              <div className="py-2 cursor-pointer">
                <div className="text-sm">
                  <h2 className="text-primary font-bold md:text-base">{proposal.description}</h2>
                  <h5 className="text-black my-2">Received Apr 16, 2021</h5>
                  <h5 className="text-gray-500">14 hours ago</h5>
                  <h5 className="text-gray-500">{proposal.category}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Submitted proposals ({proposals.others.length})</h2>

          {proposals.others.map(proposal => (
            <div className="p-4 md:px-6 border-b border-gray-200">
              <div className="py-2 cursor-pointer">
                <div className="text-sm">
                  <h2 className="text-primary font-bold md:text-base">{proposal.description}</h2>
                  <h5 className="text-black my-2">Received Apr 16, 2021</h5>
                  <h5 className="text-gray-500">14 hours ago</h5>
                  <h5 className="text-gray-500">{proposal.category}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Jobs;
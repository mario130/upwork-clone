/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { localBackend } from '../../services/basedUrl';
import moment from 'moment';

const Jobs = () => {
  const [proposals, setProposals] = useState([]);
  let count = 0,
    count2 = 0;
  const [activeProposalsLen, setActiveProposalsLen] = useState(0);
  const [submittedProposalsLen, setSubmittedProposalsLen] = useState(0);

  useEffect(() => {
    axios.get(`${localBackend}/proposal/getFreelancerProposals`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }).then((data) => {
        console.log(data)
        console.log(data.data.length)
        setProposals(data.data);
        data.data.forEach(element => {
          if (element.accepted === false) {
            count++
            setActiveProposalsLen(count);
            console.log(activeProposalsLen, 'active');
          }

          else if (element.accepted === true) {
            count2++
            setSubmittedProposalsLen(count2);
            console.log(submittedProposalsLen, 'submitt');
          }
        });

      }).catch(err => console.log(err))

  }, [])
  return (
    <>
      <h1 className="px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">My Proposals</h1>
      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Active proposals ({activeProposalsLen})</h2>


          {activeProposalsLen >= 0 ?
            <>
              {proposals.map((proposal, i) => (
                <div key={proposal._id}>
                  {proposal.accepted == false ?
                    <div className="p-4 md:px-6 border-b border-gray-200 " >
                      <div className="py-2 cursor-pointer">
                        <div className="text-sm grid grid-cols-1 md:grid-cols-3 flex-wrap gap-4">
                          <div>
                            <h5 className="text-black mt-2">Accepted: {moment(proposal.createdDate).format('MMMM Do YYYY')}</h5>
                            <h5 className="text-black  mb-2 text-xs">{moment(proposal.createdDate).startOf().fromNow()}</h5>
                          </div>
                          <div>
                            <h2 className="text-primary mt-2 font-bold md:text-base" title={proposal.jobId.title}>{proposal.jobId.title.slice(0, 20)}...</h2>
                            <h5 className="text-black mb-2" title={proposal.coverLetter}>{proposal.coverLetter.slice(0, 20)}...</h5>
                          </div>
                          <div>
                            <h5 className="text-black mt-2">{proposal.jobId.category}</h5>
                            <h5 className="text-black mb-2">{proposal.duration}</h5>
                          </div>

                        </div>
                      </div>
                    </div> : null}
                </div>
              ))}
            </> : null}
        </div>
      </div>

      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Submitted proposals ({submittedProposalsLen})</h2>

          {submittedProposalsLen >= 0 ?
            <>
              {proposals.map((proposal, i) => (
                <div key={proposal._id}>
                  {proposal.accepted == true ?
                    <div className="p-4 md:px-6 border-b border-gray-200">
                      <div className="py-2 cursor-pointer">
                        <div className="text-sm grid grid-cols-1 md:grid-cols-3 flex-wrap gap-4">
                          <div>
                            <h5 className="text-black my-2">Initiated : {moment(proposal.createdDate).format('MMMM Do YYYY')}</h5>
                            <h5 className="text-black  text-xs">{moment(proposal.createdDate).startOf().fromNow()}</h5>
                          </div>
                          <div>
                            <h2 className="text-primary font-bold md:text-base">{proposal.coverLetter}</h2>
                            <h5 className="text-black my-2">{proposal.jobId.title}</h5>
                          </div>
                          <div>
                            <h5 className="text-black my-2">{proposal.jobId.category}</h5>
                            <h5 className="text-black my-2">{proposal.duration}</h5>
                          </div>

                        </div>
                      </div>
                    </div> : null}
                </div>
              ))}
            </> : null}
        </div>
      </div>
    </>
  )
}

export default Jobs;
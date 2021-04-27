import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from './Jobs-navbar';
import { localBackend } from '../../services/basedUrl';

const Applicants = () => {

  const [allApplicants, setAllapplicants] = useState([]);
  const token = localStorage.getItem("token");
  let { jobId } = useParams();
  const [applicantSelected, setApplicantSelected] = useState(false)
  useEffect(() => {
    axios
      .get(
        `${localBackend}/proposal/getJobProposals/${jobId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      }
      )
      .then((data) => {
        console.log(data.data);
        setAllapplicants(data.data);

        if (data.data.proposals.some(applicant => applicant.accepted === true)) {
          setApplicantSelected(true)
        }
      })
  }, [applicantSelected, jobId, token]);

  const acceptApplicant = (proposalId) => {
    axios.post(
      `${localBackend}/contract/hired/${jobId}`, {
      proposalId
    }, {
      headers: { 'Authorization': `Bearer ${token}` },
    }
    ).then(res => {
      console.log(res);
      setApplicantSelected(true)
    })
  }

  return (
    <>
      <Navbar />
      <div className="text-complementary px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">
        <h1 className="">{allApplicants.category}</h1>
        <h4 className="text-sm mt-1">{allApplicants.experience}</h4>
      </div>

      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <div className="p-4 md:px-6 border-b border-gray-200 text-primary text-xl font-bold flex justify-between flex-wrap">
            <h2 className="cursor-pointer">{allApplicants.title}</h2>
            <h2 className="text-complementary">Applicants ({allApplicants.proposals?.length})</h2>
          </div>

          {allApplicants.proposals?.length > 0
            ? allApplicants.proposals.map((applicant, i) => (
              <div key={i} className="p-4 md:px-6 border-b border-gray-200 lg:flex">
                <div className="flex py-2">
                  <img src={applicant.imgPath} className="w-16 h-16 rounded-full mr-4 md:mr-6" alt="" />
                  <div>
                    <h4 className="text-primary font-bold">{applicant.freelancerId.userName}</h4>
                    <p><span className="font-bold">Cover Letter: </span>{applicant.coverLetter}</p>
                  </div>
                </div>
                <div className="flex mt-2 lg:flex lg:flex-col lg:justify-between flex-1">
                  <div className="flex justify-end lg:block w-full lg:mb-2">
                    {applicant.accepted === true
                      ? <div className="text-right items-center justify-start">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg> */}
                        <div className="ml-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-50">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      : <button onClick={() => acceptApplicant(applicant._id)} className={`flex-1 lg:flex-none mr-1 lg:ml-auto lg:block font-bold lg:font-semibold rounded-lg py-1 lg:px-16 bg-primary text-white ${applicantSelected ? "hidden lg:hidden" : ''}`}>Hire!</button>}
                  </div>
                </div>
              </div>
            ))
            : null}
        </div>
      </div>
    </>
  )
}

export default Applicants;
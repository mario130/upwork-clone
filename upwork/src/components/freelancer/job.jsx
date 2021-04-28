/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../shared/spinner";
import { Link } from "react-router-dom";
import { localBackend } from '../../services/basedUrl';
import moment from 'moment';

const Job = (props) => {
  const [checkSubmited, setCheck] = useState(false);
  const [job, setJob] = useState(null);
  useEffect(() => {
    axios
      .get(`${localBackend}/jobs/${props.id}`)
      .then((data) => {
        console.log(data);
        localStorage.setItem("job", JSON.stringify(data));
        setJob(data.data);
        if (data.data.proposals) {
          data.data.proposals.map(prop =>
            prop.freelancerId == localStorage.getItem("userId") ? setCheck(true) : setCheck(false)
          )
        }
      });
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      {job?.title ? (
        <div className="w-full mt-6 bg-white mb-6 md:mx-12 lg:container lg:mx-auto lg:max-w-5xl lg:grid lg:grid-cols-7 lg:rounded-lg border border-gray-200">
          {/* <div className="mt-6 bg-white mb-6 md:mx-12 lg:container lg:mx-auto lg:max-w-5xl "> */}
          {/* lg left part */}
          <div className="lg:col-start-1 col-span-5 lg:border-r lg:border-gray-200">
            <h2 className="p-6 font-bold text-xl grayBottomBorder">
              {job?.title}
            </h2>
            <div className="p-6 text-sm grayBottomBorder">
              <button className="text-primary font-bold">
                {job?.category}
              </button>
              <br />
              <span className="text-gray-500">{moment(job.createdDate).startOf().fromNow()}</span>

              {/* implement if possible: redirect to add a specialized profile */}
              {/* <div className="mt-3 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3 mt-1 flex-2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <p className="flex-1">
              Specialized profiles can help you better highlight your expertise
              when submitting proposals to jobs like these.{" "}
              <a className="text-primary font-bold">
                Create a specialized profile.
              </a>
            </p>
          </div> */}
              <div className="mt-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Worldwide</span>
              </div>
              <p className="mt-3 text-gray-500 lg:hidden">
                {job?.requiredConnects} required connects
              </p>
            </div>
            <p className="p-6 text-sm grayBottomBorder">{job?.description}</p>

            <div className="p-6 text-sm grayBottomBorder">
              {/* job info flex */}
              <div className="flex my-4">
                {job?.hours ? (
                  <div className="w-1/3">
                    <p className="font-bold">{job?.hours}</p>
                    <p className="font-light text-gray-700">Hours Needed</p>
                  </div>
                ) : (
                  <div className="w-1/3">
                    <p className="font-bold">${job?.budget}</p>
                    <p className="font-light text-gray-700">Budget</p>
                  </div>
                )}

                {job?.duration ? (
                  <div className="w-1/3">
                    <p className="font-bold">{job?.duration}</p>
                    <p className="font-light text-gray-700">Duration</p>
                  </div>
                ) : null}

                <div className="w-1/3">
                  <p className="font-bold">{job?.experience}</p>
                  <p className="font-light text-gray-700">Experience</p>
                </div>
              </div>

              {/* extra line */}
              {job?.payRange && (
                <div className="mt-2">
                  <p className="font-bold">{job?.payRange}</p>
                  <p className="font-light text-gray-700">Hourly</p>
                </div>
              )}
            </div>

            <div className="flex justify-between p-6 text-sm grayBottomBorder lg:justify-start">
              <h3 className="font-bold lg:mr-2">Project type:</h3>
              <p>{job?.projectType}</p>
            </div>

            {/* <div className="p-6 grayBottomBorder text-sm">
              <h4 className="font-bold">
                You will be asked to answer the following questions when
                submitting a proposal:
              </h4>
              <ol className="ml-3 mt-2">
                {job?.questions.map((question, i) => (
                  <li>
                    {i + 1}. {question}
                  </li>
                ))}
              </ol>
            </div> */}

            <div className="p-6 grayBottomBorder text-sm">
              <h4 className="mb-6 font-bold text-lg">Skills and Expertise</h4>
              <div className="flex flex-wrap">
                {job?.skills.map((skill, i) => (
                  <div className="" key={i}>
                    <span className="px-2 py-1 bg-gray-100 rounded-full mr-2 font-semibold text-gray-800">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:flex">
              {/* <div className="p-6 text-sm grayBottomBorder lg:w-1/2">
                <h2 className="font-bold mb-2">Preferred qualifications</h2>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Talent type:</h4>
                  <p>{job?.qualifications.talentType}</p>
                </div>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Rising Talent:</h4>
                  <p>{job?.qualifications.risingTalent ? "Yes" : "No"}</p>
                </div>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">English level:</h4>
                  <p>{job?.qualifications.english}</p>
                </div>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Amount earned:</h4>
                  <p>{job?.qualifications.amountEarned}</p>
                </div>
              </div> */}

              <div className="p-6 text-sm grayBottomBorder lg:w-1/2">
                <h2 className="font-bold mb-2">Activity on this job</h2>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Proposals:</h4>
                  <p>{job?.proposals.length}</p>
                </div>
                {/* <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Interviewing:</h4>
                  <p>{job?.activity.interviewing}</p>
                </div>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Invites sent:</h4>
                  <p>{job?.activity.invites}</p>
                </div>
                <div className="infoList">
                  <h4 className="text-gray-500 lg:mr-2">Unanswered invites:</h4>
                  <p>{job?.activity.unanswered}</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="text-sm grayBottomBorder lg:col-start-6 col-span-2">
            <div className="p-4 hidden lg:block grayBottomBorder">
              <div className="space-y-2 p-3" >
                <Link to={`/proposal/${props.id}`}>
                  <button className="w-full p-2 rounded-lg font-bold text-sm bg-primary text-white"
                    disabled={
                      checkSubmited
                    }
                  >
                    Submit a proposal
                  </button>
                </Link>
                <button className="w-full p-2 rounded-lg font-bold text-sm text-primary border flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  Save job
                </button>
                <div className="pt-6 pb-2 flex text-primary items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Flag as inappropriate
                </div>
              </div>
            </div>
            <h4 className="px-6 pt-4  font-bold mb-2 text-lg">
              About the client
            </h4>
            <div className="px-6 flex items-center mb-2">
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

            <div className="px-6 flex justify-between mb-2 lg:block">
              <h4 className="font-bold">{job?.client?.coutry}</h4>
              <p className="text-gray-500">Forest Town Mansfield 01:57 pm</p>
            </div>
            {/* <div className="px-6 flex justify-between mb-2 lg:block">
              <h4 className="font-bold">
                {job?.client?.pastJobsCounter} jobs posted
              </h4>
              <p className="text-gray-500">100% hire rate, 1 open job</p>
            </div> */}
            {/* <div className="px-6 flex justify-between mb-2 lg:block">
              <h4 className="font-bold">{job?.client?.spent}+ total spent</h4>
              <p className="text-gray-500">1 hire, 1 active</p>
            </div> */}
            <div className="px-6 flex justify-between mb-2 lg:block">
              <h4 className="font-bold">
                {job?.client?.average} avg hourly rate paid
              </h4>
              <p className="text-gray-500">73 hours</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 pt-6 pb-2 flex text-primary items-center lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                clipRule="evenodd"
              />
            </svg>
            Flag as inappropriate
          </div>

          <div className="sticky bottom-0 p-6 flex bg-white border-t grayBottomBorder space-x-2 lg:hidden">
            <div className="w-1/2">
              <Link to={`/proposal/${props.id}`}>
                <button className="w-full h-full p-2 rounded-lg font-bold text-sm bg-primary text-white"
                  disabled={
                    checkSubmited
                  }
                >
                  Submit a proposal
                </button>
              </Link>
            </div>
            <button className="w-1/2 p-2 rounded-lg font-bold text-sm text-primary border flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
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
              Save job
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center ">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Job;

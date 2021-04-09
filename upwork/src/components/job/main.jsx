import React, { useState } from "react";

const Job = () => {
  const [job] = useState({
    title: "API Developer Needed To Fix/Rebuild API",
    category: "Full Stack Development",
    //todo: add relative date
    description:
      "We have an API sending product data from Woocommerce on Wordpress to another website (not Wordpress). It's a simple product data feed that just displays products. We don't have control over the other end, we just supply the API feed - it apparently intermittently throws errors on the receiving side but works fine in testing. Links, API instructions and further information can be provided to the successful candidate. We either need this one fixing or another API setting up to make it function without errors. Zoom to talk through the issues would be beneficial to both parties Thanks!",
    type: "Hourly",
    projectType: "One-time project",
    hours: "30+ hrs/week",
    duration: "More than 6 months",
    experience: "Expert",
    payRange: "$15.00-$30.00",
    requiredConnects: 4,
    questions: ["Do you have experience with Wordpress API's?"],
    skills: [
      {
        title: "Back-End Development Deliverables",
        tags: ["API"],
      },
      {
        title: "Back-End Programming Languages",
        tags: ["PHP", "NodeJS"],
      },
      {
        title: "Back-End Development Skills",
        tags: ["eCommerce"],
      },
      {
        title: "Other",
        tags: ["Backend Rest API"],
      },
    ],
    activity: {
      proposals: "5 to 10",
      //todo: add time again
      interviewing: 1,
      invites: 4,
      unanswered: 3,
    },
    client: {
      paymentVerified: true,
      rating: 4.86,
      coutry: "United Kingdom",
      pastJobsCounter: 4,
      spent: "90k",
      average: "28 /hr",
      //todo: add client join date
      pastJobs: [],
    },
  });

  return (
    <div className="mt-6 bg-white mb-6">
      <h2 className="p-4 font-bold text-xl border-b border-gray-200">
        {job.title}
      </h2>
      <div className="p-4 text-sm border-b border-gray-200">
        <button className="text-primary font-bold">{job.category}</button>
        <br />
        <span className="text-gray-500">Posted 14 minutes ago</span>

        <div className="mt-3 flex">
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
        </div>
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
        <p className="mt-3 text-gray-500">
          {job.requiredConnects} required connects
        </p>
      </div>
      <p className="p-4 text-sm border-b border-gray-200">{job.description}</p>

      <div className="p-4 text-sm border-b border-gray-200">
        {/* job info flex */}
        <div className="flex justify-between my-4">
          {job.hours ? (
            <div className="">
              <p className="font-bold">{job.hours}</p>
              <p className="font-light text-gray-700">Hours Needed</p>
            </div>
          ) : (
            <div className="">
              <p className="font-bold">${job.budget}</p>
              <p className="font-light text-gray-700">Budget</p>
            </div>
          )}

          {job.duration ? (
            <div className="">
              <p className="font-bold">{job.duration}</p>
              <p className="font-light text-gray-700">Duration</p>
            </div>
          ) : null}

          <div className="">
            <p className="font-bold">{job.experience}</p>
            <p className="font-light text-gray-700">Experience</p>
          </div>
        </div>

        {/* extra line */}
        <div className="mt-2">
          <p className="font-bold">{job.payRange}</p>
          <p className="font-light text-gray-700">Hourly</p>
        </div>
      </div>

      <div className="flex justify-between p-4 text-sm border-b border-gray-200">
        <h3 className="font-bold">Project type:</h3>
        <p>{job.projectType}</p>
      </div>

      <div className="p-4 border-b border-gray-200 text-sm">
        <h4 className="font-bold">
          You will be asked to answer the following questions when submitting a
          proposal:
        </h4>
        <ol className="ml-3 mt-2">
          {job.questions.map((question, i) => (
            <li>
              {i + 1}. {question}
            </li>
          ))}
        </ol>
      </div>

      <div className="p-4 border-b border-gray-200 text-sm">
        <h4 className="mb-6">Skills and Expertise</h4>
        <div className="flex flex-wrap justify-between space-y-2">
          {job.skills.map((skill) => (
            <div className="w-1/2">
              <h5 className="font-bold my-2">{skill.title}</h5>
              {skill.tags.map((tag) => (
                <span className="px-2 py-1 bg-gray-100 rounded-full mr-2 font-semibold text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 text-sm border-b border-gray-200">
        <h2 className="font-bold mb-2">Activity on this job</h2>
        <div className="flex justify-between mb-2">
          <h4 className="text-gray-500">Proposals:</h4>
          <p>{job.activity.proposals}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="text-gray-500">Interviewing:</h4>
          <p>{job.activity.interviewing}</p>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="text-gray-500">Invites sent:</h4>
          <p>{job.activity.invites}</p>
        </div>
        <div className="flex justify-between">
          <h4 className="text-gray-500">Unanswered invites:</h4>
          <p>{job.activity.unanswered}</p>
        </div>
      </div>

      <div className="p-4 text-sm border-b border-gray-200">
        <h4 className="font-bold mb-2 text-base">About the client</h4>
        {job.client.paymentVerified ? (
          <div className="flex items-center mb-2">
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

        <div className="flex justify-between mb-2">
          <h4 className="font-bold">{job.client.coutry}</h4>
          <p className="text-gray-500">Forest Town Mansfield 01:57 pm</p>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">{job.client.pastJobsCounter} jobs posted</h4>
          <p className="text-gray-500">100% hire rate, 1 open job</p>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">{job.client.spent}+ total spent</h4>
          <p className="text-gray-500">1 hire, 1 active</p>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="font-bold">{job.client.average} avg hourly rate paid</h4>
          <p className="text-gray-500">73 hours</p>
        </div>
      </div>

      <div className="sticky bottom-0 p-2 flex bg-white border-t border-gray-200 space-x-2">
        <button className="w-1/2 p-2 rounded-lg font-bold bg-primary text-white">Submit a proposal</button>
        <button className="w-1/2 p-2 rounded-lg font-bold text-primary border flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Save job</button>
      </div>
    </div>
  );
};

export default Job;

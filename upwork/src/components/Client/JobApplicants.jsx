import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from './Jobs-navbar';

const Applicants = () => {
  /* const [job] = useState({
    title: "API Developer Needed To Fix/Rebuild API",
    type: "Hourly",
    questions: [
      "Are you good with APIs?",
      "How experienced are you in this industry?"
    ]
  })

  const [applicants] = useState([
    {
      name: "Mario Y.",
      imageUrl: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      title: "Full Stack Developer MERN",
      hourlyRate: 20,
      hoursWorked: 1100,
      earned: "200k",
      location: "Egypt",
      coverLetter: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda eaque atque repellat, molestiae debitis quasi eligendi repudiandae incidunt optio.",
      answers: [
        "Sure",
        "Nearly 7 years"
      ]
    },
    {
      name: "Ahmed M.",
      imageUrl: "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
      title: "Full Stack Developer MERN",
      hourlyRate: 84,
      hoursWorked: 1200,
      earned: "201k",
      location: "Egypt",
      coverLetter: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda eaque atque repellat, molestiae debitis quasi eligendi repudiandae incidunt optio.",
      answers: [
        "No",
        "Nooooo"
      ]
    },
  ]) */

  const [allApplicants,setAllapplicants]=useState([]);
  const token = localStorage.getItem("token");
  let { jobId } = useParams();
  useEffect(() => {
    axios
      .get(
        `http://localhost:4001/proposal/getJobProposals/${jobId}`,{
          headers:{'Authorization':`Bearer ${token}`}
        }
      )
      .then((data) => {
        console.log(data);
        setAllapplicants(data.data);
      })
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="px-4 md:px-6 py-2 mt-6 mb-3 font-bold text-2xl lg:container lg:mx-auto lg:max-w-5xl">Full Stack Developer MERN</h1>  
      <div className="bg-white mb-6 md:rounded-lg md:mx-12 lg:container lg:mx-auto lg:max-w-5xl border border-gray-200">
        <div className="">
          <h2 className="p-4 md:px-6 border-b border-gray-200 text-complementary text-xl font-bold">Applicants ({allApplicants.proposals?.length})</h2>

          {allApplicants.proposals?.length > 0 
          ? allApplicants.proposals.map((applicant, i) => (
            <div key={i} className="p-4 md:px-6 border-b border-gray-200 lg:flex">
              <div className="flex py-2">
                <img src={applicant.imgPath} className="w-16 h-16 rounded-full mr-4 md:mr-6" alt=""/>
                <div>
                  <h4 className="text-primary font-bold">{applicant.freelancerId.userName}</h4>
                  {/* <h4 className="font-bold">{applicant.title}</h4> */}

                  {/* <ul className="lg:hidden flex justify-between flex-wrap mx-auto w-full mb-4">
                    <li><span className="font-bold">${applicant.hourlyRate.toFixed(2)}</span> /hr</li>
                    <li><span className="font-bold">${applicant.earned}+</span> earned</li>
                    <li><span className="font-bold">{applicant.hoursWorked}</span> hours worked</li>
                  </ul> */}

                  {/* <div className="mb-2">
                    {job.questions.map((question, i) => (
                      <div>
                        <h5><span className="font-bold"> Q{i+1}:</span> {question}</h5>
                        <p>{applicant.answers[i]}</p>
                      </div>
                    ))}
                  </div> */}
                  <p><span className="font-bold">Cover Letter: </span>{applicant.coverLetter}</p>
                </div>
              </div>
              {/* <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolorem?</h2> */}
              <div className="flex mt-2 lg:flex lg:flex-col lg:justify-between flex-1">
                {/* <div className="hidden lg:flex flex-col items-end mb-6 mt-2">
                  
                  <p><span className="font-bold">${applicant.hourlyRate.toFixed(2)}</span> /hr</p>
                  <p><span className="font-bold">${applicant.earned}+</span> earned</p>
                  <p><span className="font-bold">{applicant.hoursWorked}</span> hours worked</p>
                </div> */}
              <div className="flex lg:block w-full lg:mb-2">
                  <button className="flex-1 lg:flex-none mr-1 lg:w-full font-bold lg:font-semibold rounded-lg py-1 lg:px-16 bg-primary text-white">Chat!</button>
                  {/* <button className="flex-1 lg:flex-none ml-1 lg:w-full font-bold lg:font-semibold rounded-lg py-1 lg:px-10 text-red-500">Remove</button> */}
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
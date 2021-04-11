import { useState } from "react";
import ArrowDown from "../UI/Icons/Arrow-down";
import ArrowUp from "../UI/Icons/Arrow-up";
import jobPost from "./../../assets/imges/client-Instrcutions/job-post.svg"
import evaluate from "./../../assets/imges/client-Instrcutions/evaluate.svg"
import together from "./../../assets/imges/client-Instrcutions/together.svg"
import payment from "./../../assets/imges/client-Instrcutions/payment.svg"
import { Link } from "react-router-dom";



const HowItWorks = () => {
  const initialState = [
    {
      title:
        "1.Post a job to get free quotes.",
      description:
        "Write a clear, detailed description of your job to share with qualified freelancers. Start receiving proposals in less than 24 hours.",
      action: "View great job post examples",
      img:jobPost
    },
    {
      title: "2.Evaluate freelancers and hire.",
      description:
        "Review proposals or invite qualified freelancers to your project. Quickly chat live or video call with favorites, and offer a contract to the best match.",
      action: "Review tips on finding talent Prepare to interview freelancers",
      img:evaluate

    },
    {
      title: "3.Work together.",
      description:
        "Use Upwork Messages to securely chat, share files, and collaborate on projects. View progress against project goals with the Work Diary tool.",
      action: "See tips for staying safe on Upwork",
      img:together

    },
    {
      title: "4.Pay and invoice through Upwork",
      description:
        "Get invoices and make payments after reviewing time billed or approving milestones. With Upwork Payment Protection, only pay for work you authorize.",
      action:
        "Learn about Upwork pricing Determine how much to pay freelancers",
        img:payment

    },
  ];
  const [instructions] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <section className=" bg-white" id="posts">
      <ul className="list-group">
        <li className="list-item-header ">
          <p className="font-bold text-2xl">How it works</p>
          <button className=" w-8 h-8 flex justify-center items-center focus:outline-none border-none" onClick={toggleOpen}>
            <span className="">
              {isOpen ? (
                <span className="text-gray-500">
                  <ArrowUp/>

                </span>
              ) : (
                <span className="text-gray-500">
                <ArrowDown/>
                </span>
              )}
            </span>
          </button>
        </li>
        {isOpen ? instructions.map((ins) => (
          <>
            {" "}
            <li className="list-items">
              <div className="w-1/5">
                <span>
            <img src={ins.img} alt="pic" className="w-full"/>
                  </span>                
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg">{ins.title}</h3>
                <p>{ins.description}</p>
              
                <Link to="/" className="text-primary hover:underline">{ins.action}</Link>
              
              </div>
            </li>
          </>
        )):null}
      </ul>
    </section>
  );
};

export default HowItWorks;

import { Link } from "react-router-dom";
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";

const JobExpertise = (props) => {

  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold	">Expertise </p>
            <span>step 4 of 6</span>
          </li>
          <li className="item-border">
              <p>What skills and expertise are most important to you in Graphic Design?</p>
            <Input
              className="pl-4"
              type="text"
              name="skills"
              placeholder="skills"
              errorMsg=""
            />
          </li>
        </ul>
      </div>
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className=" font-bold	">Job Category </p>
          </li>
          <li className="item-border">
            <p className="">
              Let's categorize your job, which helps us personalize your job
              details and match your job to relevant freelancers and agencies.
            </p>
            <Link to="/" className="text-primary hover:underline">
              See all Categories
            </Link>
          </li>
          <li className="item-border">
            <Btn 
            className="text-primary mr-3 border-hair border px-10 py-2 "
            >
              cancel
            </Btn >
            <Btn
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              // disabled={true}
              handleClick={()=>props.ToNextStep("Description")}
            >
              Next
            </Btn  >
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobExpertise;

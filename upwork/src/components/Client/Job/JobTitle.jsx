import { Link } from "react-router-dom";
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";

const JobTitle = (props) => {

  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold	">Title </p>
            <span>step 1 of 6</span>
          </li>
          <li className="item-border">
            <Input
              label="Enter the name of your job post"
              className="pl-4"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              errorMsg=""
            />
            <p className="font-bold text-sm">Here are some good examples:</p>
            <div className="ml-4">
              <ul className="list-disc ml-4">
                <li className="">
                  Developer needed for creating a responsive WordPress Theme
                </li>
                <li className="">
                  CAD designer to create a 3D model of a residential building
                </li>
                <li className="">Need a design for a new company logo</li>
              </ul>
            </div>
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

export default JobTitle;

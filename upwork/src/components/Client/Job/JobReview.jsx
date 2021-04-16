import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { addJobService } from "../../../services/addJob";
import Btn from "../../UI/Form/Btn/Btn";

const JobReview = (props) => {
  const jobPost = useSelector((state) => state.jobPost);
  
  const addJob = () => {
    addJobService({ ...jobPost })
      .then((data) => {
        props.history.push("/client/succes-post")
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border flex justify-between ">
            <p className="text-2xl font-extrabold	">Review and post </p>
            <Btn
              handleClicking={addJob}
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
            >
              Post Job Now
            </Btn>
          </li>
          <li className="item-border">
            <h2 className="text-xl font-extrabold mb-8">Title</h2>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Title</h5>
              <p>{jobPost.title}</p>
            </div>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Job Category</h5>
              <p>{jobPost.category}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <h2 className="text-xl font-extrabold mb-8">Description</h2>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Description</h5>
              <p>{jobPost.description}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <h2 className="text-xl font-extrabold mb-8">Details</h2>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Type of Project</h5>
              <p>{jobPost.projectType}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <h2 className="text-xl font-extrabold mb-8">Expertise</h2>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Skills</h5>
              <div className="flex flex-wrap">
                {jobPost.skills &&
                  jobPost.skills.map((skill, i) => (
                    <div key={i}>
                      <span className="rounded-full py-1 px-3 inline-block mr-3 text-twilight  border border-grey bg-hair hover:bg-gray-300 cursor-default">
                        {skill}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="mb-5">
              <h5 className="text-sm font-bold mb-4">Experience Level</h5>
              <p>{jobPost.experience}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <h2 className="text-xl font-extrabold mb-8">Budget</h2>
            <div className="flex flex-wrap ">
              <div className="mb-5 w-full md:w-3/6">
                <h5 className="text-sm font-bold mb-4">
                  Hourly or Fixed-Price
                </h5>
                <p>{jobPost.paymentChoice}</p>
              </div>
              <div className="mb-5 w-full md:w-3/6">
                <h5 className="text-sm font-bold mb-4">Budget</h5>
                <p>{jobPost.budget}</p>
              </div>
            </div>
          </li>
          <li className="item-border">
            <Btn
              className="text-primary mr-3 border-hair border px-10 py-2 "
              handleClicking={() => props.backStep("Review")}
            >
              Back
            </Btn>
            <Btn
              type="button"
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              handleClicking={addJob}
            >
              Post Job Now
            </Btn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter( JobReview);

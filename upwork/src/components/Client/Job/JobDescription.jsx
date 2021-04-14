import Btn from "../../UI/Form/Btn/Btn";
import TextArea from "../../UI/Form/TextArea/TextArea";

const JobDescription = (props) => {
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold"> Describtion </p>
            <span>step 2 of 6</span>
          </li>
          <li className="item-border">
            <p className="font-bold text-sm">A good description includes:</p>
            <div className="ml-4 mb-5">
              <ul className="list-disc ml-4">
                <li className="">What the deliverable is</li>
                <li className="">
                  Type of freelancer or agency you're looking for</li>
                <li className="">
                  Anything unique about the project, team, or your company
                </li>
              </ul>
            </div>
            <TextArea/>

          </li>
          <li className="item-border">
            <Btn className="text-primary mr-3 border-hair border px-10 py-2 "
          handleClicking={()=>props.backStep("Description")}

            >
              Back
            </Btn>
            <Btn
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              // disabled={true}
              handleClicking={()=>props.ToNextStep("Details")}
            >
              Next
            </Btn>
          </li>
        </ul>
      </div>
   
    </div>

  );
};

export default JobDescription;

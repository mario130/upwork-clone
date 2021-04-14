import Btn from "../../UI/Form/Btn/Btn";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faStickyNote, faUser } from "@fortawesome/free-solid-svg-icons";

const JobDetails = (props) => {
  return (
    <div className="col-span-4">
      <div className="bg-white mb-5">
        <ul className="list-group">
          <li className="item-border ">
            <p className="text-2xl font-extrabold"> Details </p>
            <span>step 3 of 6</span>
          </li>
          <li className="item-border">
            <p className="font-bold text-sm mb-5">
              What type of project do you have?
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              <RadioBox
                id="onTimeProject"
                title="on time project"
                text="find the right skills forshort time need"
                svg={<FontAwesomeIcon icon={faUser} className="w-6 h-6" />}
              ></RadioBox>
              <RadioBox
                id="onGoingProject"
                title="on going project"
                text="find the right skills forshort time need"
                svg={<FontAwesomeIcon icon={faStickyNote} className="w-6 h-6" />}
              ></RadioBox>
              <RadioBox id="complexProject"
              title="complex project"
              text="find the right skills forshort time need"
              svg={<FontAwesomeIcon icon={faHashtag} className="w-6 h-6" />}
              ></RadioBox>
            </div>
          </li>
          <li className="item-border">
            <Btn className="text-primary mr-3 border-hair border px-10 py-2 "
            handleClicking={() => props.backStep("Details")}
            >
              Back
            </Btn>
            <Btn
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              // disabled={true}
              handleClicking={() => props.ToNextStep("Expertise")}
            >
              Next
            </Btn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;

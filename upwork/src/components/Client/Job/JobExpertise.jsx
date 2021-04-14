import { Link } from "react-router-dom";
import Btn from "../../UI/Form/Btn/Btn";
import Input from "../../UI/Form/Input/Input";
import RadioBox from "../../UI/Form/RadioBox/RadioBox";

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
              <p>What skills and expertise are most important to you ?</p>
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
          <li className="item-border">
          <p className="font-bold text-sm mb-5">
          What level of experience should your freelancer have?</p>
            <div className="grid sm:grid-cols-3 gap-2">
              <RadioBox
                id="enrtyLevel"
                title="Enrty Level"
                text="Looking for someone relatively new to this field"
              ></RadioBox>
              <RadioBox
                id="intermediate"
                title="Intermediate"
                text="Looking for substantial experience in this field"
              ></RadioBox>
              <RadioBox id="expert"
              title="Expert"
              text="Looking for comprehensive and deep expertise in this field"
              ></RadioBox>
            </div>

    
          </li>
          <li className="item-border">
          <Btn className="text-primary mr-3 border-hair border px-10 py-2 "
            handleClick={() => props.backStep("Expertise")}
            >
              Back
            </Btn>
            <Btn
              className="bg-primary text-white disabled:opacity-50 px-10 py-2 disabled:cursor-not-allowed"
              // disabled={true}
              handleClick={() => props.ToNextStep("Budget")}
            >
              Next
            </Btn>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobExpertise;

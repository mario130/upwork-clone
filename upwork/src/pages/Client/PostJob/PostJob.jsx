import { useState } from "react";
import JobDescription from "../../../components/Client/Job/JobDescription";
import JobDetails from "../../../components/Client/Job/JobDetails";
// import { Link } from "react-router-dom";
// import Btn from "../../../components/UI/Form/Btn/Btn";
// import Input from "../../../components/UI/Form/Input/Input";
import JobTitle from "../../../components/Client/Job/JobTitle";
const PostJob = () => {
  const initialState = [
    { tabName: "Title", isChecked: true },
    { tabName: "Description", isChecked: false },
    { tabName: "Details", isChecked: false },
    { tabName: "Expertise", isChecked: false },
    { tabName: "Visibilty", isChecked: false },
    { tabName: "Budget", isChecked: false },
  ];

  const [tabs, setTabs] = useState(initialState);
  // const [disabled, setDiabled] = useState(true);
  const ToNextStep = (tabName) => {
    setTabs(
      tabs.map((tab) =>
        tab.tabName === tabName ? { ...tab, isChecked: true } : tab
      )
    );
  };
  const backStep = (tabName) => {
    setTabs(
      tabs.map((tab) =>
        tab.tabName === tabName ? { ...tab, isChecked: false } : tab
      )
    );
  };
  return (
    <div id="jobPost" className="bg-bodyGray">
      <div className="container  mx-auto px-16 py-12 ">
        <div className="grid md:grid-cols-5 md:gap-4">
          <div className="md:col-span-1">
            <ul className="flex md:flex-col ">
              {tabs.map((tab, i) => (
                <li
                  className={
                    tab.isChecked
                      ? "text-gray-900 mb-3 mr-3 font-bold"
                      : "text-gray-400 mb-3 mr-3 font-bold"
                  }
                  key={i}
                >
                  {tab.tabName}
                </li>
              ))}
            </ul>
          </div>
          {tabs[0].isChecked && tabs[1].isChecked === false ? (
            <JobTitle ToNextStep={ToNextStep}  />
          ) : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked===false ? <JobDescription ToNextStep={ToNextStep} backStep={backStep}/>  : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked ? <JobDetails ToNextStep={ToNextStep} backStep={backStep}/> : null}

        </div>
      </div>
    </div>
  );
};

export default PostJob;

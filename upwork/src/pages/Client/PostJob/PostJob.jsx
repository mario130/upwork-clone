import { useState } from "react";
import JobDescription from "../../../components/Client/JobDescription";
// import { Link } from "react-router-dom";
// import Btn from "../../../components/UI/Form/Btn/Btn";
// import Input from "../../../components/UI/Form/Input/Input";
import JobTitle from "./../../../components/Client/JobTitle"
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
  const [disabled, setDiabled] = useState(true)
  const nextToDescription = () =>{
      setTabs(tabs.map(tab=> tab.tabName === "Description" ? {...tab,isChecked :true}: tab))
  }
  return (
    <div id="jobPost" className="bg-bodyGray">
      <div className="container  mx-auto px-16 py-12 ">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <ul className="flex flex-col">
              {tabs.map((tab, i) => (
                <li
                  className={
                    tab.isChecked
                      ? "text-gray-900 mb-3 font-bold"
                      : "text-gray-400 mb-3 font-bold"
                  }
                  key={i}
                >
                  {tab.tabName}
                </li>
              ))}
            </ul>
          </div>
          {tabs[0].isChecked && tabs[1].isChecked === false ? <JobTitle ToNextStep={nextToDescription}/> :null }
          {tabs[0].isChecked && tabs[1].isChecked  ? <JobDescription/> :null }

        </div>
      </div>
    </div>
  );
};

export default PostJob;

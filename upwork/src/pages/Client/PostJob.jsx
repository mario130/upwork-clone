import { useState } from "react";
import Budget from "../../components/Client/Job/Budget";
import JobDescription from "../../components/Client/Job/JobDescription";
import JobDetails from "../../components/Client/Job/JobDetails";
import JobExpertise from "../../components/Client/Job/JobExpertise";
import JobReview from "../../components/Client/Job/JobReview";
import Nav from '../../components/shared/navbar';
import Footer from '../../components/shared/footer';
import Navbar from '../../components/Client/Jobs-navbar';
// import { Link } from "react-router-dom";
// import Btn from "../../../components/UI/Form/Btn/Btn";
// import Input from "../../../components/UI/Form/Input/Input";
import JobTitle from "../../components/Client/Job/JobTitle";
const PostJob = () => {
  const initialState = [
    { tabName: "Title", isChecked: true },
    { tabName: "Description", isChecked: false },
    { tabName: "Details", isChecked: false },
    { tabName: "Expertise", isChecked: false },
    { tabName: "Budget", isChecked: false },
    { tabName: "Review", isChecked: false },


  ];

  const [tabs, setTabs] = useState(initialState);
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
  const goToCurrentTab = (tabName) => {
    const clonedTabs = [...tabs]
    for (const tab of clonedTabs) {
      tab.isChecked = false

    }
    for (const tab of clonedTabs) {
      tab.isChecked = true
      if (tab.tabName === tabName)
        break;
    }

    setTabs(clonedTabs);
  }
  return (
    <div id="jobPost" className="bg-bodyGray">
      <Nav />
      <Navbar activeLink="post-job" />
      <div className="container max-w-5xl mx-auto px-4 lg:px-6 py-12 ">
        <div className="grid md:grid-cols-5 md:gap-4">
          <div className="md:col-span-1">
            <ul className="flex md:flex-col ">
              {tabs.map((tab, i) => (
                <li
                  className={
                    tab.isChecked
                      ? "text-gray-900 mb-3 mr-3 font-bold cursor-pointer"
                      : "text-gray-400 mb-3 mr-3 font-bold cursor-pointer"
                  }
                  key={i}
                  onClick={() => goToCurrentTab(tab.tabName)}
                >
                  {tab.tabName}
                </li>
              ))}
            </ul>
          </div>
          {tabs[0].isChecked && tabs[1].isChecked === false ? (
            <JobTitle ToNextStep={ToNextStep} />
          ) : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked === false ? <JobDescription ToNextStep={ToNextStep} backStep={backStep} /> : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked && tabs[3].isChecked === false ? <JobDetails ToNextStep={ToNextStep} backStep={backStep} /> : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked && tabs[3].isChecked && tabs[4].isChecked === false ? <JobExpertise ToNextStep={ToNextStep} backStep={backStep} /> : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked && tabs[3].isChecked && tabs[4].isChecked && tabs[5].isChecked === false ? <Budget ToNextStep={ToNextStep} backStep={backStep} /> : null}
          {tabs[0].isChecked && tabs[1].isChecked && tabs[2].isChecked && tabs[3].isChecked && tabs[4].isChecked && tabs[5].isChecked ? <JobReview ToNextStep={ToNextStep} backStep={backStep} /> : null}


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;

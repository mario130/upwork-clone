import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuestHomepage from "./pages/guest-homepage";
import FreelancerHomepage from "./pages/freelancer/freelancer-homepage";
import Job from './pages/freelancer/job';
import FreelancerProfile from './pages/freelancer/freelancer-profile';
import Proposal from './pages/freelancer/proposal';
import Applicants from './pages/Client/Applicants';
import Jobs from './pages/Client/JobList';
import ActiveJobs from './pages/Client/ActiveJobs';
import AllProposals from './pages/freelancer/allProposals';
import Contract from './pages/shared/contract';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import SignupDetails from "./pages/Auth/SignupDetails";
import ClientHomePage from "./pages/Client/ClientHomePage/ClientHomePage";
// import ProfileStep1 from "./pages/complete-profile/profile-step1";
// import ProfileStep2 from "./pages/complete-profile/profile-step2";
// import ProfileStep3 from "./pages/complete-profile/profile-step3";
// import ProfileStep4 from "./pages/complete-profile/profile-step4";
// import ProfileStep5 from "./pages/complete-profile/profile-step5";
import PostJob from "./pages/Client/PostJob";
// import ProfileStep6 from "./pages/complete-profile/profile-step6";
// import ProfileStep7 from "./pages/complete-profile/profile-step7";
// import ProfileStep8 from "./pages/complete-profile/profile-step8";
// import ProfileStep9 from "./pages/complete-profile/profile-step9";
// import ProfileStep10 from "./pages/complete-profile/profile-step10";
// import ProfileStep11 from "./pages/complete-profile/profile-step11";
// import ProfileStep12 from "./pages/complete-profile/profile-step12";
import SuccessPage from "./components/Client/Job/SuccessPage";
import ProtectedFreelancer from './components/shared/ProtectedFreelancer'
import ProtectedClient from "./components/shared/ProtectedClient";
import CreateProfile from "./pages/complete-profile/create-profile";
import ErrorComponent from './pages/Error/Error';
function App() {


  return (
    <BrowserRouter>
      <div className="font-nuni">
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={GuestHomepage} />
          <Route path="/signup/details" exact component={SignupDetails} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" component={Login} />

          <ProtectedFreelancer path="/freelancer" exact component={FreelancerHomepage} />
          <ProtectedFreelancer path="/job/:id" component={Job} />
          <ProtectedFreelancer path="/freelancer-profile" component={FreelancerProfile} />
          <ProtectedClient path="/client/home" component={ClientHomePage} />
          <ProtectedFreelancer path="/proposal/:id" component={Proposal} />
          <ProtectedFreelancer path="/proposals" component={AllProposals} />

          <ProtectedClient path="/client/job-post" component={PostJob} />
          <ProtectedClient path="/client/succes-post" component={SuccessPage} />

          <ProtectedClient path="/contract/:id" component={Contract} />

          <ProtectedClient path="/applicants/:jobId" component={Applicants} />
          <ProtectedClient path="/job-list" component={Jobs} />
          <ProtectedClient path="/active-jobs" component={ActiveJobs} />
          <ProtectedFreelancer path="/freelancer/create-profile/:step" exact component={CreateProfile} />
          {/* <Route path="/ProfileStep1" component={ProfileStep1} />
          <Route path="/ProfileStep2" component={ProfileStep2} />
          <Route path="/ProfileStep3" component={ProfileStep3} />
          <Route path="/ProfileStep4" component={ProfileStep4} />
          <Route path="/ProfileStep5" component={ProfileStep5} />
          <Route path="/ProfileStep6" component={ProfileStep6} />
          <Route path="/ProfileStep7" component={ProfileStep7} />
          <Route path="/ProfileStep8" component={ProfileStep8} />
          <Route path="/ProfileStep9" component={ProfileStep9} />
          <Route path="/ProfileStep10" component={ProfileStep10} />
          <Route path="/ProfileStep11" component={ProfileStep11} />
          <Route path="/ProfileStep12" component={ProfileStep12} /> */}
          <Route path="*" component={ErrorComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuestHomepage from "./pages/guest-homepage";
import FreelancerHomepage from "./pages/freelancer-homepage";
import Job from './pages/job';
import FreelancerProfile from './pages/freelancer-profile';
import Proposal from './pages/proposal';
import Nav from "./components/shared/dev-navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/Auth/Signup/SignUp";
import Login from "./pages/Auth/Login/Login";
import SignupDetails from "./pages/Auth/SignupDetails/SignupDetails";
import ClientHomePage from "./pages/Client/ClientHomePage/ClientHomePage";
import ProfileStep1 from "./pages/complete-profile/profile-step1";
import ProfileStep2 from "./pages/complete-profile/profile-step2";
import ProfileStep3 from "./pages/complete-profile/profile-step3";
import ProfileStep4 from "./pages/complete-profile/profile-step4";
import ProfileStep5 from "./pages/complete-profile/profile-step5";
import ProfileStep6 from "./pages/complete-profile/profile-step6";
import ProfileStep7 from "./pages/complete-profile/profile-step7";

function App() {
  return (
    <BrowserRouter>
      <div className="font-nuni">
        <Nav />
        <Switch>
          <Route path="/" exact component={GuestHomepage} />
          <Route path="/freelancer" component={FreelancerHomepage} />
          <Route path="/job" component={Job} />
          <Route path="/freelancer-profile" component={FreelancerProfile} />
          <Route path="/client/home" component={ClientHomePage} />
          <Route path="/proposal" component={Proposal} />
          <Route path="/signup/details" exact component={SignupDetails} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/ProfileStep1" component={ProfileStep1} />
          <Route path="/ProfileStep2" component={ProfileStep2} />
          <Route path="/ProfileStep3" component={ProfileStep3} />
          <Route path="/ProfileStep4" component={ProfileStep4} />
          <Route path="/ProfileStep5" component={ProfileStep5} />
          <Route path="/ProfileStep6" component={ProfileStep6} />
          <Route path="/ProfileStep7" component={ProfileStep7} />



        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

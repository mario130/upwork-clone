import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuestHomepage from "./pages/guest-homepage";
import FreelancerHomepage from "./pages/freelancer-homepage";
import Job from './pages/job';
import FreelancerProfile from './pages/freelancer-profile';
import Nav from "./components/shared/dev-navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/Auth/Signup/SignUp";
import Login from "./pages/Auth/Login/Login";
import SignupDetails from "./pages/Auth/SignupDetails/SignupDetails";
import ClientHomePage from "./pages/Client/ClientHomePage/ClientHomePage";

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
          <Route path="/signup/details" exact component={SignupDetails} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" component={Login} />
          


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import GuestHomepage from "./pages/guest-homepage";
import FreelancerHomepage from "./pages/freelancer-homepage";
import Nav from "./components/shared/dev-navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./pages/Auth/Signup/SignUp";
import Login from "./pages/Auth/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="font-nuni">
        <Nav />
        <Switch>
          <Route path="/" exact component={GuestHomepage} />
          <Route path="/freelancer" component={FreelancerHomepage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

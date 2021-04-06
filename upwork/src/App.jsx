import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/guest/navbar';
import Signup from './pages/Auth/Signup/SignUp';
import GuestHomepage from './pages/guest-homepage';

function App() {
  return (
    <div className="font-nuni">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={GuestHomepage}/>
      <Route exact path="/signup" component={Signup}/>

      </Switch>
    </div>
  );
}

export default App;

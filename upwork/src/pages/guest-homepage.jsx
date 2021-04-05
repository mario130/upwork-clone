import Navbar from "../components/guest/navbar";
import Hero from '../components/guest/hero';
import Clients from '../components/guest/clients-talents';
import WhatTheySay from '../components/guest/what-say';
import Footer from '../components/guest/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <WhatTheySay />
      <Footer />
    </div>
  );
}

export default App;

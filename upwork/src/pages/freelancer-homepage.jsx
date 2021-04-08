import React from 'react';
import Footer from '../components/freelancer/footer';
import Main from '../components/freelancer/main';
import Nav from '../components/freelancer/navbar';

const FreelancerHomepage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default FreelancerHomepage;
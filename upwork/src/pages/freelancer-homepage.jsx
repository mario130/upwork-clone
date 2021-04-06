import React from 'react';
import Footer from '../components/freelancer/footer';
import MainMobile from '../components/freelancer/main-mobile';
import Nav from '../components/freelancer/navbar';

const FreelancerHomepage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <MainMobile />
      <Footer />
    </div>
  )
}

export default FreelancerHomepage;
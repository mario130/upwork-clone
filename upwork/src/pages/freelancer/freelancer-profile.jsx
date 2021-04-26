import React from 'react';
import Footer from '../../components/shared/footer';
import Main from '../../components/freelancer/profile';
import Nav from '../../components/shared/navbar';

const FreelancerProfile = () => {


  return (
    <div className="bg-bodyGray">
      <Nav variation="freelancer" />
      <Main />
      <Footer />
    </div>
  )
}

export default FreelancerProfile;
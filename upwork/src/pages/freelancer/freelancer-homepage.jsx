import React from 'react';
import Footer from '../../components/shared/footer';
import Feed from '../../components/freelancer/feed';
import Nav from '../../components/shared/navbar';

const FreelancerHomepage = () => {

  return (
    <div className="bg-bodyGray">
      <Nav variation="freelancer" />
      <Feed />
      <Footer />
    </div>
  )
}

export default FreelancerHomepage;
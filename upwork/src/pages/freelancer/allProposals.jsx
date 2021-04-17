import React from 'react';
import Footer from '../../components/shared/footer';
// import Job from '../../components/freelancer/job';
import Proposals from '../../components/freelancer/allProposals';
import Nav from '../../components/shared/navbar';

const AllProposals = (props) => {

  return (
    <div className="bg-bodyGray">
      <Nav />
      <Proposals />
      <Footer />
    </div>
  )
}

export default AllProposals;
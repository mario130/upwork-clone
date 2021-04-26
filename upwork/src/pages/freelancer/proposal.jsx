import React from 'react';
import Footer from '../../components/shared/footer';
import Proposal from '../../components/freelancer/proposal';
import Nav from '../../components/shared/navbar';

const ProposalPage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav variation="freelancer" />
      <Proposal />
      <Footer />
    </div>
  )
}

export default ProposalPage;
import React from 'react';
import Footer from '../../components/shared/footer';
import Job from '../../components/freelancer/job';
import Nav from '../../components/shared/navbar';

const JobPage = (props) => {

  return (
    <div className="bg-bodyGray">
      <Nav variation="freelancer" />
      <Job id={props.match.params.id} />
      <Footer />
    </div>
  )
}

export default JobPage;
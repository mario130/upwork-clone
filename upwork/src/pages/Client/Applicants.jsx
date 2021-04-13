import React from 'react';
import Footer from '../../components/shared/footer';
import JobList from '../../components/Client/JobApplicants';
import Nav from '../../components/shared/navbar';

const Jobs = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <JobList />
      <Footer />
    </div>
  )
}

export default Jobs;
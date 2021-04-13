import React from 'react';
import Footer from '../../components/shared/footer';
import Jobs from '../../components/Client/ClientJobs';
import Nav from '../../components/shared/navbar';

const JobList = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <Jobs />
      <Footer />
    </div>
  )
}

export default JobList;
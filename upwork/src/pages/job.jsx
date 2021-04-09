import React from 'react';
import Footer from '../components/shared/footer';
import Job from '../components/freelancer/job';
import Nav from '../components/shared/navbar';

const JobPage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <Job />
      <Footer />
    </div>
  )
}

export default JobPage;
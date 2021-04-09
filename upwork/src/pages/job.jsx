import React from 'react';
import Footer from '../components/shared/footer';
import Main from '../components/job/main';
import Nav from '../components/shared/navbar';

const JobPage = () => {


  return (
    <div className="bg-bodyGray">
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default JobPage;
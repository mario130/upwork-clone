import React from 'react';
import Footer from '../../components/shared/footer';
import Feed from '../../components/freelancer/feed';
import Nav from '../../components/shared/navbar';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const FreelancerHomepage = () => {
  const isAuthenticated = useSelector(state => state.user.token !== "")

  return (
    <div className="bg-bodyGray">
      {!isAuthenticated ? <Redirect to="/login" /> : null}
      <Nav />
      <Feed />
      <Footer />
    </div>
  )
}

export default FreelancerHomepage;
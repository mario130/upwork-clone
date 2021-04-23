import React from 'react';
import Footer from '../../components/shared/footer';
import Contract from '../../components/shared/Contract';
import Nav from '../../components/shared/navbar';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const JobPage = () => {
  const isAuthenticated = useSelector(state => state.user.token !== "")

  return (
    <div className="bg-bodyGray">
      {!isAuthenticated ? <Redirect to="/login" /> : null}
      <Nav />
      <Contract />
      <Footer />
    </div>
  )
}

export default JobPage;
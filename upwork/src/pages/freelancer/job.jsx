import React from 'react';
import Footer from '../../components/shared/footer';
import Job from '../../components/freelancer/job';
import Nav from '../../components/shared/navbar';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const JobPage = (props) => {
  const isAuthenticated = useSelector(state => state.user.token !== "")

  return (
    <div className="bg-bodyGray">
      {!isAuthenticated ? <Redirect to="/login" /> : null}
      <Nav />
      <Job id={props.match.params.id} />
      <Footer />
    </div>
  )
}

export default JobPage;
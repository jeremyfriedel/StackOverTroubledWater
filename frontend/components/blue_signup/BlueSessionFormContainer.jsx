import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, demoLogin } from '../../actions/session_actions';
import BlueSessionForm from './BlueSessionForm';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: < Link to="/login"> Log In </Link>
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(demoLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlueSessionForm);

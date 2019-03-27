import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import HeaderContainer from './header_and_search/header_container'


import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';


const App = () => {
  // why cant make pure function?
  return (
    <>
    <header>
    <h4>Stack Over Troubled Water</h4>
        < HeaderContainer / >
    </header>

    <Switch>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />

      </Switch>


      < footer >


      </footer >


    </>
  )


};

export default App;
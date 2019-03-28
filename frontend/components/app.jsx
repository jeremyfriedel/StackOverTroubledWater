import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import HeaderContainer from './header_and_search/header_container';
import QuestionIndexContainer from './questions/QuestionIndexContainer';



const App = () => {
  // why cant make pure function?
  return (
    <>
    <header>
    {/* <h4>Stack Over Troubled Water</h4> */}
        {/* <Link to="/" className="header-link">
          <img src={window.logoURL} className="logo-image" />
        </Link> */}

        < HeaderContainer / >

    </header>

    <Switch>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Route path="/" component={QuestionIndexContainer} />


      </Switch>


      < footer >
        <img className="logo-image" src={window.logoURL} alt=""/>
        <ul className = "first_column">
          <li className='top-level-list'>STACK OVER TROUBLED WATER</li>
          <li>Questions</li>
          <li>Developer Jobs Directory</li>
          <li>Salary Calculator</li>
          <li>Help</li>
          <li>Mobile</li>
          <li>Disable Responsiveness</li>


        </ul>
        <ul className="second_column">
          <li className='top-level-list'>PRODUCTS</li>
          <li>Teams</li>
          <li>Talent</li>
          <li>Advertising</li>
          <li>Enterprise</li>


        </ul>

        <ul className="second_column">
          <li className='top-level-list'>COMPANY</li>
          <li>About</li>
          <li>Teams</li>
          <li>Work Here</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>


        </ul>

                <ul className="second_column">
          <li className='top-level-list'>STACK EXCHANGE NETWORK</li>
          <li>Technology</li>
          <li>Life / Arts</li>
          <li>Culture / Recreation</li>
          <li>Science</li>
          <li>Other</li>


        </ul>




      </footer >


    </>
  )


};

export default App;
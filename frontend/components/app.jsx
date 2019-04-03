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
import FooterComp from './footer/footer';
import LeftSidebar from './left_sidebar/sidebar';
import QuestionFormContainer from './questions/QuestionFormContainer';
import RightSidebarContainer from './right_sidebar/RightSidebarContainer';
import AnswerIndexContainer from './answers/AnswerIndexContainer';
import QuestionShowContainer from './questions/QuestionShowContainer';



const App = () => {
  // why cant make pure function?
  return (
    <div className = "holder">
      <div className="header-and-body">
    <header>
    {/* <h4>Stack Over Troubled Water</h4> */}
        {/* <Link to="/" className="header-link">
          <img src={window.logoURL} className="logo-image" />
        </Link> */}

        < HeaderContainer / >

    </header>

    <div className = "main-content">
        <LeftSidebar />

    <Switch>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        {/* <Route path="/testing" component={LeftSidebar} />  */}
            {/* <Route path="/dev" component={QuestionShowContainer} />  */}
        <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
        <Route path="/" component={QuestionIndexContainer} />
        {/* <Route path="/" component={QuestionFormContainer} /> */}
        {/* <Route path="/" component={QuestionShowContainer} /> */}

        

      </Switch>
  <RightSidebarContainer />

      </div>
        </div>
      < footer >
        <FooterComp />
      </footer >


    </div>
  )


};

export default App;
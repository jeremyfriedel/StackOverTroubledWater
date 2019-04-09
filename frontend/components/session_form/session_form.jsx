import React from 'react';
import LeftSideBar from '../left_sidebar/sidebar';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
  }

  update(field) {
    return event => this.setState ({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleSubmitDemo(event) {
    event.preventDefault();
    this.props.demoLogin();
  }


  renderErrors() {
    return (
      <div>
      <ul>
        {this.props.errors.map((error, index) => (
              <li key={`error-${index}`}>
                {error}
              </li>
            )
          )
        }
      </ul>
      </div>
    );
  }
  renderSignUp() {
    if (this.props.formType === "login") {
      return (
        <>
          <div className="signup-link" >Don’t have an account? <a href="#/signup">Sign up </a><br></br>
            Are you an employer? <a href=""> Give me a job! </a>
          </div>


        </>
      )
    }
    else {
      return (<div className="login-box-below" ></div>)
    }

  }


  render() {
    return (
    <>
    <LeftSideBar/>
      <div className="auth-box-container">
        <div className="errors">{this.renderErrors()}</div>

      <div className = "auth-box">

      <form onSubmit={this.handleSubmit}>
          <div className="signup-or-login-text"> {this.props.formType}</div>

          {/* {this.props.formType} or {this.props.navLink} */}
          
            <div className = "username-box-label">Username</div>
          <div className = "input-outer-box">              
            
              <label>
                <input type = "text" 
                      value={this.state.username}
                      onChange={this.update('username')}
                      className = "username-box input-box"
                      />

                      </label>
                      </div>
            <div className="password-box-label">Password</div>
      <div className = "input-outer-box">              
              <label>
                <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="password-box input-box"

                    />

                  </label>
          </div>


          <input type="submit" className="big-blue-button-session" value={this.props.formType} />




      </ form>

        <form onSubmit={this.handleSubmitDemo}>
          <input type="submit" className="demoUser-button-session" value="Demo User" />
        </ form>


      </div>

        {this.renderSignUp()}


      </div>
      </>
    );
  }
}

export default SessionForm;
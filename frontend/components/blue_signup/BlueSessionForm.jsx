import React from 'react';

class BlueSessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);

  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
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
          <div className="blue-signup-link" >Don’t have an account? <a href="#/signup">Sign up </a><br></br>
            Are you an employer? <a href=""> Give me a job! </a>
          </div>


        </>
      )
    }
    else {
      return (<div className="blue-login-box-below" ></div>)
    }

  }


  render() {
    return (
      <div className = "the-blue-box">

        <div className= "blue-promo-text">
          <div className="blue-promo-title">
          Learn, Share, Build
          </div>
          <div className="blue-promo-para1">
          Each month, over 50 million developers come to Stack Overflow to learn, share their knowledge, and build their careers.
           </div>
          <div className="blue-promo-para2">
            Join the world’s largest developer community.
            </div>
 
 
 
        </div>

      <div className="blue-auth-box-container">
        <div className="blue-errors">{this.renderErrors()}</div>

        <div className="blue-auth-box">

          <form onSubmit={this.handleSubmit}>
            <div className="blue-signup-or-login-text"> {this.props.formType}</div>

            {/* {this.props.formType} or {this.props.navLink} */}

            <div className="blue-username-box-label">Username</div>
            <div className="blue-input-outer-box">

              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="blue-username-box input-box"
                />

              </label>
            </div>
            <div className="blue-password-box-label">Password</div>
            <div className="blue-input-outer-box">
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="blue-password-box input-box"

                />

              </label>
            </div>


            <input type="submit" className="blue-big-blue-button-session" value={this.props.formType} />




          </ form>

            <form onSubmit={this.handleSubmitDemo}>


              <input type="submit" className="demoUser-button" value="Demo User" />




            </ form>


        </div>

        {this.renderSignUp()}


      </div>
      </div>
    );
  }
}

export default BlueSessionForm;
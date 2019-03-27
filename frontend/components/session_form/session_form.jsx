import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className = "auth-box">

      <form onSubmit={this.handleSubmit}>
          <div className="signup-or-login-text"> {this.props.formType}</div>

          {/* {this.props.formType} or {this.props.navLink} */}
          {this.renderErrors()}
          Username
          <div className = "input-outer-box">              
            
              <label>
                <input type = "text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className = "username-box input-box"
                      />

                      </label>
                      </div>
                      Password
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

      </div>
    );
  }
}

export default SessionForm;
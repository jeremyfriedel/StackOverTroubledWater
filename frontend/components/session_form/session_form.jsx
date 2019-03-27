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
      <ul>
        {this.props.errors.map((error, index) => (
              <li key={`error-${index}`}>
                {error}
              </li>
            )
          )
        }
      </ul>
    );
  }

  render() {
    return (
      <div className = "auth-box">
        <h3>{this.props.formType}</h3>
      <form onSubmit={this.handleSubmit}>
          {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
      <br/>
      <label>Username
        <input type = "text"
               value={this.state.username}
               onChange={this.update('username')}
               />

               </label>
      
      <label>Password
        <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />

          </label>


          <input type="submit" value={this.props.formType} />





      </ form>

      </div>
    );
  }
}

export default SessionForm;
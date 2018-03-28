import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class UserLogin extends React.Component{

  state = {
    signup: false,
    login: true
  };

  renderSwitch = (word) => {
    var signup, login;

    if (word == "login") {
      signup = false;
      login = true;
    } else {
      login = false; 
      signup = true;
    }
    
    return this.setState({login: login, signup: signup})
  }

  render() {
    var self = this;
    return (
      <div className="row">
        <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4"></div>

        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4 loginpanel">
            <div className="gradient" id="loginbox">
              <div className="row">
                <div id="buttons">
                  <button id="loginButton" onClick={self.renderSwitch.bind(null,"login")} className={self.state.login ? "main" : "sideline"}>login</button>
                  <button id="signupButton" onClick={self.renderSwitch.bind(null,"signup")} className={self.state.signup ? "main" : "sideline"}>sign up</button>
                </div>
              </div>
              {self.state.signup ? <Signup/> : null}
              {self.state.login ? <Login /> : null}
            </div>
          </div>

        <div className="col-0 col-sm-0 col-md-2 col-lg-2 col-xl-4"></div>  
      </div>
    );
  }
}

class Signup extends React.Component {
  render() {
    return (
      <div className="row text-center">     
        <div id="signup">
          <input type="text" id="first" placeholder="first name"/>
          <input type="text" id="last" placeholder="last name"/>
          <input type="email" id="email" placeholder="email"/>
          <input type="password" id="password" placeholder="password"/>
          <input type="password" id="confirm" placeholder="confirm password"/>
          <Link to ='/'><button id="signup-send" className="send">sign me up!</button></Link>
        </div>
      </div>
    );
  }
}
  
class Login extends React.Component {
  render() {
    return (
      <div className="row text-center">           
        <div id="login">
          <input type="email" id="email" placeholder="email"/>
          <input type="password" id="password" placeholder="password"/>
          <Link to='/dashboard'><button id="login-send" className="send">log me in!</button></Link>
      </div> 
    </div>
    );
  }
}

export default UserLogin;
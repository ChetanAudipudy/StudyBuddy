import React from 'react';
import Header from './Header';

class Parent extends React.Component {
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

  render(){
    var self = this;
    return (
      <div id="space">
        <div>
          <div id="buttons">
            <p id="loginButton" onClick={self.renderSwitch.bind(null,"login")} className={self.state.login ? "main" : "sideline"}>login</p>
            <p id="signupButton" onClick={self.renderSwitch.bind(null,"signup")} className={self.state.signup ? "main" : "sideline"}>sign up</p>
          </div>
        
          {self.state.signup ? <Signup/> : null}
          {self.state.login ? <Login /> : null}
        </div>
      </div>
    )
  }
}

class Signup extends React.Component {
  render() {
    return (
      <div>     
        <div id="signup">
          <input type="text" id="first" placeholder="first name"/>
          <input type="text" id="last" placeholder="last name"/>
          <input type="email" id="email" placeholder="email"/>
          <input type="password" id="password" placeholder="password"/>
          <input type="password" id="confirm" placeholder="confirm password"/>
          <button id="send">sign me up!</button>
        </div>
      </div>
    )
  }
}
  
class Login extends React.Component {
  render(){
    return (
      <div>           
        <div id="login">
          <input type="email" id="email" placeholder="email"/>
          <input type="password" id="password" placeholder="password"/>
          <button id="send">log me in!</button>
      </div> 
    </div>
    )
  }
}
  
export default Parent;
import React from 'react';
import Header from './Header'

var Parent  = React.createClass({
    getInitialState:function(){
      return {signup:false,login:true}
    },
    switch:function(word){
      var signup,login;
      if(word == "login"){signup = false;login = true;}
      else{login = false; signup = true;}
      return this.setState({login:login,signup:signup})
      
    },
    render:function(){
      
          var self = this;
          return (
             <div id="space">
                <div>
                
                        <div id="buttons">
                        <p id="loginButton" onClick={self.switch.bind(null,"login")} className={self.state.login ? "teal":"blue"}> Login</p>
                        <p id="signupButton" onClick={self.switch.bind(null,"signup")} className={self.state.signup ? "teal":"blue"}>Sign Up!</p>

                        </div>
                
                     { self.state.signup?<Signup/> : null}
                     {self.state.login? <Login /> : null}
              
               </div>
          </div>
          )
      
      
    }
  })
  
  
  var Signup = React.createClass({
    
    
        render:function(){
          
          
              return (
              <div>
                     
                    <div id="signup">
                          <input type="text" id="first" placeholder="First Name"/>
                          <input type="text" id="last" placeholder="Last Name"/>
                          <input type="email" id="email" placeholder="Email"/>
                          
                          <input type="password" id="password" placeholder="Password"/>
                          <input type="password" id="confirm" placeholder="Confirm Password"/>
                          <button id="send">Sign Up</button>
              </div>
                  </div>
              
              )
        }
  })
  
  var Login = React.createClass({
        render:function(){
          
          
          
              return (
              
                    <div>
                                
                   <div id="login">
                      <input type="email" id="email" placeholder="Email"/>
                      <input type="password" id="password" placeholder="Password"/>
                      <button id="send">Login</button>
              </div>
                  
                    </div>
                
              )
        }
  })
  
export default Parent;
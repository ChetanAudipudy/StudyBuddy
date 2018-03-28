import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/dashboard';
import Doesnotexist from '../components/Doesnotexist';


const StudyBuddy = () => (
  <BrowserRouter>
   <Switch>
      <Route path="/" component ={LandingPage} exact={true} />
      <Route path="/dashboard" component ={Dashboard} /> 
      <Route component={Doesnotexist} />    
   </Switch>
  </BrowserRouter>
);

export default StudyBuddy;

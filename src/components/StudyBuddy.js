import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './dashboard';


const StudyBuddy = ()=> (
  <BrowserRouter>
   <div>
      <Route path="/" component ={LandingPage} exact={true} />
      <Route path="/dashboard" component ={Dashboard} />     
   </div>
  </BrowserRouter>
)
 export default StudyBuddy;

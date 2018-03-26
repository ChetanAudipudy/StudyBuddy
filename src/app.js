import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import StudyBuddy from './components/StudyBuddy';
import '../src/styles/style.css';
import '../src/styles/components/UserLogin.css';
import '../src/styles/components/Header.css';
import '../src/styles/components/Appbar.css'

ReactDOM.render(<StudyBuddy /> , document.getElementById('app'));
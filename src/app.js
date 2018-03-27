import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import StudyBuddy from './Router/StudyBuddy';
import '../src/styles/style.css';
import '../src/styles/components/UserLogin.css';
import '../src/styles/components/Header.css';
import '../src/styles/components/Appbar.css';
import './styles/components/flashcards.css'

ReactDOM.render(<StudyBuddy /> , document.getElementById('app'));
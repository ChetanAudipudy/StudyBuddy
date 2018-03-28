import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const Flashcard = (props) => {
  const { classes } = props;
  return (
    <Link to={props.cardLink}><div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cardbox">
      <div className="card">
        <button className="white-button card-title">{props.flashcardText}</button>
        <button className="gradient-button delete" id="delete">x</button>
      </div>
    </div></Link>
  );
}

export default Flashcard;
import React from 'react';
import Navbar from './Navbar';

export default class QuestionPage extends React.Component {
    
    render() {
        return (
            <div className="fitpage">
              <Navbar />

                <div className="container text-center">
                  <div className="row qform">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h1 className="qh1">create a new set of flashcards!</h1>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">basic information</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <input className="addnew" type="text" id="setname" placeholder="name"/>
                      <input className="addnew" type="text" id="setsubject" placeholder="subject"/>
                      <input className="addnew largetext" type="text" id="description" placeholder="description"/>
                    </div>
                      
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question one</h2>
                    </div>
                      
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q1text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q1a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q1a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q1a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct1" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question two</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q2text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q2a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q2a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q2a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct2" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question three</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q3text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q3a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q3a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q3a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct3" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question four</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q4text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q4a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q4a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q4a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct4" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h2 className="qh2">question five</h2>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" type="text" id="q5text"/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew" type="text" id="q5a1" placeholder="1"/>
                      <input className="addnew" type="text" id="q5a2" placeholder="2"/>
                      <input className="addnew" type="text" id="q5a3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" type="text" id="correct5" placeholder="enter 1, 2, or 3"/>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <button className="white-button oversized" id="submit">create my flashcard set!</button>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
};
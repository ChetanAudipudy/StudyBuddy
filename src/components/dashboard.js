import React from 'react';
import Navbar from './Navbar';
import Flashcards from './flashcards';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div>
            <Navbar />
            <Flashcards />
            </div>
        )
    }
    //dashboard code goes here. It will include all the other components such as flashcards component, navbar and anything else we decide to add once the user has logged in.
};